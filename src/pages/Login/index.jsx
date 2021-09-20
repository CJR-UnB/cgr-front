import { AuthContext } from 'context/authContext';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from 'assets/CjrLogo.png';
import DefaultButton from 'components/DefaultButton';
import Input from 'components/Input';
import { postLogin } from 'services/requests';

import { Page, LoginBox, Form } from './styles';


export default function Login() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  const handleSignIn = () => {
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
      </LoginBox>
    </Page>
  );
}
