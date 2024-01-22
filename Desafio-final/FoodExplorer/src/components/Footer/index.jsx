import {Copyright, Footer} from './styles.js'

export function MyFooter() {
    return(
        <Footer>
            <div>
                <img src="/assets/logo-footer.svg" alt="logo-footer" />
                <p> food explorer</p>
            </div>

            <div>
                <Copyright>&copy; 2024 - Todos os direitos reservados</Copyright>
            </div>
        </Footer>
    )
}
