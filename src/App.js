import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Profile} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
