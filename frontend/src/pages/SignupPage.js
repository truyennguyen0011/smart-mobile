
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Container, Row, Card, Col, Spinner } from 'react-bootstrap';
import { signup } from '../actions/userActions';

function SignupPage(props) {

    const [password, setPassword] = useState('');

    const [rePassword, setRePassword] = useState('');
    const [fullName, setFullName] = useState('');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // const [gender, setPassword] = useState('');
    // const [dateOfBirth, setDateOfBirth] = useState('');

    const userSignup = useSelector(state => state.userSignup);
    const { loading, userInfo, error } = userSignup;

    const dispatch = useDispatch();

    // const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if (userInfo) {
            props.history.push("/login");
        }
        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        console.log(e);
        e.preventDefault();
        dispatch(signup(password, fullName, email, phone));
    }
    return <Container className="pt-3 my-3 bg-white" >
        {
            loading && (<Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>)
        }
        {error && <div>{error}</div>}
        <Row>
            <Col sm={4} md={4} xs={4} />
            <Col sm={4} md={4} xs={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>

                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="example@demo.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    name="Confirm-password"
                                    type="password"
                                    placeholder="Confirm password"
                                    onChange={(e) => setRePassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicText">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    name="fullname"
                                    type="text"
                                    placeholder="Your name"
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicText">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    name="phone"
                                    type="text"
                                    placeholder="Your phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Form.Group>

                            {/* <Form.Group controlId="formBasicText">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    name="gender"
                                    type="text"
                                    placeholder="Your name"
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicText">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    name="fullname"
                                    type="text"
                                    placeholder="Your name"
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </Form.Group> */}
                            <Button block variant="danger" type="submit">
                                Signup
                            </Button>
                            <Form.Group>
                                <Form.Label>Already have an account?</Form.Label>
                                <Button block href="/login">
                                    Login
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={4} md={4} xs={4} />
        </Row>
    </Container>
}
export default SignupPage;