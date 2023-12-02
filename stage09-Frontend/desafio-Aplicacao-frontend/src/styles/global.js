import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.COLORS.BACKGROUND_800} url(imageForm.svg) no-repeat center center fixed;
        background-size: cover;
        color: ${({theme}) => theme.COLORS.BACKGROUND_800};

        -webkit-font-smoothing:  antialiased;
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 24px;
    }

    span{
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover{
        filter: brightness(0.9);
    }

`