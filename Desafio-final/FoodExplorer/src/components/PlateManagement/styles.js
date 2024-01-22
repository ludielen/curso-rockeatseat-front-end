import styled from 'styled-components'

export const Container = styled.div`
    .data-plates{
        display: flex;
        justify-content: space-between;
        margin-bottom: 32px;
    }

    .divMarcadores{
        display: flex;
        flex-wrap: wrap;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        width: 80%;
        border-radius: 8px;
        align-content: center;
        margin-right: 35px;
    }

    .ingredient-price{
        display: flex;
    }

    .div-button{
        display: flex;
        justify-content: flex-end;
        margin: 32px 0 100px;
        gap: 30px;
    }

    .div-button button:first-child {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }



    section{
        display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    }

    h3{
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;

