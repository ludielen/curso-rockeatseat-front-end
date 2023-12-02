import {Container, Brand, Content, NewNotes} from './styles'
import {Header} from '../../components/header'
import { VscAdd } from "react-icons/vsc"
import { AiOutlineStar } from "react-icons/ai";
import {Link} from 'react-router-dom'

export function Home(){
    return(
        <Container>
            <Header/>
            <div>
                <Brand>
                    <div>
                        <h1>Meus Filmes</h1>
                    </div>
                </Brand>
                    
                <NewNotes to="createMovie">
                    <div>
                        <div>
                            <span>Adicionar filme</span>
                        </div>

                        <div>
                          <VscAdd />
                        </div>
                    </div>
               </NewNotes>
            </div>

            <Content>
                <div id="conteudo">
                    <div>
                        <h2>Interestellar</h2>
                    </div>

                    <div id="estrela">
                        <div>
                            <AiOutlineStar/>
                        </div>

                        <div>
                            <AiOutlineStar/>
                        </div>
                        <div>
                            <AiOutlineStar/>
                        </div>
                        <div>
                            <AiOutlineStar/>
                        </div>

                        <div>
                            <AiOutlineStar/>
                        </div>
                    </div>

                    <p>
                        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com a sua familia. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
                    </p>

                    <div id="generoFilme">
                        <ul>
                            <li>Ficção Científica</li>
                            <li>Drama</li>
                            <li>Família</li>
                        </ul>
                    </div>
                </div>
                     
            </Content>

            <Content>
                <div id="conteudo">
                    <div>
                        <h2>Interestellar</h2>
                    </div>

                    <div id="estrela">
                        <div>
                            <AiOutlineStar/>
                        </div>

                        <div>
                            <AiOutlineStar/>
                        </div>
                        <div>
                            <AiOutlineStar/>
                        </div>
                        <div>
                            <AiOutlineStar/>
                        </div>

                        <div>
                            <AiOutlineStar/>
                        </div>
                    </div>

                    <p>
                        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com a sua familia. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
                    </p>

                    <div id="generoFilme">
                        <ul>
                            <li>Ficção Científica</li>
                            <li>Drama</li>
                            <li>Família</li>
                        </ul>
                    </div>
                </div>
                     
            </Content>

            <Content>
                <div id="conteudo">
                    <div>
                        <h2>Interestellar</h2>
                    </div>

                    <div id="estrela">
                        <div>
                            <AiOutlineStar/>
                        </div>

                        <div>
                            <AiOutlineStar/>
                        </div>
                        <div>
                            <AiOutlineStar/>
                        </div>
                        <div>
                            <AiOutlineStar/>
                        </div>

                        <div>
                            <AiOutlineStar/>
                        </div>
                    </div>

                    <p>
                        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com a sua familia. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
                    </p>

                    <div id="generoFilme">
                        <ul>
                            <li>Ficção Científica</li>
                            <li>Drama</li>
                            <li>Família</li>
                        </ul>
                    </div>
                </div>
                     
            </Content>
        </Container>
        
    )
}