import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import PhonePage from './pages/PhonePage';
import LaptopPage from './pages/LaptopPage';
import TabletPage from './pages/TabletPage';
import WatchPage from './pages/WatchPage';
import AccessoryPage from './pages/AccessoryPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/phone" component={PhonePage} />
          <Route path="/laptop" component={LaptopPage} />
          <Route path="/tablet" component={TabletPage} />
          <Route path="/watch" component={WatchPage} />
          <Route path="/accessory" component={AccessoryPage} />
          <Route path="/" exact={true} component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
