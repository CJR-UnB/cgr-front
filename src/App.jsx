/* eslint-disable react/prop-types */
import StoreProvider from 'context/provider';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from 'pages/Login';
import MembersIndex from 'pages/MembersIndex';
import RegisterMember from 'pages/Register/Member';
import TeamsIndex from 'pages/TeamsIndex';

import StoreContext from './context/Context'

import 'bootstrap/dist/css/bootstrap.min.css';


const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const { token } = useContext(StoreContext);
  
  return (
    <Route 
      { ...rest} 
      render= {() => token ?
          <Component { ...rest } /> : <Redirect to={{ pathname: '/login'}} />
      } />
  )
}

const Routes = () => (
  <StoreProvider>
    <BrowserRouter> 
        <Switch>
          <PrivateRoute path='/' component={MembersIndex} exact />
          <PrivateRoute path='/register/member' component={RegisterMember} />
          <PrivateRoute path='/teams' component={TeamsIndex} />
          <Route path='/login' component={Login} />
        </Switch>
    </BrowserRouter>
  </StoreProvider>
);

export default Routes;
