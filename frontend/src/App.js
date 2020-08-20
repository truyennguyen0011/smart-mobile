import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './pages/Main';

const App = () => {

  return (
    <BrowserRouter>
          <Route path="/" component={Main} />
    </BrowserRouter>
  );
}

export default App;