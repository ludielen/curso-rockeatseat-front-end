import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Slider } from '../../components/Slider'
import { MyFooter } from '../../components/Footer';

export function Home() {
    const [mealList, setMealList] = useState([])
    const [drinkList, setDrinkList] = useState([])
    const [dessertList, setDessertList] = useState([])
    const [platesFiltered, setPlatesFiltered] = useState("")
    
    useEffect(() => {
        async function getPlates() {
            const response = await api.get("/plates");
            setMealList(response.data.filter((plate) => plate.plate_category === "refeicao"))
            setDrinkList(response.data.filter((plate) => plate.plate_category === "bebida"))
            setDessertList(response.data.filter((plate) => plate.plate_category === "sobremesa"))
        }
        getPlates();
    }, [])


    useEffect(() => {
        async function getPlatesByTitle() {
            let response
            if (search === "") {
                response = await api.get("/plates");
            } else {
                response = await api.get(`/plates?name=${platesFiltered}`)
            }

            setMealList(response.data.filter((plate) => plate.plate_category === "refeicao"))
            setDrinkList(response.data.filter((plate) => plate.plate_category === "bebida"))
            setDessertList(response.data.filter((plate) => plate.plate_category === "sobremesa"))
        }
        getPlatesByTitle()
    }, [platesFiltered])


    return (
        <Container>

            <Header setPlatesFiltered={setPlatesFiltered}/>

            <Content>

                <img src="/assets/macarron.svg" alt="macarrons" />
                <div className='homeParentBanner'>


                    <div>
                        <h1>Sabores inigualaveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </div>

            </Content>

            <Slider plate_list={mealList} slide_title="Refeições" />
            <Slider plate_list={dessertList} slide_title="Sobremesa"/>
            <Slider plate_list={drinkList} slide_title="Bebidas"/>

            <MyFooter />

        </Container>

    )
}