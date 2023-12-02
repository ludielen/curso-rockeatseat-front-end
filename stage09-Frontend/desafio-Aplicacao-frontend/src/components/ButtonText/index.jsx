import {Container} from './styles'
import {AiOutlineArrowLeft } from "react-icons/ai";


export function ButtonText({ title, ...rest}){
    return(
        <Container type="button"  {...rest}>
            {title}

            <AiOutlineArrowLeft/>
        </Container>
    )
};