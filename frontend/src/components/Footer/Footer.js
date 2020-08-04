import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {

    return (
        <footer className="bg-dark text-white p-3">
            <Container>
                <Row>
                    <Col md={3} sm={6}>
                        <h5>Chăm sóc khách hàng</h5>
                        <ul className="list-unstyled list-ft">
                            <li>
                                <a href="#">
                                    Trung tâm trợ giúp
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Hướng dẫn mua hàng
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Trả hàng và hoàn tiền
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Chính sách bảo hành
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} sm={6}>
                        <h5>Về Smart Mobile</h5>
                        <ul className="list-unstyled list-ft">
                            <li>
                                <a href="#">
                                    Giới thiệu
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Điều khoản người dùng
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Góp ý
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} sm={6}>
                        <h5>Hỗ trợ thanh toán</h5>
                        <ul className="list-unstyled list-ft">
                            <li>
                                <a href="#">
                                    <img
                                        alt="image"
                                        width="125px"
                                        src="https://www.pngkey.com/png/full/87-870726_credit-card-logos-visa-mastercard-american-express-discover.png"
                                    />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} sm={6}>
                        <h5>Liên hệ</h5>
                        <ul className="list-unstyled list-ft">
                            <li>
                                <a target="_blank" href="https://www.facebook.com/">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" className="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
                                    &ensp;Fb : fb.com/smartmobile
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://mail.google.com/">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    &ensp;Email: smartmobile@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faPhone} />
                                    &ensp;Phone: 0373763676
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" className="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                                    &ensp;Youtube: yt.com/smartmobile
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className="footer-bottom">
                    <p className="text-sm-center">
                        Copyright &copy;{new Date().getFullYear()} Smart Mobile - All Rights Reserved | Email: smartmobile@gmail.com
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;

