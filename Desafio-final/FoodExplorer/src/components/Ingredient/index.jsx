import {Container} from './styles.js'

export function Ingredient({ingredientTitle}) {
    return(
        <Container>
            <div>
                {ingredientTitle}
            </div>
        </Container>
    )
}