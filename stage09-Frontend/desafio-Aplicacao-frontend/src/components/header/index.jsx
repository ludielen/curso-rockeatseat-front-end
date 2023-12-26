import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout, Search } from './style'
import { useAuth } from '../../hooks/auth'
import { api } from '../../../../desafio-aplicacao-node/src/services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useEffect, useState } from 'react'
import { AiFillTags } from 'react-icons/ai'


export function Header({ setMoviesFiltered }) {
    const [search, setSearch] = useState("")


    async function fetchMovies(search) {
        let response
        if (search === "") {
            response = await api.get("/notes/notes");
        } else {
            response = await api.get(`/notes/notes/query?title=${search}`)
        }
        setMoviesFiltered(response.data);

    }

    const handleEnter = (event) => {
        // if (event.key === 'Enter') {
        //     fetchMovies()
        // }
        if (event.key === 'Enter') {
            fetchMovies()
        }
    };

    const handleSearch =(event) =>{
        const newSearch = event.target.value;
        setSearch((prevSearch) => {
            // Use a função para garantir que você está trabalhando com o estado mais recente
            fetchMovies(newSearch);
        });
    }

    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return (
        <Container>
            <div>
                <h1>RocketMovies</h1>
            </div>

            <Search>
                <input type="text" name="text" id="text" placeholder="Pesquisar pelo título"
                onChange={(e) => handleSearch(e)} 
                    // onChange={(e) => setSearch(e.target.value)} 
                    // onKeyDown={handleEnter}

                />
            </Search>

            <div className='perfilRoot'>
                <Profile to="/profile">
                    <div className='NomeFoto'>
                        <div>
                            <img src={avatarUrl} alt={user.avatar} />
                        </div>
                    </div>
                </Profile>

                <Logout to="/">
                    <div className='Sair'>
                        <div>
                            <strong>{user.name}</strong>
                        </div>

                        <div>
                            <RiShutDownLine onClick={signOut} />
                        </div>
                    </div>

                </Logout>
            </div>


        </Container>
    )
}