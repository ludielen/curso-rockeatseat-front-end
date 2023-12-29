import { Container, Brand, Content, NewNotes } from './styles'
import { Header } from '../../components/header'
import { VscAdd } from "react-icons/vsc"
import { AiOutlineStar } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home() {
    const [movies, setMovies] = useState([])

    const [moviesFiltered, setMoviesFiltered] = useState([])

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/notes/notes");
            setMovies(response.data)
            console.log(response.data)
        }

        fetchTags();
    }, [])


    useEffect(() => {
        setMovies(moviesFiltered)
    }, [moviesFiltered])

    return (
        <Container>
            <Header
                setMoviesFiltered={setMoviesFiltered}
            />
            <div>
                <Brand>
                    <div>
                        <h1>Meus Filmes</h1>
                    </div>
                </Brand>

                <NewNotes to="createMovie">
                    <div>
                        <div>
                            <span>Adicionar filme</span>
                        </div>

                        <div>
                            <VscAdd />
                        </div>
                    </div>


                </NewNotes>
            </div>

            <div className="handleMovie">
                {(() => {
                    if (movies.length === 0) {

                        return <h3>Não tem filmes adicionados!</h3>
                    }
                })()}
            </div>

            {movies && movies.map(movie => (
                <Content>
                    <div key={String(movie.movie_id)} id="conteudo">
                        <div>
                            <h2>{movie.movie_title}</h2>
                        </div>

                        <div id="estrela">
                            {Array.from({ length: movie.movie_review }, (_, index) => (
                                <div key={index}>
                                    <AiOutlineStar />
                                </div>
                            ))}
                        </div>

                        <p>
                            {movie.movie_description}
                        </p>

                        <div id="generoFilme">
                            <ul>
                                {movie.tag_names && movie.tag_names.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </Content>

            ))}

        </Container>

    )
}