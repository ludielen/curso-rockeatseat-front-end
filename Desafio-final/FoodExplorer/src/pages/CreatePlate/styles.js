import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: content;
        overflow-y: scroll;
    }
`;

export const Content = styled.div`
    max-width: 71rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    > .primeira{
      
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        a{
            background: none;
        color: ${({theme}) => theme.COLORS.PINK};
        border: none;
        font-size: 16px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        

        > svg {
        margin-left: 8px;
        }
        
        }

         h1{
            color: ${({theme}) => theme.COLORS.WHITE}; 
            font-size: 32px;
            font-weight: 400;
            padding-left: 8px;
            margin: 24px 0 32px;
         } 
    }

    >.segunda {
        display: flex;
        gap: 20px;
        margin: 40px 0 40px;
    }

    >.divbotoes{
        display: flex;
        gap: 40px;
        margin-bottom:40px;

        >div{
            width: 100%;
        }

        .deleteButton{
        background-color: black;
        color: ${({theme}) => theme.COLORS.PINK};
        margin-top: 0;

        
    }

    }

`;