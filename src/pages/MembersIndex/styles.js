import { FaRegTrashAlt } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #F3F4F7;
    color: #454555;
`;
export const Container = styled.div`
    width: 100vw;
    box-sizing: border-box;
    padding: 50px 5% 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .cardHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
export const Content = styled.div`
    width: 75%;
    margin-top: 10vh;
`;
export const Title = styled.h2`
    margin-bottom: 50px;
`;
export const Icons = styled.div`
    width: 7%;
    min-width: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const DeleteIcon = styled(FaRegTrashAlt)`
    cursor: pointer;
`;
export const EditIcon = styled(GoPencil)`
    cursor: pointer;
`;
