import { Container } from './styles.js';

export function Tag({ title, iconType, ...rest }) {
  return (
    <Container {...rest}>
      {title}
      {iconType}
    </Container>
  );
}


