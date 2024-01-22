import { Container, Form } from './style.js'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../FoodExplorer/src/hooks/auth.jsx';
import { useState } from 'react';
import { LoginButton } from '../../components/LoginButton/index.jsx';

export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password })
    }

    return (
        <Container>
            <div className='title'>
                <img src="/assets/logo-food-explorer.svg" alt="logo-food-explorer" />
                <h1>Food Explorer</h1>
            </div>

            <Form>
                <h2>Faça login</h2>

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

                <LoginButton title="Entrar" onClick={handleSignIn} />

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>
        </Container>

    )
}