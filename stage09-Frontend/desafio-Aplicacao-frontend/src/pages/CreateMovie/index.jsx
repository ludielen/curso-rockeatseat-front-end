import {Container, Content} from './styles'
import { Header } from '../../components/header'
import {Section} from '../../components/Section'
import {ButtonText} from '../../components/ButtonText'
import {Tag} from '../../components/Tag'
import {Textarea} from '../../components/Textarea'
import {Input} from '../../components/Input'
import {FiPlus, FiX} from 'react-icons/fi';
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'
import {AiOutlineArrowLeft } from "react-icons/ai";

export function CreateMovie() {
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <div className='primeira'>
                        <Link to="/">
                                Voltar  
                                <AiOutlineArrowLeft/>
                        </Link>
                        <h1>Novo filme</h1>
                    </div>

                    <div className='segunda'>
                        <Input placeholder="Título"/>
                        <Input type="number" placeholder="Sua nota(0 a 5)"/>
                    </div>

                    <Textarea placeholder="Observações"/>

                    <Section title="Marcadores">

                        <div className='divMarcadores'>
                            <div>
                                <Tag title="React" iconType={<FiX />}/>
                            </div>

                            <div>
                                <Tag title="Novo marcador" className="newTag" iconType={<FiPlus />}/>
                            </div>
                        </div>
                    </Section>

                    <div className='divbotoes'>
                        
                        <div>
                            <Button title="Excluir filme" className='deleteButton'/>
                        </div>

                        <div>
                            <Button title="Salvar alterações" className='saveButton'/>
                        </div>
                    </div>
                </Content>
            </main>
        </Container>
    )
}