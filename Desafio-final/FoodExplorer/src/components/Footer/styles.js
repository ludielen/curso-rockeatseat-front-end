import styled from 'styled-components'

export const Footer = styled.footer`
 width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 20px;
  text-align: center;

  div{
    display: flex;
    gap: 8px;
  }

   div p{
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

`;

export const Copyright = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  font-weight: 100;
`;