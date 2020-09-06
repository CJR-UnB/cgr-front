import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MembersIndex from './pages/MembersIndex';
import RegisterMember from './pages/Register/Member';
import Login from './pages/Login';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MembersIndex} exact />
        <Route path='/register/member' component={RegisterMember}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
