import {useState} from "react"
import {Container, Form, ImageForm} from './styles.js'
import {Button} from '../../components/Button/index.jsx'
import {Input} from '../../components/Input'
import {FiUser,FiMail, FiLock } from 'react-icons/fi'
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineArrowLeft } from "react-icons/ai";

import {api} from '../../services/api.js'



export function SignUp(){
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
            <Form>
                    <h1>RocketMovies</h1>
                    <p> Aplicação para acompanhar tudo que assistir. </p>
                    <h2>Crie a sua conta</h2>
               
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}

                    onChange={event => setName(event.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}

                    onChange={event => setEmail(event.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}

                    onChange={event => setPassword(event.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/">
                Voltar para o login
                <AiOutlineArrowLeft/>
                </Link>
               
            </Form>

            <ImageForm/>
        </Container>

    )
}