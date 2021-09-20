import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Logo from 'assets/CjrLogo.png';
import DefaultButton from 'components/DefaultButton';
import Input from 'components/Input';
import { postLogin } from 'services/requests';

import { Page, LoginBox, Form, LinkBox } from './styles';

export default function Login() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log(email);
    const data = {
      "email": email,
      "password": password
    }
    postLogin(data)
    .then(() => {
      history.push('/');
    })
    .catch(() => {
      console.log("Email ou senha incorretos");
    })
  };

  return (
    <Page>
      <LoginBox>
        <img src={Logo} alt='Logo CJR' />

        <Form>
        <Input label='Email:' width='100%' value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <Input label='Senha:' width='100%' type='password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
        </Form>
        <DefaultButton text='Enviar' onClick = {handleSignIn}/>

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
