import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width};
`;
export const Label = styled.label`
    color: #454555;
    margin-top: 10px;
`;
export const InputBox = styled.input`
    background-color: #F3F4F7;
    border: 1px solid #C7CED7;
    border-radius: 5px;
    height: 2.2rem;
`;
