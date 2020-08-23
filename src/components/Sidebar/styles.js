import styled from 'styled-components'

export const Container = styled.div `
    background-color: white;
    height: 100vh;
    width: 20vw;
    position: fixed;
    padding: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    img {
        width: 90%;
    }
`
export const Menu = styled.div `
    display: flex;
    flex-direction: column;
`
export const Item = styled.div `
    padding: 5px 0;
`