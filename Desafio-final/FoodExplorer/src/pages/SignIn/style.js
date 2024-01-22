import styled from 'styled-components'


export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 8px;

    .title{
      display: flex;
      align-items: center;
      gap: 8px;

      > h1{ 
        font-size: 2.6rem;
        font-weight: 200;
      }

    }

    
    
`;

export const Form = styled.form`
  background-color:  ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 2rem;

  > h2 {
    font-size: 2rem;
    font-weight: 200;
    margin: 54px 0 54px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > p{
    font-size: 14px;
    color:  ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin: 50px 124px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
  }

`;

