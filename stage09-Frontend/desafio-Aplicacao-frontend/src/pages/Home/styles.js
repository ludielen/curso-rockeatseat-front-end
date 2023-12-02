import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container  = styled.div`
 display: flex;
 flex-direction: column;

    > div{
        display: flex;
        justify-content: space-between;
        margin-top: 4rem;
        padding: 0 11.9rem;
  }
`;
 
export const Brand  = styled.div`
     
 div h1{
     color: ${({theme}) => theme.COLORS.WHITE};
     font-size: 2rem;
     font-family: 'Roboto Slab', serif;
     font-weight: normal;
    
 }
`;

export const Content  = styled.div`

  
    > #conteudo{
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        padding: 32px;
        border-radius: 16px;

        div h2{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 24px;
            font-family: 'Roboto Slab', serif;
            font-weight: bold;
            margin-bottom: 8px;

        }

        #estrela{
            display: flex;
            gap: 5px;

            svg{
                color: ${({ theme }) => theme.COLORS.PINK};
        
            }
        }

        p {
            color: ${({theme}) => theme.COLORS.GRAY_400};
            font-size: 16px;
            font-weight: normal;
            text-align: left;
            margin: 15px 0 15px;
        }

        #generoFilme{
        
            width: 276px;
            height: 24px;

        
            ul{
                display: flex;
                align-items: center;
                list-style-type: none;

                li{
                    color: ${({theme}) => theme.COLORS.WHITE_100};
                    font-size: 12px;
                    font-weight: 100;
                    border-radius: 8px;
                    background-color: ${({theme}) => theme.COLORS.GRAY_300};
                    padding: 5px;
                    margin-right: 8px;
                }
                
            }
        }
    }


`;
export const NewNotes = styled(Link)`
   
    width: 207px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
    display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
 
  
    div {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;

        > div span {
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.BLACK};
        }

        svg{
            margin-right: 8px;
        }
    }
`;