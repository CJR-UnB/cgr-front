import styled from 'styled-components'
import { FaRegTrashAlt } from 'react-icons/fa'

export const Page = styled.div `
    display: flex;
    min-height: 100vh;
    background-color: #F3F4F7;
`
export const Content = styled.div `
    margin-left: 20vw;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .list{
        padding: 20px;
        width: 80%;
    }
    .cardHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: #DEDFE8; */
    }
`
export const DeleteIcon = styled(FaRegTrashAlt) `
    cursor: pointer;
`