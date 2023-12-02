import styled from 'styled-components'

export const Container = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: lighter;
    padding: 16px;
    border-radius: 10px;
    margin: 16px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.GRAY_200};


    svg{
        color: ${({theme}) => theme.COLORS.PINK};
    }

    &.newTag {
        border: 1px dashed white;
        background-color: transparent;
    }
`;

