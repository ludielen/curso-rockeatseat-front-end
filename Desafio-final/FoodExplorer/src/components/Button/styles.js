import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_RED};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    height: 56px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 200;
    align-items: center;
    display: flex;

    &:disabled {
        opacity: 0.5;
    }

    img{
        margin-right: 10px;
    }

    
`;