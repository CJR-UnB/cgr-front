import React from 'react';
import { Container, Label, InputBox } from './styles';

export default function Input({ width, label, ...props }) {
  return (
    <Container width={width}>
      <Label>{label}</Label>
      <InputBox {...props} />
    </Container>
  );
}
