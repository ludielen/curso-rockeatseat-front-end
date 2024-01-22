import styled from 'styled-components'

export const Container = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    margin-top: 40px;

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
        font-size: 24px;
        font-weight: bold;
    }

    > svg {
       margin-left: 8px;
       color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;
