import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: lighter;
    padding: 16px;
    border-radius: 10px;
    margin: 16px;
    height: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600};


    input, button, ::placeholder{
        background-color: transparent;
        border: none;
        color:  ${({ theme }) => theme.COLORS.LIGHT_100};
    }


    svg{
        color: ${({ theme }) => theme.COLORS.PINK};
        background-color: transparent ;
        font-size: 20px;
    }

`;

