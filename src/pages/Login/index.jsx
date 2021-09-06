import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'assets/CjrLogo.png';
import DefaultButton from 'components/DefaultButton';
import Input from 'components/Input';

import { Page, LoginBox, Form, LinkBox } from './styles';

export default function Login() {
  return (
    <Page>
      <LoginBox>
        <img src={Logo} alt='Logo CJR' />

        <Form>
          <Input label='Email:' width='100%' />
          <Input label='Senha:' width='100%' type='password' />
        </Form>
        <DefaultButton text='Enviar' />

        <LinkBox>
          <Link to='/' style={{ color: 'grey' }}>
            Esqueceu a Senha?
          </Link>
          <Link to='/signup' style={{ color: 'grey' }}>
            Cadastre-se
          </Link>
        </LinkBox>
      </LoginBox>
    </Page>
  );
}
