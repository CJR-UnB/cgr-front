import React from 'react';

import { Container } from './styles';

function Select(props) {
  const {label} = props

  return (
  <Container>
    <label>{label}</label>
    
  </Container>
  )
}

export default Select;
