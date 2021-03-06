import React from 'react';
import { Container, Card, Spinner, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import './ProductList.css';


const ProductList = (props) => {

    const { data } = props;
console.log(data);
    return (
        <Container className="px-3">
            <div className="bg-white mx-0 my-3 py-3">
                <Row className="pl-3 pb-3">
                    <Col className="text-uppercase" lg={6}>
                        <h3>
                            {props.title}
                        </h3>
                    </Col>
                    <Col className="viewAllPrd" lg={6}>
                        {
                            props.categoryProduct ? <Link to={props.categoryProduct}>
                                Xem tất cả
                            </Link> : <div></div>
                        }
                    </Col>
                </Row>
                {
                    data.length === 0 ? <div id="notfound" className="p-3" style={{ textAlign: "center" }}>
                    <div class="notfound">
                        <div class="notfound-404">
                            <h1>Oops!</h1>
                            <h2>Không có sản phẩm nào!</h2>
                        </div>
                        <Link to="/">Go TO Homepage</Link>
                    </div>
                </div> : <Row></Row>
                }
                <Row className="pl-3 pb-3">
                    {data ? data.map(
                        item => (
                            <Col className="card-item mb-3" xs={6} md={6} lg={3} key={item._id}>
                                <Link to={item.categoryName + "/" + item._id}>
                                    <Card.Img variant="top" src={item.prdImage} />
                                </Link>
                                <Card.Body>
                                    <Link to={item.categoryName + "/" + item._id}>
                                        <Card.Title>{item.prdName}</Card.Title>
                                    </Link>
                                    <Row xl={12}>
                                        <Col xl={6} className="progress">
                                            {item.pricePromotion > 0 ?
                                                <NumberFormat
                                                    value={item.pricePromotion}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                />
                                                : <NumberFormat
                                                    value={item.priceNormal}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                />
                                            }
                                            {"₫"}
                                        </Col>
                                        <Col xl={6}>
                                            <strike>
                                                {
                                                    item.pricePromotion > 0 ?
                                                        <NumberFormat
                                                            value={item.priceNormal}
                                                            displayType={'text'}
                                                            thousandSeparator={true}
                                                        />
                                                        : <NumberFormat
                                                            value={item.priceNormal}
                                                            displayType={'text'}
                                                            thousandSeparator={true}
                                                        />
                                                }
                                                {"₫"}
                                            </strike>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer>
                                    <Button href={item.categoryName + "/" + item._id} variant="danger">Mua ngay</Button>
                                    <Button href="#" variant="primary">So sánh</Button>
                                </Card.Footer>
                            </Col>
                        )
                    ) : (<Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>)}
                </Row>
            </div>
        </Container>
    );
};

export default ProductList;