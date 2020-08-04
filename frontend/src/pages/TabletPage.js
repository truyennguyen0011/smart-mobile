import React from 'react';
import { Route } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';
import ProductsPage from './ProductsPage';

function TabletPage() {

    return (
        <div>
            <Route path="/tablet" exact={true} component={ProductsPage} />
            <Route path="/tablet/:id" component={ProductDetailsPage} />
        </div>
    );
}
// 
export default TabletPage;
