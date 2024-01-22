import { Container } from './styles'


export function Button({ title, imgAdress, amount, onClick }) {
    return (
        <Container type="button"  onClick={() => onClick()} >
           {imgAdress && <img src={imgAdress} alt="icon-pedidos" />}

            {title}
            {amount && ` - R$ ${amount}`} 
        </Container>
    )
}