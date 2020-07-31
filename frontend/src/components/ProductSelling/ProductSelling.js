import React from 'react';
import { Container, Card, Spinner, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductSelling.css';


const ProductSelling = (props) => {

    const { data } = props;

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
                        <Link to={props.categoryProduct}>
                            Xem tất cả
                            </Link>
                    </Col>
                </Row>
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
                                            {item.pricePromotion ? item.pricePromotion : item.priceNormal}
                                        </Col>
                                        <Col xl={6}>
                                            <strike>
                                                {item.pricePromotion ? item.priceNormal : ''}
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

export default ProductSelling;