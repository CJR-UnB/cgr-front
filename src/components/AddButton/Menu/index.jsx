import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Option } from './styles';

export default function Menu() {
  const history = useHistory();

  return (
    <Container>
      <Option onClick={() => history.push('/register/member')}>Adicionar Membro</Option>
      <Option>Criar Equipe</Option>
    </Container>
  );
}
