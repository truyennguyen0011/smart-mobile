import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';

import { putToCart, removeFromCart, getToCart, addToCart } from '../actions/cartActions';

const CheckOutPage = (props) => {

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
console.log(cartItems);
  return !userInfo ?
    <Redirect to="/login" /> :

    <Container className="my-3">
      <Row className="border p-3 mx-3 bg-white">
        <h4>Đơn Hàng</h4>
      </Row>
      <Row className="border border-top-0 p-3 mx-3 bg-white">
        {
          !cartItems ? <Col sm={12} xl={12} className="text-center py-3"></Col> :
            cartItems.length === 0 ?
              <Col sm={12} xl={12} className="text-center py-3">
                <img className="py-3" src="https://fptshop.com.vn/gio-hang-v2/cart/Desktop/images/null.png" alt="cart image" />
                <h4>Không có sản phẩm nào trong giỏ hàng của bạn</h4>
                <Button href="/" size="lg" variant="outline-success" className="m-5">Đi đến trang chủ</Button>
              </Col> : cartItems.map(item =>
                <Col key={item._id} xs={12} xl={12} className="border-bottom py-3 cart-prd-row">
                  <Row>
                    <Col xs={3} xl={2}>
                      <img className="ml-3" width="100px" src={item.prdImage} alt={item.prdName} />
                    </Col>
                    <Col className="px-0" xs={3} xl={6}>
                      <a
                        style={{ width: "200px" }}
                        target="_blank"
                        href={"/phone/" + item.prdID}
                      >
                        <b>{item.prdName}</b>
                      </a>
                    </Col>
                    <Col xs={2} xl={2}>
                      <label className="mr-3">
                        <NumberFormat
                          value={item.price}
                          displayType={'text'}
                          thousandSeparator={true}
                        />
                        {"₫"}
                      </label>
                      <label className="t-red">
                        <NumberFormat
                          value={item.priceTotal}
                          displayType={'text'}
                          thousandSeparator={true}
                        />
                        {"₫"}
                      </label>
                    </Col>
                  </Row>


                </Col>
              )}
      </Row>
    </Container>;
}
export default CheckOutPage;