import { Container } from "./styles"
import { Input } from "../../components/Input"
import { DropDown } from "../DropDown"
import { IngredientItem } from "../IngredientItem"
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Textarea } from "../Textarea"
import { toast } from 'react-toastify';

export function PlateManagement({ plateToEdit, platePicture }) {
    const [plate_title, setTitle] = useState("")
    const [plate_price, setPrice] = useState(0.0)
    const [plate_description, setDescription] = useState("")
    const [ingredient_list, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [plateImagefile, setPlateImagefile] = useState(null);
    const [plate_category, setPlateCategory] = useState("refeicao");

    useEffect(() => {
        if (plateToEdit) {
            setTitle(plateToEdit.plate?.plate_title || "");
            setPrice(plateToEdit.plate?.plate_price || 0.0);
            setDescription(plateToEdit.plate?.plate_description || "");
            setIngredients( plateToEdit.plate?.plate_ingredients || []);
            setPlateCategory(plateToEdit.plate?.plate_category || "refeicao");
        }
    }, [plateToEdit]);

    const navigate = useNavigate();


    async function validateIngredients() {
        if (newIngredient != "" && !ingredient_list.includes(newIngredient)) {
            throw new Error("Ingrediente nao adicionado");
        }

        if(ingredient_list.length === 0) {
            throw new Error("Adicione pelo menos 1 ingrediente");
        }
    }

    async function handleDeletePlate() {
        await api.delete(`/plates/${plateToEdit.plate.plate_id}`)
            .then((res) => {
                alert("Prato excluido com sucesso!")
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
                if (err.code === "ERR_NETWORK") {
                    console.log(err.response)
                    alert("ops, tivemos um erro, tente excluir novamente")
                    navigate("/")
                }

                if (err.response.status == 401) {
                    console.log("mandando logar de novo")
                    signOut()
                    navigate("/")
                }
            })
    }

    function handleAddIngredient() {
        if (ingredient_list.length == 4) {
            return alert("Limite de ingredientes é 5")

        }

        if (newIngredient.length === 0) {
            return alert("Informe o ingrediente")
        }

        if (ingredient_list.includes(newIngredient.trim())) {
            return alert("Ingrediente já adicionado");
        }


        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    async function validateTitleIsBlank() {
        if (!plate_title) {
            return alert("Digite o nome do prato!")
        }
    }

    function handlePlatePicture(event) {
        const file = event.target.files[0]
        setPlateImagefile(file)


    }

    async function sendPlatePicture(plate_id) {
        const token = localStorage.getItem("@foodexplorer:token");
        api.defaults.headers.common['authorization'] = `Bearer ${token}`;


        if (plateImagefile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("plate_picture", plateImagefile)

            await api.patch(`/plates/${plate_id}`, fileUploadForm)
                .then((res) => {
                    alert("Imagem salva com sucesso!")
                    navigate("/")
                })
        }
    }

    async function handleNewPlate() {


        const token = localStorage.getItem("@foodexplorer:token");
        api.defaults.headers.common['authorization'] = `Bearer ${token}`;

        validateTitleIsBlank()

        validateIngredients()

        console.log(plate_price)
        await api.post("/plates/", {
            plate_title,
            plate_description,
            plate_price,
            ingredient_list,
            plate_category
        })
            .then((res) => {
                sendPlatePicture(res.data.plate_id)
            })
            .catch((err) => {
                console.log(err)
                if (err.code === "ERR_NETWORK") {
                    console.log(err.response)
                    alert("ops, tivemos um erro, tente criar novamente")
                    navigate("/")
                }

                if (err.response.status == 401) {
                    console.log("mandando logar de novo")
                    signOut()
                    navigate("/")
                }
            })



    }

    async function handleEditPlate() {


        const token = localStorage.getItem("@foodexplorer:token");
        api.defaults.headers.common['authorization'] = `Bearer ${token}`;

        validateTitleIsBlank()

        validateIngredients()

        console.log(token)

        const plate_id = plateToEdit.plate.plate_id

        console.log(plate_price)
        await api.put("/plates/", {
            plate_id,
            plate_title,
            plate_description,
            plate_price,
            ingredient_list,
            plate_category
        })
            .then((res) => {

                if(plateImagefile !== undefined && plateImagefile !== null) {
                    sendPlatePicture(res.data.plate_id)
                }
                
                alert("Prato atualizado com sucesso!")
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
                if (err.code === "ERR_NETWORK") {
                    console.log(err.response)
                    alert("ops, tivemos um erro, tente atualizar novamente")
                    navigate("/")
                }

                if (err.response.status == 401) {
                    console.log("mandando logar de novo")
                    signOut()
                    navigate("/")
                }
            })



    }

    return (
        <Container>

            <main>

                {plateToEdit && (
                    <div>
                        <div className="data-plates">


                            <Input
                                label="Imagem do prato"
                                placeholder="Exemplo: exemplo@exemplo.com"
                                type="file" className="input"
                                onChange={handlePlatePicture}


                            />

                            <Input
                                label="Nome"
                                placeholder="Ex:. Salada Ceasar"
                                value={plate_title}
                                type="text" className="input"
                                onChange={e => setTitle(e.target.value)}
                            />

                            <DropDown
                                label="Categoria" className="input"
                                value={plate_category}
                                onChange={setPlateCategory}
                            />
                        </div>

                        <div>
                            <h3>Ingredientes</h3>
                        </div>

                        <section>
                            <div className='divMarcadores'>
                                {
                                    ingredient_list && ingredient_list.map((ingredient, index) => (

                                        <IngredientItem
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => { handleRemoveIngredient(ingredient) }}
                                        />

                                    ))
                                }

                                <IngredientItem isNew placeholder="Adicione o ingrediente" onChange={e => setNewIngredient(e.target.value)} value={newIngredient} onClick={handleAddIngredient} />

                            </div>

                            <div>
                                <Input
                                    label="Preço"
                                    placeholder="R$ 0.00"
                                    value={plate_price}
                                    type="number"
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </div>


                        </section>

                        <Textarea label="Descrição" onChange={e => setDescription(e.target.value)}
                            value={plate_description}
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

                        <div className="div-button">
                            <Button title="Excluir" className='deleteButton' onClick={handleDeletePlate} />
                            <Button title="Salvar alterações" className='saveButton' onClick={handleEditPlate} />
                        </div>
                    </div>
                )}


                {!plateToEdit && (
                    <div>
                        <div className="data-plates">


                            <Input
                                label="Imagem do prato"
                                placeholder="Exemplo: exemplo@exemplo.com"
                                type="file" className="input"
                                onChange={handlePlatePicture}


                            />

                            <Input
                                label="Nome"
                                placeholder="Ex:. Salada Ceasar"
                                type="text" className="input"
                                onChange={e => setTitle(e.target.value)}
                            />

                            <DropDown
                                label="Categoria" className="input"
                                onChange={setPlateCategory}
                            />
                        </div>

                        <div>
                            <h3>Ingredientes</h3>
                        </div>

                        <section>
                            <div className='divMarcadores'>
                                {
                                    ingredient_list.map((ingredient, index) => (

                                        <IngredientItem
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => { handleRemoveIngredient(ingredient) }}
                                        />

                                    ))
                                }

                                <IngredientItem isNew placeholder="Adicione o ingrediente" onChange={e => setNewIngredient(e.target.value)} value={newIngredient} onClick={handleAddIngredient} />

                            </div>

                            <div>
                                <Input
                                    label="Preço"
                                    placeholder="R$ 0.00"
                                    type="number"
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </div>


                        </section>

                        <Textarea label="Descrição" onChange={e => setDescription(e.target.value)} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

                        <div className="div-button">
                            <Button title="Salvar alterações" className='saveButton' onClick={handleNewPlate} />

                        </div>
                    </div>
                )}
            </main>
        </Container>
    )
}