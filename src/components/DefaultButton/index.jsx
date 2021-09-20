import React from 'react';

import { ButtonContainer } from './styles';

export default function DefaultButton({ text, ...props }) {
  return (
    <ButtonContainer {...props}>
      {text}
    </ButtonContainer>
  );
}
