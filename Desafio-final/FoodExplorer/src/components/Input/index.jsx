import { Container } from './styles.js'

export function Input({ label, placeholder, ...rest }) {
    return (
        <Container>
                <label htmlFor={rest.id || 'input'}>{label}</label>
                <input placeholder= {placeholder} {...rest} />
        </Container>
    )
}