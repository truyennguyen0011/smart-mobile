import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/phone/:id" component={ProductDetailsPage} />
      <Route path="/laptop/:id" component={ProductDetailsPage} />
      <Route path="/tablet/:id" component={ProductDetailsPage} />
      <Route path="/watch/:id" component={ProductDetailsPage} />
      <Route path="/accessory/:id" component={ProductDetailsPage} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
