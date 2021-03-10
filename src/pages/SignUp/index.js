import React from 'react';
import { Page, SignUpBox, Form, LinkBox } from './styles';
import Logo from '../../assets/CjrLogo.png';
import Input from '../../components/FormComponents/Input';
import DefaultButton from '../../components/DefaultButton';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <Page>
      <SignUpBox>
        <img src={Logo} alt={'Logo CJR'} />

        <Form>
          <Input label={'Nome:'} width={'100%'} />
          <Input label={'Email:'} width={'100%'} />
          <Input label={'Senha:'} width={'100%'} type={'password'} />
          <Input label={'Confirme a Senha:'} width={'100%'} type={'password'} />
        </Form>
        <DefaultButton text={'Enviar'} />

        <LinkBox>
          <Link to={'./login'} style={{ color: 'grey' }}>
            Já possui uma conta?
          </Link>
        </LinkBox>
      </SignUpBox>
    </Page>
  );
}
