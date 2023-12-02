import {Container, Form, ImageForm} from './styles.js'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'
import {Input} from '../../components/Input'
import {FiUser,FiMail, FiLock } from 'react-icons/fi'
import {Link} from 'react-router-dom';
import {AiOutlineArrowLeft } from "react-icons/ai";



export function SignUp(){
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
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar"/>

                <Link to="/">
                Voltar para o login
                <AiOutlineArrowLeft/>
                </Link>
               
            </Form>

            <ImageForm/>
        </Container>

    )
}