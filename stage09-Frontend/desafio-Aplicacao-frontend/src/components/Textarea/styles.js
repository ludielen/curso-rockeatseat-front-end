import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 274px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE}; 
    font-size: 16px;
    font-weight: 400;
    border: none;
    resize: none;
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder{
        color: ${({theme}) => theme.GRAY_300};
        
    }


`;