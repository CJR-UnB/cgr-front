import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile';
import RegisterMember from './pages/Register/Member';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Profile} exact />
        <Route path='/register/member' component={RegisterMember}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
