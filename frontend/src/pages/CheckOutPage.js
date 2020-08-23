import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Spinner, Tab, Tabs } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';

import { putToCart, removeFromCart, getToCart, addToCart, removeCart } from '../actions/cartActions';
import { createOrder } from '../actions/orderActions';

const CheckOutPage = (props) => {

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector(state => state.cart);
  const { cartItems, loading } = cart;

  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('tienmat');
  const [shippingPrice, setShippingPrice] = useState(0);
  let itemsPrice =0;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
    if (userInfo) {
      dispatch(createOrder({
        orderItems: cartItems, address, payment, itemsPrice, shippingPrice,
        totalPrice: itemsPrice + shippingPrice
      }, userInfo.token));
      dispatch(removeCart(userInfo._id));
      props.history.push('/');
      dispatch(getToCart());
    }
  }

  if (cartItems) {
    itemsPrice = cartItems.reduce((a, b) => a + b.priceTotal, 0);
  }
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
            cartItems.length === 0 ? <Col sm={12} xl={12} className="">
              <Spinner className="loading-center" animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col> :
              <Col sm={12} xl={12} className="p-0">
                <Row>
                  <Col xs={12} xl={8}>
                    <Row>
                      <Col xs={12} xl={12} className="border-bottom pb-3">
                        <Row className="px-3"><h5>Thông tin khách hàng</h5></Row>
                        <Row className="px-3">
                          <Col xs={5} xl={5}><b>{userInfo.fullName + "  (+84) " + userInfo.phone}</b></Col>
                          <Col xs={7} xl={7} className="d-flex align-items-center">
                            <label className="mr-3" htmlFor="address">Địa chỉ</label>
                            <textarea cols="2" style={{ width: "80%" }} type="text" name="address" id="address" value={address} onChange={e => setAddress(e.target.value)} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} xl={12} className="border-bottom pb-3">
                        <Row className="px-3"><h5 className="py-3">Phương thức thanh toán</h5>
                          <Tabs
                            id="controlled-tab-example"
                            activeKey={payment}
                            onSelect={(k) => setPayment(k)}
                          >
                            <Tab className="py-3" eventKey="tienmat" title="Thanh toán khi nhận hàng">
                              <p align="center">Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng.</p>
                              <p align="center">Vui lòng bấm nút "Đặt hàng" để hoàn tất.</p>
                            </Tab>
                            <Tab className="py-3" eventKey="credit" title="Thanh toán bằng thẻ tín dụng">
                              <div class="gh-se3t1b">
                                <p align="center">Hãy chọn loại thẻ của bạn và bấm nút <strong>đặt hàng</strong></p>
                              </div>
                            </Tab>
                          </Tabs>
                        </Row>
                      </Col>
                      <Col xs={12} xl={12} className="py-3">
                        <Button onClick={placeOrderHandler} variant="danger">Đặt hàng</Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} xl={4} className="border">
                    <Row xs={12} xl={12} className="border-bottom p-3">
                      <h6>Đơn hàng</h6>
                    </Row>
                    {
                      cartItems.map((x, i) =>
                        <Row key={i} xs={12} xl={12} className="border-bottom py-3">
                          <Col xs={6} xl={6}>
                            {x.prdName}
                          </Col>
                          <Col xs={1} xl={1}>
                            x{x.qty}
                          </Col>
                          <Col xs={4} xl={4}>
                            <NumberFormat
                              value={x.priceTotal}
                              displayType={'text'}
                              thousandSeparator={true}
                            />
                            {"₫"}
                          </Col>
                        </Row>
                      )
                    }
                    <Row xs={12} xl={12} className="border-bottom py-3">
                      <Col xs={6} xl={6}><h5>Thành tiền</h5></Col>
                      <Col xs={6} xl={6} className="t-red">
                        <NumberFormat
                          value={itemsPrice}
                          displayType={'text'}
                          thousandSeparator={true}
                        />
                        {"₫"}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
        }
      </Row>
    </Container>;
}
export default CheckOutPage;