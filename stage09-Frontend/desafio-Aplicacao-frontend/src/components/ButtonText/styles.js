import styled from 'styled-components'

export const Container = styled.button`
    background: none;
    color: ${({theme}) => theme.COLORS.PINK};
    border: none;
    font-size: 16px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    

    > svg {
       margin-left: 8px;
    }
`;
