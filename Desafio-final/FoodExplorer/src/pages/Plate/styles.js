import styled from 'styled-components'
import { FaHeart } from 'react-icons/fa';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 background-color: ${({ theme }) => theme.COLORS.DARK_200};
 border-radius: 8px;

 .icon{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-right: 40px;
    }

 .plate-picture{
    width: 11rem;
    height: 11rem;
    border-radius: 192px;
}

.link-style {
  text-decoration: none;
  color: inherit;
  display: contents;
}

> div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 1.43rem;

   
}

    .plate-details{
        width: 304px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        padding: 8px;

        h1{
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
            margin-bottom:10px;


        }

        p{
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-weight: 200;
            font-family: 'Poppins', sans-serif;
            margin-bottom: 10px;

        }

        span{
            font-size: 32px;
            color: ${({ theme }) => theme.COLORS.CAKE_100};
            
        }

        > div{
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        div{
            display: flex;
            align-items: center;
            gap:33px;
        }      

    }
 `;

export const FaHeartSelected = styled(FaHeart)`
color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};;
cursor: pointer;
`;