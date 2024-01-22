import { Container } from './styles'

export function Section({ title, children }) {
  return (
    <Container>
        <div>
          <h3>{title}</h3>
        </div>
          {children}
      
    </Container>
  )
}