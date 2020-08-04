import React from 'react';
import { Route } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';
import ProductsPage from './ProductsPage';

function PhonePage() {

    return (
        <div>
            <Route path="/phone" exact={true} component={ProductsPage} />
            <Route path="/phone/:id" component={ProductDetailsPage} />
        </div>
    );
}
// 
export default PhonePage;
