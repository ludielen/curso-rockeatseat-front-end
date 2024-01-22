import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

        label{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-weight: lighter;
    }
   
    input{
        width: 21.75rem;
        padding: 12px 14px;
        margin: 8px 0 32px;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        background: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 8px;
        border: none;
    }
 

`;

