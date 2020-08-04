import React from 'react';
import { Route } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';
import ProductsPage from './ProductsPage';

function LaptopPage() {

    return (
        <div>
            <Route path="/laptop" exact={true} component={ProductsPage} />
            <Route path="/laptop/:id" component={ProductDetailsPage} />
        </div>
    );
}
// 
export default LaptopPage;
