import React from 'react';
import { Route } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';
import ProductsPage from './ProductsPage';

function WatchPage() {

    return (
        <div>
            <Route path="/watch" exact={true} component={ProductsPage} />
            <Route path="/watch/:id" component={ProductDetailsPage} />
        </div>
    );
}
// 
export default WatchPage;
