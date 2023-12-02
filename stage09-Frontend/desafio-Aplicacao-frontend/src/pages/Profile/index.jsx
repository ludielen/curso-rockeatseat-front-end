import {Container, Form, Avatar} from './styles'
import { ButtonText } from '../../components/ButtonText'
import {Input} from '../../components/Input'
import {Button} from '../../components/button'
import {FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';
import {Link} from 'react-router-dom'
import {AiOutlineArrowLeft } from "react-icons/ai";

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/">
                    Voltar
                    <AiOutlineArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                     <img src="https://github.com/ludielen.png" alt="foto do usuario" />
                    
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file"></input>
                    </label>
                </Avatar>
                
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar"/>
            </Form>

        </Container>
    )
}