import React, { InputHTMLAttributes, useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import { Container, Label, InputBox } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: string;
  label: string;
}

export default function Input({ width, label, ...rest }: IInputProps) {
  const [id] = useState<string>(() => uniqueId('input-'));

  return (
    <Container width={width}>
      <Label htmlFor={id}>{label}</Label>
      <InputBox id={id} {...rest} />
    </Container>
  );
}
