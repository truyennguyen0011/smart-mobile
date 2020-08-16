
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Container, Row, Card, Col, Spinner } from 'react-bootstrap';
import { signup } from '../actions/userActions';
import Axios from 'axios';

function SignupPage(props) {

    const [password, setPassword] = useState('');

    const [rePassword, setRePassword] = useState('');
    const [fullName, setFullName] = useState('');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [avatar, setAvatar] = useState('');
    const [uploading, setUploading] = useState(false);

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

    const submitHandler = e => {
        e.preventDefault();

        dispatch(signup(password, fullName, email, phone, avatar));
    }

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('image', file);
        setUploading(true);
        Axios
            .post('/api/uploads', fd, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setAvatar(response.data);
                setUploading(false);
            })
            .catch((err) => {
                console.log(err);
                setUploading(false);
            });
    };

    return <Container className="pt-3 my-3 bg-white position-relative" >
        {
            loading && (<Spinner className="loading-center" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>)
        }
        {error && <div>{error}</div>}
        <Row>
            <Col xl={4} sm={3} lg={3} md={3} xs={2} />
            <Col xl={4} sm={6} lg={6} md={6} xs={8}>
                <Card>
                    <Card.Body>
                        <Card.Title>Signup</Card.Title>

                        <Form method="POST" encType="multipart/form-data" onSubmit={submitHandler}>
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

                            <Form.Group controlId="formBasicFile">
                                <Form.Label>Avatar</Form.Label>
                                <Form.Control
                                    name="avatar"
                                    type="file"
                                    onChange={uploadFileHandler}
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
            <Col xl={4} sm={3} lg={3} md={3} xs={2} />
        </Row>
    </Container>
}
export default SignupPage;