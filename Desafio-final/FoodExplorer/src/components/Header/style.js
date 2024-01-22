import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_400}; 
    padding: 0 11.9rem;
    background: ${({ theme }) => theme.COLORS.DARK_600}; 

    >div {
        display: flex;
        align-items: center;
        gap: 8px;

        span{
            color: ${({ theme }) => theme.COLORS.CAKE_200}; 
        }
    }

`;

export const Profile = styled(Link)`
    display: flex;
    flex-direction: row-reverse;

    > div img {
        width: 56px;
        height: 56px;
        border-radius: 50%; 
        margin-top: 8px;
    }  
`;

export const Logout = styled(Link)`
    display: flex;
    flex-direction: column;
    
    align-items: flex-end;
    margin-top: 8px;
    background: none;
    border: none;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    > div > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        > strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
           
        }  

        > svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            width: 32px;
            height: 32px;
        }

    }

  

`;

export const Search = styled.div`


    > input {
        width: 39.3rem;
        height: 3.5rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 10px;
        border: none;
        padding: 1.5rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        position: relative;

    }

`;

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 1;
  margin-left: 30px;

  > input {
        width: 39.3rem;
        height: 3.5rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 10px;
        border: none;
        padding: 1.5rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        position: relative;

    }
  
`;

export const styledButton = styled.button`
    position: relative;
    z-index: 1;

    >svg{
        position: absolute;
    }


`;