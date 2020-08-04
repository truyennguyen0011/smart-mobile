import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../actions/cartActions';

const CartPage = (props) => {

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const productId = props.location.pathname.split('/')[2];
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  let price = 0;
  let priceSale = 0;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
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
          cartItems.length === 0 ?
            <Col sm={12} xl={12} className="text-center py-3">
              <img className="py-3" src="https://fptshop.com.vn/gio-hang-v2/cart/Desktop/images/null.png" alt="cart image" />
              <h4>Không có sản phẩm nào trong giỏ hàng của bạn</h4>
              <Button size="lg" variant="outline-success" className="m-5">Đi đến trang chủ</Button>
            </Col> : cartItems.map(item =>
              <Col xs={12} xl={12} className="border-bottom boder-dark py-3 cart-prd-row">
                <img width="100px" src={item.prdImage} alt={item.prdName} />
                <a style={{ width: "200px" }} target="_blank" href={"/phone/" + item.prdID} className="ml-3"><b>{item.prdName}</b></a>
                <label className="mx-4">
                  {
                    item.priceNormal
                  }
                </label>
                {
                  item.qty >= 2 ?
                    <button onClick={() => dispatch(addToCart(item.prdID, item.qty - 1))}>-</button> :
                    <button>-</button>
                }
                <input disabled={true} type="text" value={item.qty} />
                {
                  item.qty < item.countInStock ?
                    <button onClick={() => dispatch(addToCart(item.prdID, item.qty + 1))}>+</button> :
                    <button>+</button>
                }
                <a className="ml-3" onClick={() => handleRemoveFromCart(item.prdID)}>Xóa</a>
              </Col>
            )
        }
        {
          cartItems.length !== 0 ?
            <Col className="cart-action py-3 my-3">
              <ul>
                <li>
                  <label className="mr-3"><h4>Tổng tiền:</h4></label>
                  <span>
                    {cartItems.reduce((a, c) =>
                      a + Number(c.priceNormal.slice(0, c.priceNormal.length - 1).split('.').join('')) * c.qty, 0) + "₫"}
                  </span>
                </li>
              </ul>
              <Button href="/checkout" className="ml-5">Đặt hàng</Button>
            </Col>

            : <Col></Col>
        }
      </Row>
    </Container>;
}
export default CartPage;