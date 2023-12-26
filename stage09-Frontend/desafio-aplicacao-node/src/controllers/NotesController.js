const knex = require("../database/knex")

class NotesController {
    async create(request, response) {
        const { title, description, grade, tags } = request.body

        console.log(request.body)
        const user_id = request.user.id

        const [note_id] = await knex("movie_notes").insert({
            title,
            description,
            user_id,
            grade
        })


        const tagsInsert = tags.map(name => {
            return {
                note_id,
                name,
                user_id
            }
        })

        await knex("movie_tags").insert(tagsInsert);

        return response.json();
    }

    async show(request, response) {
        const { id } = request.params

        const note = await knex("movie_notes").where({ id }).first()
        const tags = await knex("movie_tags").where({ note_id: id }).orderBy("name")

        return response.json({
            ...note,
            tags
        });
    }

    async getNotes(request, response) {
        const user_id = request.user.id

        const query = knex('movie_notes as m')
            .select('m.id as movie_id', 'm.title as movie_title', 'm.description as movie_description', 'm.grade as movie_review')
            .count('t.id as tag_count')
            .select(knex.raw('GROUP_CONCAT(t.name) as tag_names'))
            .from('movie_notes as m')
            .innerJoin('movie_tags as t', 'm.id', 't.note_id')
            .where('m.user_id', user_id)
            .groupBy('m.id', 'm.title', 'm.description');

        query
            .then((results) => {
                const formattedResults = results.map((result) => ({
                    movie_id: result.movie_id,
                    movie_title: result.movie_title,
                    movie_description: result.movie_description,
                    tag_count: result.tag_count,
                    tag_names: result.tag_names.split(','),
                    movie_review: result.movie_review
                }));

                return response.json(formattedResults);
            })
            .catch((error) => {
                console.error(error);
                return response.status(500).json({ error: 'Erro ao obter os dados do banco de dados' });
            });
    }

    async getMoviesByQueryParams(request, response){
        const title = request.query.title;
        const user_id = request.user.id
        
        const query = knex('movie_notes as m')
        .select('m.id as movie_id', 'm.title as movie_title', 'm.description as movie_description', 'm.grade as movie_review')
        .count('t.id as tag_count')
        .select(knex.raw('GROUP_CONCAT(t.name) as tag_names'))
        .from('movie_notes as m')
        .innerJoin('movie_tags as t', 'm.id', 't.note_id')
        .where('m.user_id', user_id)
        .whereRaw('LOWER(m.title) LIKE LOWER(?)', [`${title}%`])
        .groupBy('m.id', 'm.title', 'm.description');

        query.then((results) => {
            const formattedResults = results.map((result) => ({
                movie_id: result.movie_id,
                movie_title: result.movie_title,
                movie_description: result.movie_description,
                tag_count: result.tag_count,
                tag_names: result.tag_names.split(','),
                movie_review: result.movie_review
            }));

            return response.json(formattedResults);
        })
        .catch((error) => {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao obter os dados do banco de dados' });
        });
    }

    async delete(request, response) {
        const { id } = request.params

        await knex("movie_notes").where({ id }).delete()

        return response.json()
    }

}

module.exports = NotesController