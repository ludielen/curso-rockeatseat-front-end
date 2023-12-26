import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: lighter;
    padding: 16px;
    border-radius: 10px;
    margin: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};


    input, button{
        background-color: transparent;
        border: none;
        color:  ${({ theme }) => theme.COLORS.GRAY_300};
    }


    svg{
        color: ${({ theme }) => theme.COLORS.PINK};
        background-color: transparent ;
        font-size: 20px;
    }

`;

