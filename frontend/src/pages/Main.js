import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';
import NotFoundPage from './NotFoundPage';
import CartPage from './CartPage';
import CheckOutPage from './CheckOutPage';
import ProductsPage from './ProductsPage';
import ProductDetailsPage from './ProductDetailsPage';
import AdminPage from './AdminPage';

const App = (props) => {
    const pathAdmin = props.location.pathname.split('/')[1] || '';

    return (pathAdmin === 'admin' ?
        <Route path="/admin" component={AdminPage} /> :
        <BrowserRouter>
            <Header />
            <main className="main">
                <Switch>
                    <Route path="/checkout" component={CheckOutPage} />
                    <Route path="/cart" component={CartPage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />

                    <Route path="/phone" exact component={ProductsPage} />
                    <Route path="/phone/:id" exact component={ProductDetailsPage} />

                    <Route path="/laptop" exact component={ProductsPage} />
                    <Route path="/laptop/:id" exact component={ProductDetailsPage} />

                    <Route path="/tablet" exact component={ProductsPage} />
                    <Route path="/tablet/:id" exact component={ProductDetailsPage} />

                    <Route path="/watch" exact component={ProductsPage} />
                    <Route path="/watch/:id" exact component={ProductDetailsPage} />

                    <Route path="/accessory" exact component={ProductsPage} />
                    <Route path="/accessory/:id" exact component={ProductDetailsPage} />

                    <Route path="/" exact component={HomePage} />
                    <Route component={() => <NotFoundPage to="/" label="Home Page" />} />
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;