import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 flex-direction: column;

 .plate-picture{
    width: 24.37rem;
    height: 24.31rem;
    border-radius: 192px;
}

> div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 3.43rem;
}

    .plate-details{
        width: 687px;
        height: 300px;

        h1{
            font-size: 40px;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
            

        }

        p{
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-weight: 200;
            font-family: 'Poppins', sans-serif;

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