import { useState } from "react"
import { Container, Form } from './styles.js'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../services/api.js'
import { Link, useNavigate } from "react-router-dom"


export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
           return alert("Preencha todos os campos!")
        } 

        api.post("/users", {name, email, password})
        .then(() =>{
            alert("Usuário cadastrado com sucesso")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possivel cadastrar");
            }
        } )
    }

    return (
        <Container>
            <div className='title'>
                <img src="/assets/logo-food-explorer.svg" alt="logo-food-explorer" />
                <h1>Food Explorer</h1>
            </div>

            <Form>
                <h2>Crie a sua conta</h2>


                <Input
                    label="Seu nome"
                    placeholder="Exemplo: Maria da Silva"
                    type="text"

                    onChange={e => setName(e.target.value)}
                />
                <Input
                    label="Email"
                    placeholder="Exemplo: exemplo@exemplo.com"
                    type="text"

                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    label="Senha"
                    placeholder="No minimo 6 caracteres"
                    type="password"

                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Criar conta" onClick={handleSignUp}/>

                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    )
}

