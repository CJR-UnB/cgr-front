import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'assets/CjrLogo.png';
import DefaultButton from 'components/DefaultButton';
import Input from 'components/Input';

import { Page, SignUpBox, Form, LinkBox } from './styles';

export default function SignUp() {
  return (
    <Page>
      <SignUpBox>
        <img src={Logo} alt='Logo CJR' />

        <Form>
          <Input label='Nome:' width='100%' />
          <Input label='Email:' width='100%' />
          <Input label='Senha:' width='100%' type='password' />
          <Input label='Confirme a Senha:' width='100%' type='password' />
        </Form>
        <DefaultButton text='Enviar' />

        <LinkBox>
          <Link to='./login' style={{ color: 'grey' }}>
            Já possui uma conta?
          </Link>
        </LinkBox>
      </SignUpBox>
    </Page>
  );
}
