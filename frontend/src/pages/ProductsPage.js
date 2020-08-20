import React, { useEffect, useState } from 'react';
import { Container, Breadcrumb, Spinner } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
// import { useSelector, useDispatch } from 'react-redux';
// import { detailsProduct } from '../actions/productActions';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faCheckCircle, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductsPage = (props) => {

    const productList = useSelector(state => state.productList);
    const { products, error, loading } = productList;

    const newArray = products ? [...products.filter(e=> e.categoryName === props.location.pathname.split("/")[1])] : [];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());

        return () => {

        };
    }, []);

    return <Container>
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href={"/" + props.location.pathname.split("/")[1]}>
                {props.location.pathname.split("/")[1]}
            </Breadcrumb.Item>
        </Breadcrumb>
        {
            loading === false && newArray ? < ProductList data={newArray} />
                : (<Spinner className="loading-center" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>)
        }

    </Container>;
};

export default ProductsPage;