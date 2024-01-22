import { Container, Logout, Search, IconWrapper } from './style'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import { PiSignOut } from "react-icons/pi";

export function Header({ setPlatesFiltered }) {
    const isAdmin = localStorage.getItem("@foodexplorer:isAdmin");
    const [search, setSearch] = useState("")

    const { signOut } = useAuth()

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            setPlatesFiltered(search)
        }
    };

    return (
        <Container>
            <div>
                <img src="/src/assets/logo-food-explorer.svg" alt="logo-food-explorer" />
                <h1>Food Explorer</h1>
                {isAdmin === "true" && <span>admin</span>}

            </div>

            <Search>
                <IconWrapper>
                    <CiSearch />
                </IconWrapper>
                <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Busque por pratos"
                    onChange={(e) => setSearch(e.target.value)} 
                    onKeyDown={handleEnter}
                />
            </Search>

            {
                isAdmin === "true" ? (
                    <Link to="/createPlate">
                        <Button title="Novo prato" />
                    </Link>
                ) : (
                    <Button title="Pedidos(0)" imgAdress="/src/assets/button-pedidos.svg" />
                )
            }

            <Logout to="/">
                <div className='Sair'>
                    <div>
                        <PiSignOut onClick={signOut} />
                    </div>
                </div>

            </Logout>
        </Container>
    )
}