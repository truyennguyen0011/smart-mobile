import React, { useEffect, useState } from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { detailsProduct } from '../actions/productActions';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faCheckCircle, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductsPage = (props) => {


    return <Container>
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href={"/" + props.location.pathname.split("/")[1]}>
                {props.location.pathname.split("/")[1]}
            </Breadcrumb.Item>
        </Breadcrumb>

        

    </Container>;
};

export default ProductsPage;