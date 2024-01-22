import { Container } from './styles';
import { Header } from '../../components/header';
import { MyFooter } from '../../components/Footer';
import { ButtonText } from '../../components/ButtonText';
import { Ingredient } from '../../components/Ingredient';
import { Button } from '../../components/Button';
import { FaMinus, FaPlus } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export function PlateDetails(props) {

    const location = useLocation();
    const isAdmin = localStorage.getItem("@foodexplorer:isAdmin");
    const [plateNumber, setPlateNumber] = useState(0);

    const plate = location.state.data?.plate;
    const plate_picture = location.state.platePictureLoaded;


    function handleIncrement() {
        setPlateNumber(plateNumber + 1);
    }

    return (
        <Container>
            <Header />

            <Link to="/">
                <ButtonText title="Voltar" />
            </Link>
            <div>
                <div>
                    <img className='plate-picture' src={plate_picture} alt="prato" />
                </div>

                <div className='plate-details'>
                    <h1>{plate.plate_title}</h1>
                    <p>{plate.plate_description}</p>

                    <div>
                        {
                            plate.plate_ingredients.map((item) => (
                                <Ingredient ingredientTitle={item} />

                            ))}
                    </div>


                    {
                        isAdmin === "true" ? (
                            <Link to="/editPlate" state={{ data: {plate}, plate_picture}}>
                                <Button title="Editar" />
                            </Link>
                        ) : (
                            <div>
                                <FaMinus /> {plateNumber} <FaPlus onClick={handleIncrement} />
                                <Button title="incluir" amount={plate.plate_price.toFixed(2)} />
                            </div>
                        )
                    }
                </div>
            </div>

            <MyFooter />

        </Container>

    )
}