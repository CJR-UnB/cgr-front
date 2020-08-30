import styled from 'styled-components'
import { BsFillPlusCircleFill } from 'react-icons/bs'

export const Container = styled.div `
    height: 20vh;
    width: 10vw;
`

export const Button = styled(BsFillPlusCircleFill) `
    color: #369FFF;
    font-size: 50px;
    position: fixed;
    bottom: 5%;
    right: 5%;
    cursor: pointer;
`