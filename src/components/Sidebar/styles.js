import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const Container = styled.div `
    background-color: white;
    color: #878D97;
    box-shadow: 0px 0px 15px rgba(45, 45, 45, 0.075);
    height: 100vh;
    width: 20vw;
    padding: 4% 0;
    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    transition: 0.35s ease;

    img {
        width: 50%;
        margin-bottom: 50px;
    }
`
export const ContainerShadow = styled.div `
    width: 20vw;
    height: 100vh;

    transition: 0.4s ease;
`
export const Menu = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-self: center;
`
export const Item = styled.div `
    box-sizing: border-box;
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
    display: flex;
    align-items: center;

    &:hover{
        color: #369FFF;
        transition: 0.3s;
    }
`
export const Icon = styled.div `
    font-size: 1.3rem;
    margin: 0 10px 0 30%;
`
export const ArrowLeft = styled(FaChevronLeft) `
    font-size: 1.5rem;
    color: #369FFF;
    position: absolute;
    right: 30px;
    bottom: 10%;
    cursor: pointer;
`

// Hidden Sidebar

export const HiddenMenu = styled.div `
    display: flex;
    flex-direction: column;
    justify-self: center;
`
export const HiddenItem = styled.div `
    padding: 15px 0;
    margin: 5px 0;
    font-size: 1.1rem;

    &:hover{
        color: #369FFF;
        transition: 0.3s;
    }
`
export const ArrowRight = styled(FaChevronRight) `
    font-size: 1.5rem;
    color: #369FFF;
    position: absolute;
    bottom: 10%;
    cursor: pointer;
`