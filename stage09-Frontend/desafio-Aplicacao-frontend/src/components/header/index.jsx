import {RiShutDownLine} from 'react-icons/ri'
import {Container, Profile, Logout, Search} from './style'


export function Header() {
    return(
        <Container>
            <Profile>
                <div>
                    <h1>RocketMovies</h1>
                </div>

            </Profile>

            <Search>
                <input type="text" name="text" id="text" placeholder="Pesquisar pelo título" />
            </Search>

            <Logout to="/profile">
                <div>
                    <div>
                        <strong>Ludielen Hernandes</strong>
                        <RiShutDownLine/>
                   </div>

                   <div>
                        <img src="https://github.com/ludielen.png" alt="foto do usuario" />
                    </div>
                </div>
            </Logout>
        </Container>
    )
}