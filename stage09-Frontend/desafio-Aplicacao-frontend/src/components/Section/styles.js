import styled from 'styled-components'

export const Container = styled.section`
    margin: 40px 0 28px;
    

    >h2 {
        margin-bottom: 24px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }

    > .divMarcadores {
        display: flex;
        flex-wrap: wrap;
        background-color: black;
        width: 100%;
        height: 88px;
        border-radius: 8px;
    }
`