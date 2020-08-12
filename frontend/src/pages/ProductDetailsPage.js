import React, { useEffect, useState } from 'react';
import { Container, Breadcrumb, Row, Spinner, Col, Image, Card, Button, Table, Tabs, Tab } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import DescriptionProduct from '../components/DescriptionProduct/DescriptionProduct';
import Rating from '../components/Rating/Rating';
import NumberFormat from 'react-number-format';
import { addToCart } from '../actions/cartActions';

const ProductDetailsPage = (props) => {

    const [key, setKey] = useState('description');
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading } = productDetails;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));

        return () => {
            //
        };
    }, []);

    const newProduct = { ...product };

    const handleRating = () => {
        if (newProduct.rating >= 0 && newProduct.rating < 1) {
            return (
                <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            )
        } else
            if (newProduct.rating >= 1 && newProduct < 2) {
                return (
                    <div>
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                )
            } else if (newProduct.rating >= 2 && newProduct < 3) {
                return (
                    <div>
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                )
            } else if (newProduct.rating >= 3 && newProduct < 4) {
                return (
                    <div>
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                )
            } else if (newProduct.rating >= 4 && newProduct < 5) {
                return (
                    <div>
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                )
            } else if (newProduct.rating === 5) {
                return (
                    <div>
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon className="checked" icon={faStar} />
                        <FontAwesomeIcon className="checked" icon={faStar} />
                    </div>
                )
            }

    };

    const handleQty = (e, countInStock) => {
        const value = Number(e.target.value);
        if (value >= 0 && value <= countInStock) {
            setQty(value);
        }
    }

    const handleBuyNow = () => {
        dispatch(addToCart(
            newProduct._id,
            userInfo._id,
            newProduct.prdImage,
            newProduct.prdName,
            qty,
            newProduct.pricePromotion > 0 ? newProduct.pricePromotion : newProduct.priceNormal,
            qty * (newProduct.pricePromotion > 0 ? newProduct.pricePromotion : newProduct.priceNormal)
        ));
        props.history.push('/cart');
    };
    const handleAddToCart = () => {
        dispatch(addToCart(
            newProduct._id,
            userInfo._id,
            newProduct.prdImage,
            newProduct.prdName,
            qty,
            newProduct.pricePromotion > 0 ? newProduct.pricePromotion : newProduct.priceNormal,
            qty * (newProduct.pricePromotion > 0 ? newProduct.pricePromotion : newProduct.priceNormal)
        ));
    };

    return <Container className="position-relative">
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href={"/" + props.location.pathname.split("/")[1]}>
                {props.location.pathname.split("/")[1]}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{newProduct.prdName || props.location.pathname.split("/")[2]}</Breadcrumb.Item>
        </Breadcrumb>

        {
            loading === false && newProduct ? <div className="main-wrapper bg-white p-3 mb-3">
                <Row className="px-3 pb-3 border-bottom border-success">
                    <h3>{newProduct.prdName}</h3>
                    <div className="rating pt-2 ml-3">
                        {
                            handleRating()
                        }
                    </div>
                    <div className="rating pt-2 ml-3">
                        <a onClick={() => setKey(props.location.hash.split('#')[1])} href="#rating">
                            {newProduct.numReviews} đánh giá
                        </a>
                    </div>
                </Row>
                <Row className="border-left border-right border-bottom border-success" xs={12}>
                    <Col xs={6} md={6} lg={4} xs={4} className="py-3">
                        <Image width="100%" src={newProduct.prdImage} />
                    </Col>
                    <Col xs={6} md={6} lg={3} xs={3} className="pt-3 ">
                        <Row xl={12} className="px-0">
                            <Col xs={12} md={6} lg={6} xs={5} className="price price-promo py-3">
                                {newProduct.pricePromotion > 0 ?
                                    <NumberFormat
                                        value={newProduct.pricePromotion}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                    />
                                    : <NumberFormat
                                        value={newProduct.priceNormal}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                    />
                                }
                                {"₫"}
                            </Col>

                            <Col xs={12} md={6} lg={6} xs={5} className="price price-nor px-0 py-3">
                                {
                                    newProduct.pricePromotion > 0 ?
                                        <NumberFormat
                                            value={newProduct.priceNormal}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                        : <NumberFormat
                                            value={newProduct.priceNormal}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                }
                                {"₫"}
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Khuyến mãi</Card.Title>
                                    <Card.Text>
                                        <FontAwesomeIcon color="green" icon={faCheckCircle} />
                                        &ensp;Giảm ngay 500.000đ trừ ngay vào giá gốc khi mua trực tiếp tại cửa hàng.
                                    </Card.Text>
                                    <Card.Text>
                                        <FontAwesomeIcon color="green" icon={faCheckCircle} />
                                        &ensp;Có cơ hội tham gia quay số trúng thưởng với phần thưởng là một chiếc iphone 11 pro max.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row xl={12} className="my-3">
                            <div className="count-prd">
                                <label>Số lượng</label>
                                <div>
                                    {
                                        qty >= 2 ?
                                            <button onClick={() => setQty(qty - 1)}>-</button> :
                                            <button>-</button>
                                    }
                                    <input type="text" value={qty} onChange={(e) => handleQty(e, newProduct.countInStock)} />
                                    {
                                        qty < newProduct.countInStock ?
                                            <button onClick={() => setQty(qty + 1)}>+</button> :
                                            <button>+</button>
                                    }
                                </div>
                            </div>
                        </Row>
                        <Row xl={12} className="my-3">
                            <div className="count-prd">
                                <label>Kho</label>
                                <div>
                                    <label>{newProduct.countInStock}</label>
                                </div>
                            </div>
                        </Row>
                        <Row xl={12} className="my-3">
                            {
                                newProduct.countInStock > 0 ?
                                    <Button onClick={handleBuyNow} className="ml-3" variant="danger">Mua ngay</Button> :
                                    <Button disabled className="ml-3" variant="danger">Mua ngay</Button>
                            }
                            <Button onClick={handleAddToCart} className="ml-3">
                                <FontAwesomeIcon icon={faCartPlus} />
                                &ensp;Add to cart
                            </Button>
                        </Row>
                    </Col>
                    <Col xs={6} md={6} lg={5} xs={5}>
                        <Table className="mt-3" striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Thông số kỹ thuật</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newProduct.specifications.screen ?
                                        <tr>
                                            <td>Màn hình</td>
                                            <td>{newProduct.specifications.screen}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.cardScreen ?
                                        <tr>
                                            <td>Card Màn hình</td>
                                            <td>{newProduct.specifications.cardScreen}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.cpu ?
                                        <tr>
                                            <td>CPU</td>
                                            <td>{newProduct.specifications.cpu}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.gpu ?
                                        <tr>
                                            <td>GPU</td>
                                            <td>{newProduct.specifications.gpu}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.ram ?
                                        <tr>
                                            <td>RAM</td>
                                            <td>{newProduct.specifications.ram}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.rom ?
                                        <tr>
                                            <td>ROM</td>
                                            <td>{newProduct.specifications.rom}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.operatingSys ?
                                        <tr>
                                            <td>Hệ điều hành</td>
                                            <td>{newProduct.specifications.operatingSys}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.origin ?
                                        <tr>
                                            <td>Xuất xứ</td>
                                            <td>{newProduct.specifications.origin}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.mfg ?
                                        <tr>
                                            <td>Năm sản xuất</td>
                                            <td>{newProduct.specifications.mfg}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.camFront ?
                                        <tr>
                                            <td>Camera trước</td>
                                            <td>{newProduct.specifications.camFront}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.camRear ?
                                        <tr>
                                            <td>Camera sau</td>
                                            <td>{newProduct.specifications.camRear}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.sim ?
                                        <tr>
                                            <td>Thẻ SIM</td>
                                            <td>{newProduct.specifications.sim}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                                {
                                    newProduct.specifications.battery ?
                                        <tr>
                                            <td>Dung lượng PIN</td>
                                            <td>{newProduct.specifications.battery}</td>
                                        </tr> :
                                        <tr></tr>
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row className="my=3 py-3">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="description" title="Đặt điểm nổi bật">
                            <DescriptionProduct data={newProduct.description} />
                        </Tab>
                        <Tab name="rating" eventKey="rating" title="Nhận xét và đánh giá">
                            <Rating data={newProduct.rating} />
                        </Tab>
                    </Tabs>
                </Row>
            </div> : (<Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>)
        }

    </Container>;
};

export default ProductDetailsPage;