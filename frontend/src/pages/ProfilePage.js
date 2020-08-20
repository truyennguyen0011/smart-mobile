import React, { useState } from 'react';
import { Container, Button, Row, Col, Table, Tab, Nav, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updatePassword, updateInfo } from '../actions/userActions';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const ProfilePage = (props) => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const [fullName, setFullName] = useState(userInfo ? userInfo.fullName : '');
    const [phone, setPhone] = useState(userInfo ? userInfo.phone : '');

    const [avatar, setAvatar] = useState(userInfo ? userInfo.avatar : '');
    const [email, setEmail] = useState(userInfo ? userInfo.email : '');

    const [uploading, setUploading] = useState(false);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        props.history.push("/login");
    }

    const submitPasswordHandler = (e) => {
        e.preventDefault();
        if (password !== '' && rePassword !== '') {
            if (password !== rePassword) {
                alert("Mật khẩu và xác nhận không đúng")
            } else {
                dispatch(updatePassword(userInfo._id, password, userInfo.token));
                setPassword('');
                setRePassword('');
                alert("Bạn đã thay đổi mật khẩu thành công")
            }
        }
    }

    const submitInfoHandler = (e) => {
        e.preventDefault();
        if (fullName !== userInfo.fullName ||
            email !== userInfo.email ||
            avatar !== userInfo.avatar ||
            phone !== userInfo.phone
        ) {
            dispatch(updateInfo(userInfo._id, fullName, email, avatar, phone, userInfo.token));
            alert("Cập nhật thông tin thành công");
        } else {
            alert("Thông tin của bạn không có gì thay đổi");
        }
    }

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('image', file);
        setUploading(true);
        Axios
            .post('/api/uploads/user', fd, {
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


    return !userInfo ? <Redirect to="/login" /> :
        <Container>
            <Row className="bg-white my-5 p-3">
                <Col xs={12} xl={12} className="px-0 py-2 border-bottom">
                    <h5>Hồ Sơ Của Tôi</h5>
                </Col>
                <Col xs={12} xl={12} className="p-3 my-3">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3} className="border-right">
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Hồ Sơ</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Dổi mật khẩu</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Chỉnh sửa thông tin</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Đăng xuất</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Table striped bordered hover size="sm">
                                            <tbody>
                                                <tr>
                                                    <td>Email</td>
                                                    <td>{userInfo.email}</td>
                                                </tr>
                                                <tr>
                                                    <td>Tên</td>
                                                    <td>{userInfo.fullName}</td>
                                                </tr>
                                                <tr>
                                                    <td>SĐT</td>
                                                    <td>{userInfo.phone}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row className="border-bottom my-3">
                                            <Col>
                                                <h6>Chỉnh sửa mật khẩu</h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={2} xl={3}></Col>
                                            <Col xs={8} xl={6}>
                                                <Form onSubmit={submitPasswordHandler}>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label>Mật khẩu mới</Form.Label>
                                                        <Form.Control
                                                            name="password"
                                                            type="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label>Xác nhận mật khẩu</Form.Label>
                                                        <Form.Control
                                                            name="re-password"
                                                            type="password"
                                                            value={rePassword}
                                                            onChange={(e) => setRePassword(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                    <Button type="submit" variant="warning">
                                                        Xác nhận
                                                    </Button>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row className="border-bottom my-3">
                                            <Col>
                                                <h6>Chỉnh sửa thông tin</h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={2} xl={3}></Col>
                                            <Col xs={8} xl={6}>
                                                <Form onSubmit={submitInfoHandler}>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control
                                                            name="email"
                                                            type="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicText">
                                                        <Form.Label>Họ tên</Form.Label>
                                                        <Form.Control
                                                            name="fullName"
                                                            type="text"
                                                            value={fullName}
                                                            onChange={(e) => setFullName(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicText">
                                                        <Form.Label>Số điện thoại</Form.Label>
                                                        <Form.Control
                                                            name="phone"
                                                            type="text"
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group controlId="avatar" className="d-flex align-items-center">
                                                        <img width="70px" style={{ borderRadius: "100%" }} src={avatar} />
                                                        <Form.Control
                                                            type="file"
                                                            name="avatar"
                                                            id="avatar"
                                                            accept="image/png, image/jpeg"
                                                            className="ml-3"
                                                            onChange={uploadFileHandler}
                                                        />
                                                    </Form.Group>
                                                    <Button type="submit" variant="warning">
                                                        Lưu
                                                    </Button>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <Button variant="danger" onClick={handleLogout}>Logout</Button>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container >
};

export default ProfilePage;