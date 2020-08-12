import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';

import { putToCart, removeFromCart, getToCart, addToCart } from '../actions/cartActions';

const CartPage = (props) => {

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const userID = userInfo._id;

  const dispatch = useDispatch();

  let count = '';

  useEffect(() => {
    if (userID) {
      dispatch(getToCart(userID));
    }
  }, []);

  const handleRemoveFromCart = (e) => {
    dispatch(removeFromCart(e.target.id));
    console.log(e.target.id);
  }

  if (cartItems) {
    if (cartItems.length !== 0) {
      count = cartItems.reduce((a, c) =>
        a + c.priceTotal
        , 0);
    }
  }

  return !userInfo ?
    <Redirect to="/login" /> :

    <Container className="my-3">
      <Row className="p-3">
        <Col className="text-uppercase" lg={6}>
          <h4 className="text-uppercase">GIỎ HÀNG CỦA BẠN</h4>
        </Col>
        <Col className="viewAllPrd" lg={6}>
          <Link to="/">
            Mua thêm sản phẩm khác
          </Link>
        </Col>
      </Row>

      <Row className="mx-3 bg-white">
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
                    <Col xs={4} xl={2}>
                      {
                        item.qty >= 2 ?
                          <button onClick={() => dispatch(putToCart(item._id, item.qty - 1))}
                          >-</button> :
                          <button>-</button>
                      }
                      <input disabled={true} type="text" value={item.qty} />
                      {
                        item.qty < 10 ?
                          <button onClick={() => dispatch(putToCart(item._id, item.qty + 1))}>+</button> :
                          <button>+</button>
                      }
                      <a id={item._id} className="ml-3" onClick={handleRemoveFromCart}>Xóa</a>
                    </Col>
                  </Row>


                </Col>
              )
        }
        {
          !cartItems ? <Col sm={12} xl={12} className="text-center py-3"></Col> :
            cartItems.length !== 0 ?
              <Col className="cart-action py-3 my-3">
                <ul>
                  <li>
                    <label className="mr-3"><h4>Tổng tiền:</h4></label>
                    <span className="t-red">
                      <NumberFormat value={count} displayType={'text'} thousandSeparator={true} />
                      {"₫"}
                    </span>
                  </li>
                </ul>
                <Button href="/checkout" className="ml-5">Đặt hàng</Button>
              </Col>
              : <Col sm={12} xl={12} className="text-center py-3"></Col>
        }
      </Row>
    </Container>;
}
export default CartPage;