import {Container} from './styles'

export function LoginButton({title, ...rest}) {
    return(
    <Container type="button" {...rest}>
        {title}
    </Container>
    )
}