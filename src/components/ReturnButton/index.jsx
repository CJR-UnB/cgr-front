import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonContainer, Icon } from './styles';

export default function ReturnButton() {
  const history = useHistory();

  return (
    <ButtonContainer onClick={() => history.push('/')}>
      <Icon />
      Voltar
    </ButtonContainer>
  );
}
