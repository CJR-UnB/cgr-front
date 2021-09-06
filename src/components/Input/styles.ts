import styled from 'styled-components';

interface IContainerProps {
  width: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;
export const Label = styled.label`
  color: #454555;
  margin-top: 10px;
`;
export const InputBox = styled.input`
  background-color: #f3f4f7;
  border: 1px solid #c7ced7;
  border-radius: 5px;
  height: 2.2rem;
`;
