import {Container} from './styles'
import { SlArrowLeft } from "react-icons/sl";


export function ButtonText({ title, ...rest}){
    return(
        <Container type="button"  {...rest}>
          <span>{title}</span>

            <SlArrowLeft/>
        </Container>
    )
};