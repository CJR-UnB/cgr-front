import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function DefaultButton({ text, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {text}
    </ButtonContainer>
  );
}
