import styled from 'styled-components' 
import {Link} from 'react-router-dom'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700}; 

    padding: 0 11.9rem;
    background: #1C1B1E;

`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        gap: 10px;
        align-items: center;
    }

    > div > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        > strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
           
        }  

        > svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 14px;
        margin: 2px;

    }

    }

    > div img {
        width: 56px;
        height: 56px;
        border-radius: 50%; 
        margin-top: 8px;
    }    

`;

export const Search = styled.div`


    > input {
        width: 39.3rem;
        height: 3.5rem;
        background-color: ${({theme}) => theme.COLORS.GRAY_200};
        border-radius: 10px;
        border: none;
        padding: 1.5rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};

    }

`;