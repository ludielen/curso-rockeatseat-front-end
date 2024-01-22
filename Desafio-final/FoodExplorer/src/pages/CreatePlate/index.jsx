import { Container, Content } from './styles'
import { Header } from '../../components/header'


import { PlateManagement } from '../../components/PlateManagement'
import { ButtonText } from '../../components/ButtonText'
import { MyFooter } from '../../components/Footer'
import { Link } from 'react-router-dom'

export function CreatePlate() {
    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <div className='primeira'>
                        <Link to="/">
                            <ButtonText title="Voltar" />
                        </Link>
                        <h1>Adicionar prato</h1>
                    </div>


                    <PlateManagement />

                </Content>
            <MyFooter />
            </main>

        </Container>
    )
}