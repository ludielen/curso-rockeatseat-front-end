import { FiPlus, FiX } from "react-icons/fi";
import {Container} from './styles'

export function IngredientItem({isNew, value, onClick, ...rest}) {
    return(
        <Container>

            <input type="text" 
            value={value} 
            readOnly={!isNew} 
            {...rest}
            />

            <button type="button" onClick={onClick}>
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}