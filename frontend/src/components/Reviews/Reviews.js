import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Spinner, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Reviews.css';
import { PRODUCT_REVIEW_SAVE_RESET } from '../../constants/productConstants';
import { saveProductReview, detailsProduct } from '../../actions/productActions';

const Reviews = (props) => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [comment, setComment] = useState('');

    const { data } = props;
    let rating5Star = 0;
    let rating4Star = 0;
    let rating3Star = 0;
    let rating2Star = 0;
    let rating1Star = 0;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const productReviewSave = useSelector((state) => state.productReviewSave);
    const { success: productSaveSuccess } = productReviewSave;

    const dispatch = useDispatch();

    useEffect(() => {
        if (productSaveSuccess) {
            alert('Review submitted successfully.');
            setRating(0);
            setComment('');
            dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
            dispatch(detailsProduct(data._id));
        }
        return () => {
            //
        };
    }, [productSaveSuccess]);

    if (data) {
        data.reviews.map(x => {
            if (x.rating === 5) {
                rating5Star++;
            } else if (x.rating === 4) {
                rating4Star++;
            } else if (x.rating === 3) {
                rating3Star++;
            } else if (x.rating === 2) {
                rating2Star++;
            } else if (x.rating === 1) {
                rating1Star++;
            }
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch actions
        if (rating > 0) {
            if (comment) {
                dispatch(
                    saveProductReview(data._id, {
                        name: userInfo.fullName,
                        rating: rating,
                        comment: comment,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }, userInfo.token)
                );
            } else {
                alert("Nội dung không được để trống")
            }
        } else {
            alert("Please choose your rating level")
        }
    };

    return data ? <Container className="px-3 pt-3">
        <Row>
            <Col>
                <h6>
                    {data.numReviews + " đánh giá " + data.prdName}
                </h6>
            </Col>
        </Row>

        <Row className="border p-3 m-0 w-100">
            <Col xs={3} xl={2} className="fs-32 cl-org average-rating border-right">
                <span>
                    <b>{data.rating}</b>
                    <FontAwesomeIcon className="checked ml-1" icon={faStar} />
                </span>
            </Col>
            <Col xs={9} xl={5} className="r-per">
                <div className="r">
                    <span className="span-t">
                        <b>5</b>
                        <FontAwesomeIcon className="ml-1" icon={faStar} />
                    </span>
                    <div className="bgb ml-3">
                        <div className="bgb-in" style={{ width: rating5Star > 0 ? rating5Star * 100 / data.numReviews + "%" : 0 }}></div>
                    </div>
                    <span className="span-bt">
                        <strong>{rating5Star}</strong> đánh giá
                    </span>
                </div>
                <div className="r">
                    <span className="span-t">
                        <b>4</b>
                        <FontAwesomeIcon className="ml-1" icon={faStar} />
                    </span>
                    <div className="bgb ml-3">
                        <div className="bgb-in" style={{ width: rating4Star > 0 ? rating4Star * 100 / data.numReviews + "%" : 0 }}></div>
                    </div>
                    <span className="span-bt">
                        <strong>{rating4Star}</strong> đánh giá
                    </span>
                </div>
                <div className="r">
                    <span className="span-t">
                        <b>3</b>
                        <FontAwesomeIcon className="ml-1" icon={faStar} />
                    </span>
                    <div className="bgb ml-3">
                        <div className="bgb-in" style={{ width: rating3Star > 0 ? rating3Star * 100 / data.numReviews + "%" : 0 }}></div>
                    </div>
                    <span className="span-bt">
                        <strong>{rating3Star}</strong> đánh giá
                    </span>
                </div>
                <div className="r">
                    <span className="span-t">
                        <b>2</b>
                        <FontAwesomeIcon className="ml-1" icon={faStar} />
                    </span>
                    <div className="bgb ml-3">
                        <div className="bgb-in" style={{ width: rating2Star > 0 ? rating2Star * 100 / data.numReviews + "%" : 0 }}></div>
                    </div>
                    <span className="span-bt">
                        <strong>{rating2Star}</strong> đánh giá
                    </span>
                </div>
                <div className="r">
                    <span className="span-t">
                        <b>1</b>
                        <FontAwesomeIcon className="ml-1" icon={faStar} />
                    </span>
                    <div className="bgb ml-3">
                        <div className="bgb-in" style={{ width: rating1Star > 0 ? rating1Star * 100 / data.numReviews + "%" : 0 }}></div>
                    </div>
                    <span className="span-bt">
                        <strong>{rating1Star}</strong> đánh giá
                    </span>
                </div>
            </Col>
            <Col xs={12} xl={5} className="border-left">
                <h5>Gửi đánh giá của bạn</h5>
                {userInfo ? (
                    <Form onSubmit={submitHandler}>
                        {
                            [...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;

                                return <label key={i} className="l-star">
                                    <input
                                        type="radio"
                                        name="rating"
                                        hidden
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}

                                    />
                                    <FontAwesomeIcon
                                        size="2x"
                                        icon={faStar}
                                        id="s1"
                                        className="star"
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)}
                                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    />
                                </label>
                            })
                        }
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nội dung</Form.Label>
                            <Form.Control
                                name="comment"
                                type="textarea"
                                value={comment}
                                placeholder="Nhập đánh giá về sản phẩm (tối đa 200 ký tự)"
                                maxLength="200"
                                onChange={(e) => setComment(e.target.value)}
                                as="textarea"
                                rows="2" />
                        </Form.Group>
                        <Button type="submit" variant="primary">Gửi</Button>
                    </Form>
                ) : (
                        <div>
                            Please <Link to="/login">Login</Link> to write a review.
                        </div>
                    )}
            </Col>
        </Row>

        <Row className="mt-3">
            <Col>
                <h6>
                    Reviews
                </h6>
            </Col>
        </Row>

        {
            data.reviews.length > 0 ? <Row>
                {
                    data.reviews.map(x => (
                        <Col key={x._id} className="mt-2" xs={12} xl={12}>
                            <Row>
                                <Col xl={2} xs={5}>{x.reviewerName}</Col>
                                <Col xl={10} xs={7}>{x.updatedAt.substring(0, 10)}</Col>
                            </Row>
                            <Row>
                                <Col xl={2} xs={5}>
                                    <Rating value={x.rating} />
                                </Col>
                                <Col xl={10} xs={7}>
                                    <span>{x.comment}</span>
                                </Col>
                            </Row>
                        </Col>)
                    )
                }
            </Row> : <Row className="m-3">Chưa có nhận xét nào</Row>
        }
    </Container > :
        <Container>
            <Spinner className="loading-center" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Container>
};

export default Reviews;