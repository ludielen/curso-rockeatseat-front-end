import { Container, Content } from './styles'
import { Header } from '../../components/header'


import { PlateManagement } from '../../components/PlateManagement'
import { ButtonText } from '../../components/ButtonText'
import { MyFooter } from '../../components/Footer'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export function EditPlate() {

    const location = useLocation();
    const isAdmin = localStorage.getItem("@foodexplorer:isAdmin");
    const [plateNumber, setPlateNumber] = useState(0);

    const plate = location.state.data?.plate;
    const plate_picture = location.state.plate_picture;


    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <div className='primeira'>
                        <Link to="/">
                            <ButtonText title="Voltar" />
                        </Link>
                        <h1>Editar prato</h1>
                    </div>


                    <PlateManagement plateToEdit={{plate} } platePicture = {plate_picture} />

                </Content>
            {/* <MyFooter /> */}
            </main>

        </Container>
    )
}