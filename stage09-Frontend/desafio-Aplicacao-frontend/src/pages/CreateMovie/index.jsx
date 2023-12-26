import { Container, Content } from './styles'
import { Header } from '../../components/header'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from 'react'
import { NoteItem } from '../../components/NoteItem';
import { api } from '../../../../desafio-aplicacao-node/src/services/api'
import { useAuth } from '../../hooks/auth'
import { SignIn } from '../SignIn/SignIn'

export function CreateMovie() {
    const [title, setTitle] = useState("")
    const [grade, setGrade] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();
    const { signOut, user } = useAuth()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewMovie() {
        const token = localStorage.getItem("@rocketmovies:token");
        //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDI1ODYyNzQsImV4cCI6MTcwMjY3MjY3NCwic3ViIjoiOCJ9.kfhcclJQgUm5lHdMGmxeHNusXQB4kGtn9FBIuxRzYjs";
        api.defaults.headers.common ['authorization'] = `Bearer ${token}`;

        validateTitleIsBlank()
       
        validateTags()

        await api.post("/notes/notes", {
            title,
            description,
            grade,
            tags
        })
        .then((res) => {
            alert("novo filme criado com sucesso!")
            navigate("/")
        })
        .catch((err) => {
            console.log(err)
            if(err.code === "ERR_NETWORK") {
                console.log(err.response)
                alert("ops, tivemos um erro, tente criar novamente")
                navigate("/")
            }

            if(err.response.status == 401) {
                console.log("mandando logar de novo")
                signOut()
                navigate("/")
            }


        })



    }

    async function validateTitleIsBlank() {
        if(!title){
            return alert("Digite o titulo do filme!")
        }
    }

    async function validateTags() {
        if(newTag != "" && !tags.includes(newTag)){
            return alert("Marcador não adicionado, aperte + para adicionar")
        }
    }


    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <div className='primeira'>
                        <Link to="/">
                            Voltar
                            <AiOutlineArrowLeft />
                        </Link>
                        <h1>Novo filme</h1>
                    </div>

                    <div className='segunda'>
                        <Input 
                        placeholder="Título" 
                        onChange={e => setTitle(e.target.value)}
                        
                        />
                        <Input 
                        type="text" 
                        placeholder="Sua nota(0 a 5)" 
                        onChange={e => {
                            const inputValue = e.target.value;
                            const parsedValue = parseInt(inputValue);

                            if(!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 5) {
                             setGrade(parsedValue);
                            } else{
                                alert("Nota permitida 0 a 5")
                               e.target.value = ""
                            }
                        }}
                        
                        />
                    </div>

                    <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />

                    <Section title="Marcadores">

                        <div className='divMarcadores'>
                            {
                                tags.map((tag, index) => (
                                
                                    <NoteItem  
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => {handleRemoveTag(tag)}}
                                    />

                                ))
                            }

                            <NoteItem isNew placeholder="Novo marcador" onChange={e => setNewTag(e.target.value)} value={newTag} onClick={handleAddTag}/>
                        </div>
                    </Section>
                    
                    <div className='divbotoes'>

                        <div>
                            <Button title="Excluir filme" className='deleteButton' />
                        </div>

                        <div>
                            <Button title="Salvar alterações" className='saveButton' onClick={handleNewMovie }/>
                        </div>
                    </div>
                </Content>
            </main>
        </Container>
    )
}