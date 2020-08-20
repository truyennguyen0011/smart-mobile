import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Container, Row, Card, Col, Spinner } from 'react-bootstrap';
import { login } from '../actions/userActions';
import { loginAdmin } from '../actions/adminActions';
import { Redirect } from 'react-router-dom';

function AdminLoginPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const adminLogin = useSelector(state => state.adminLogin);
    const { loading, adminInfo, error } = adminLogin;

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/admin';

    useEffect(() => {
        if (adminInfo) {
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [adminInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginAdmin(email, password));
    }
    return <Container className="pt-3 my-3 bg-white" >
        {
            loading && (<Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>)
        }
        {error && <div>{error}</div>}
        <Row>
            <Col xl={4} sm={3} lg={4} md={3} xs={2} />
            <Col xl={4} sm={6} lg={4} md={6} xs={8}>
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
                            <Button block variant="danger" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} sm={3} lg={4} md={3} xs={2} />
        </Row>
    </Container>
}
export default AdminLoginPage;