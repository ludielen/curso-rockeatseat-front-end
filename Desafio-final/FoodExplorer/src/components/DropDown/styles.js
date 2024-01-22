import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};



     div{
        display: flex;
        flex-direction: column;

        label{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-weight: lighter;
        margin-bottom: 8px;
    }
   
    select{
        width: 364px;
        padding: 16px;
        background-color: #0D161B;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        border: none;
        border-radius: 5px;
    }
 }

`;

