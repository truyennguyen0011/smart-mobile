import React, { useEffect, useState } from 'react';
import { Container, Breadcrumb, Row, Spinner, Col, Image, Card, Button, Table, Tabs, Tab } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DescriptionProduct from '../components/DescriptionProduct/DescriptionProduct';
import Rating from '../components/Rating/Rating';

const ProductDetailsPage = (props) => {

    const [key, setKey] = useState('home');

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, []);

    const newProduct = { ...product };
    console.log(newProduct.rating);

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

    return <Container>
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
                        <Link to="#">
                            {newProduct.numReviews} đánh giá
                        </Link>
                    </div>
                </Row>
                <Row className="border-left border-right border-bottom border-success" xs={12}>
                    <Col xs={6} md={6} lg={4} xs={4} className="py-3">
                        <Image width="100%" src={newProduct.prdImage} />
                    </Col>
                    <Col xs={6} md={6} lg={3} xs={3} className="pt-3 ">
                        <Row xl={12} className="px-0">
                            <Col xs={12} md={6} lg={6} xs={5} className="price price-promo py-3">
                                {newProduct.pricePromotion ? newProduct.pricePromotion : newProduct.priceNormal}
                            </Col>

                            <Col xs={12} md={6} lg={6} xs={5} className="price price-nor px-0 py-3">
                                {newProduct.pricePromotion ? newProduct.priceNormal : ''}
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
                            <Button className="ml-3" variant="danger">Mua ngay</Button>
                            <Button className="ml-3">
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
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{newProduct.specifications.screen}</td>
                                </tr>
                                <tr>
                                    <td>Card Màn hình</td>
                                    <td>{newProduct.specifications.cardScreen}</td>
                                </tr>
                                <tr>
                                    <td>CPU</td>
                                    <td>{newProduct.specifications.cpu}</td>
                                </tr>
                                <tr>
                                    <td>GPU</td>
                                    <td>{newProduct.specifications.gpu}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{newProduct.specifications.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{newProduct.specifications.rom}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{newProduct.specifications.operatingSys}</td>
                                </tr>
                                <tr>
                                    <td>Xuất xứ</td>
                                    <td>{newProduct.specifications.origin}</td>
                                </tr>
                                <tr>
                                    <td>Năm sản xuất</td>
                                    <td>{newProduct.specifications.mfg}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{newProduct.specifications.camFront}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{newProduct.specifications.camRear}</td>
                                </tr>
                                <tr>
                                    <td>Thẻ SIM</td>
                                    <td>{newProduct.specifications.sim}</td>
                                </tr>
                                <tr>
                                    <td>Dung lượng PIN</td>
                                    <td>{newProduct.specifications.battery}</td>
                                </tr>
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
                        <Tab eventKey="rating" title="Nhận xét và đánh giá">
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