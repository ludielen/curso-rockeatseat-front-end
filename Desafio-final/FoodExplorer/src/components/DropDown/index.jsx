import { Container } from './styles.js'


export function DropDown({ label, onChange }) {

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
      };
    return (
        <Container>
            <div>
                <label htmlFor={'input'}>{label}</label>

                <select onChange={handleDropdownChange}>
                    <option value="refeicao">Refeição</option>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="bebida">Bebida</option>
                </select>

            </div>
        </Container>
    )
}