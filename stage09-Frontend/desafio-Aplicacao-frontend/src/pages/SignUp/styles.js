import styled from 'styled-components'
import imageForm from '../../assets/imageForm.svg'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
    > h1{ 
        font-size: 48px;

    }

    > h2 {
     font-size: 24px;
     margin: 54px 0 54px;
     color: ${({theme}) => theme.COLORS.WHITE};
    }

    > p{
      font-size: 14px;
      color:  ${({theme}) => theme.COLORS.GRAY_100};
    }

    > a{
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

`;

export const ImageForm = styled.div`
  flex: 1;
  background: url(${imageForm}) no-repeat center center;
  background-size: cover;
`;

 