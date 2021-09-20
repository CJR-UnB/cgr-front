import uniqueId from 'lodash/uniqueId';
import React, { InputHTMLAttributes, useState } from 'react';

import { Container, Label, InputBox } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: string;
  label: string;
}

export default function Input({ width, label, ...rest }: InputProps) {
  const [id] = useState<string>(() => uniqueId('input-'));

  return (
    <Container width={width}>
      <Label htmlFor={id}>{label}</Label>
      <InputBox id={id} {...rest} />
    </Container>
  );
}
