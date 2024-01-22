import { Container, FaHeartSelected } from './styles';
import { Button } from '../../components/Button';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { React, useState, useEffect } from 'react';
import { SlHeart } from "react-icons/sl";
import { SlPencil } from "react-icons/sl";
import { api } from '../../services/api'
import { Link } from 'react-router-dom';


export function Plate({ plate }) {

    const [platePictureLoaded, setPlatePictureLoaded] = useState(null)
    const [plateNumber, setPlateNumber] = useState(0);
    const isAdmin = localStorage.getItem("@foodexplorer:isAdmin");
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        async function getPlatePicture() {
            try {
                const response = await api.get(`/files/${plate.plate_picture}`, { responseType: 'arraybuffer' });
                const blob = new Blob([response.data], { type: 'image/jpeg' });
                const url = URL.createObjectURL(blob);
                setPlatePictureLoaded(url);
            } catch (error) {
            }
        }

        getPlatePicture();
    }, [plate]);

    const toggleFavorite = () => {
        setIsFavorited(prevState => !prevState);
    };

    async function handlerAddItem() {
        if (plateNumber === 0) {
            alert("Adicione pelo menos 1 item")
        } else {
            alert(`${plateNumber} ${plate.plate_title} adicionado(as) com sucesso!`)
        }

    }

    function handleIncrement() {
        setPlateNumber(plateNumber + 1);
    }

    function handleDecrease() {
        if (plateNumber <= 0) {
            return setPlateNumber(0);
        }

        setPlateNumber(plateNumber - 1);
    }

    return (
        <Container>
            <div>

                {
                    isAdmin === "false" ? (
                        <div className='icon' onClick={toggleFavorite}>
                            {isFavorited ? <FaHeartSelected className='heartIcon' /> : <SlHeart className='heartIcon' />}
                        </div>
                    ) : (
                        <Link className="link-style" to="/plateDetails" state={{ data: { plate }, platePictureLoaded }}>
                            <div className='icon'>
                                <SlPencil />
                            </div>
                        </Link>
                    )
                }
                <div>
                    <img className='plate-picture' src={platePictureLoaded} alt="prato" />
                </div>

                <div className='plate-details'>
                    <h1>{plate.plate_title}</h1>
                    <p>{plate.plate_description}</p>

                    <span>R$ {plate.plate_price.toFixed(2)}</span>


                    <div>
                        {isAdmin === "false" ? (
                            <>
                                <FaMinus onClick={handleDecrease} /> {plateNumber} <FaPlus onClick={handleIncrement} />
                                <Link to="/plateDetails" state={{ data: { plate }, platePictureLoaded }}>
                                    <Button title="incluir" />
                                </Link>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </Container>

    )
}