import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
 display: flex;
 flex-direction: column;

    > div{
        display: flex;
        justify-content: space-between;
        margin-top: 4rem;
        padding: 0 11.9rem;
  }

  .handleMovie{
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 15px;
   
  }
`;

export const Brand = styled.div`
     
 div h1{
     color: ${({ theme }) => theme.COLORS.WHITE};
     font-size: 2rem;
     font-family: 'Roboto Slab', serif;
     font-weight: normal;
    
 }
`;

export const Content = styled.div`
    width: 100%;

    img{
    position: absolute;
    z-index: 1;
    top: 11.69rem
    }

    .homeParentBanner{
        width:100%;
        height: 260px;
        position: relative;
        margin-top: 9.75rem;
    }
    
    div{
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-end;
        align-items: flex-start;
        justify-content: center;
        padding-right: 6.0rem;


        >div h1{
            font-size: 40px;
            font-weight: 100;

            p{
                font-size: 16px;
            }
        }
    }





   

`;

