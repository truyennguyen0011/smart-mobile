import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch, faMobileAlt, faLaptop, faTabletAlt,
    faStopwatch, faKeyboard, faShoppingCart,
    faUserCircle
} from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Image,
    Container,
    Dropdown,
    ButtonGroup
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions';
import { getToCart } from '../../actions/cartActions';


function Header(props) {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const userID = userInfo ? userInfo._id : '';

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    useEffect(() => {
        if (userID) {
            dispatch(getToCart(userID));
        }
    }, []);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Nav.Link title="Home" href="/" className="border border-dark mr-1">
                    <Image src="https://i.imgur.com/BmGYhnp.png" width="120" />
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form inline>
                        <FormControl title="search" type="text" placeholder="Search" className="mr-sm-2" />
                        <Button title="Click to search" type="submit" variant="outline-info   ">
                            <FontAwesomeIcon icon={faSearch} color="white" />
                        </Button>
                    </Form>
                    <Nav className="mx-2">
                        <Nav.Link title="phone" href="/phone" className="text-uppercase font-weight-bold text-white border border-dark">
                            <FontAwesomeIcon size="lg" icon={faMobileAlt} color="white" />
                            <span>phone</span>
                        </Nav.Link>
                        <Nav.Link title="laptop" href="/laptop" className="text-uppercase font-weight-bold text-white border border-dark">
                            <FontAwesomeIcon size="lg" icon={faLaptop} color="white" />
                            <span>laptop</span>
                        </Nav.Link>
                        <Nav.Link title="tablet" href="/tablet" className="text-uppercase font-weight-bold text-white border border-dark">
                            <FontAwesomeIcon size="lg" icon={faTabletAlt} color="white" />
                            <span>tablet</span>
                        </Nav.Link>
                        <Nav.Link title="watch" href="/watch" className="text-uppercase font-weight-bold text-white border border-dark">
                            <FontAwesomeIcon size="lg" icon={faStopwatch} color="white" />
                            <span>watch</span>
                        </Nav.Link>
                        <Nav.Link title="accessory" href="/accessory" className="text-uppercase font-weight-bold text-white border border-dark">
                            <FontAwesomeIcon size="lg" icon={faKeyboard} color="white" />
                            <span>accessory</span>
                        </Nav.Link>
                    </Nav>
                    <Nav className="mx-2">
                        <Nav.Link title="Go to cart" href="/cart" className=" position-relative text-uppercase font-weight-bold text-white border border-dark">
                            <FontAwesomeIcon size="lg" icon={faShoppingCart} color="white" />
                            {
                                !cartItems ? <b></b> : cartItems.length > 0 ? <b className="cartic">{cartItems.length}</b> :
                                <b></b>
                            }
                        </Nav.Link>
                        {
                            userInfo ? <Dropdown as={ButtonGroup}>
                                <Nav.Link title="Go to profile" href="/profile" className=" border border-dark">
                                    {
                                        !userInfo.avatar ?
                                            <FontAwesomeIcon size="lg" icon={faUserCircle} /> :
                                            <img
                                                src={userInfo.avatar}
                                                width="25px"
                                                alt="avatar image"
                                                style={{ borderRadius: "100%" }}
                                            />
                                    }
                                </Nav.Link>

                                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/profile">Tài khoản của tôi</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                : <Nav.Link title="Go to login" href="/login" className="text-uppercase font-weight-bold text-white border border-dark">
                                    LOG IN
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;