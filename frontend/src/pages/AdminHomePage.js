import React from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faClipboardCheck,
    faMobileAlt,
    faShoppingCart,
    faUsers,
    faUsersCog
} from '@fortawesome/free-solid-svg-icons'
import Products from '../components/Admin/Products';
import Categories from '../components/Admin/Categories';

const AdminHomePage = () => {
    const adminLogin = useSelector(state => state.adminLogin);
    const { adminInfo } = adminLogin;

    return (adminInfo ? <Container fluid className="h-100 position-relative">
        <Tab.Container id="left-tabs-example" defaultActiveKey="products">
            <Row className="h-100">
                <Col xs={12} sm={4} md={3} lg={3} xl={2} className="py-4 bg-0a1727">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item className="text-center text-white">
                            <label><h5>Administrator</h5></label>
                        </Nav.Item>
                        <Nav.Item className="border-top border-bottom my-3 py-3">
                            <Nav.Link className="text-white d-flex align-items-center">
                                {
                                    adminInfo.avatar ? <img
                                        width="35px"
                                        src={adminInfo.avatar}
                                        style={{ borderRadius: "100%" }}
                                        className="mr-3"
                                    /> :
                                        <img
                                            width="35px"
                                            src="/uploads/users/admin.jpg"
                                            style={{ borderRadius: "100%" }}
                                            className="mr-3"
                                        />
                                }
                                <h6>{adminInfo.name}</h6>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="dashboard">
                                <label style={{ width: "25px", maxHeight: "16px", textAlign: "center" }}>
                                    <FontAwesomeIcon className="mr-2" icon={faHome} />
                                </label>
                                Dashboard
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="categories">
                                <label style={{ width: "25px", maxHeight: "16px", textAlign: "center" }}>
                                    <FontAwesomeIcon className="mr-2" icon={faClipboardCheck} />
                                </label>
                                Danh mục
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="products">
                                <label style={{ width: "25px", maxHeight: "16px", textAlign: "center" }}>
                                    <FontAwesomeIcon className="mr-2" icon={faMobileAlt} />
                                </label>
                                Sản phẩm
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="orders">
                                <label style={{ width: "25px", maxHeight: "16px", textAlign: "center" }}>
                                    <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
                                </label>
                            Đơn hàng
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="users">
                                <label style={{ width: "25px", maxHeight: "16px", textAlign: "center" }}>
                                    <FontAwesomeIcon className="mr-2" icon={faUsers} />
                                </label>
                                Người dùng
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="admins">
                                <label style={{ width: "25px", maxHeight: "16px", textAlign: "center" }}>
                                    <FontAwesomeIcon className="mr-2" icon={faUsersCog} />
                                </label>
                                Quản trị viên
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col xs={12} sm={8} md={9} lg={9} xl={10} className="py-4 bg-white">
                    <Tab.Content>
                        <Tab.Pane eventKey="dashboard">
                            dashboard
                        </Tab.Pane>
                        <Tab.Pane eventKey="categories">
                                <Categories />
                        </Tab.Pane>
                        <Tab.Pane eventKey="products">
                            <Products />
                        </Tab.Pane>
                        <Tab.Pane eventKey="orders">
                            orders
                        </Tab.Pane>
                        <Tab.Pane eventKey="users">
                            users
                        </Tab.Pane>
                        <Tab.Pane eventKey="admins">
                            admins
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </Container> : <div></div>
    )
}

export default AdminHomePage;