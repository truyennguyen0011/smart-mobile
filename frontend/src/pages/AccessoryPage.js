import React from 'react';
import { Route } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';
import ProductsPage from './ProductsPage';

function AccessoryPage() {

    return (
        <div>
            <Route path="/accessory" exact={true} component={ProductsPage} />
            <Route path="/accessory/:id" component={ProductDetailsPage} />
        </div>
    );
}
// 
export default AccessoryPage;
