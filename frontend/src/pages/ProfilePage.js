import React, { useState } from 'react';
import { Container, Button, Row, Col, Table, Tab, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { Redirect } from 'react-router-dom';

const ProfilePage = (props) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const handleLogout = () => {
        dispatch(logout());
        props.history.push("/login");
    }

    return !userInfo ? <Redirect to="/login" /> :
        <Container>
            <Row className="bg-white my-3 p-3">
                <Col xs={12} xl={12} className="px-0 py-2 border-bottom">
                    <h5>Hồ Sơ Của Tôi</h5>
                </Col>
                <Col xs={12} xl={12} className="p-3">
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
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
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