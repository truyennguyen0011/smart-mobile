import React, { useEffect, useState } from 'react';
import { Container, Row, Table, Button, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';

import { listProducts, saveProduct, deleteProduct } from '../../actions/productActions';

const Products = () => {
    const productList = useSelector(state => state.productList);
    const { products, error, loading } = productList;

    const adminLogin = useSelector(state => state.adminLogin);
    const { adminInfo } = adminLogin;

    const categoryList = useSelector(state => state.categoryList);
    const { categories } = categoryList;

    const [textAction, setTextAction] = useState('');

    const [id, setId] = useState('');
    const [prdName, setPrdName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [prdBrand, setPrdBrand] = useState('');
    const [priceNormal, setPriceNormal] = useState(0);
    const [pricePromotion, setPricePromotion] = useState(0);
    const [countInStock, setCountInStock] = useState(0);
    const [prdImage, setPrdImage] = useState('')
    const [description, setDescription] = useState('')

    const [screen, setScreen] = useState('')
    const [cardScreen, setCardScreen] = useState('')
    const [cpu, setCpu] = useState('')
    const [gpu, setGpu] = useState('')
    const [ram, setRam] = useState('')
    const [rom, setRom] = useState('')
    const [operatingSys, setOperatingSys] = useState('')
    const [origin, setOrigin] = useState('')
    const [mfg, setMfg] = useState('')
    const [camFront, setCamFront] = useState('')
    const [camRear, setCamRear] = useState('')
    const [sim, setSim] = useState('')
    const [battery, setBattery] = useState('')

    const dispatch = useDispatch();

    const productSave = useSelector((state) => state.productSave);
    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = productSave;

    const productDelete = useSelector((state) => state.productDelete);
    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = productDelete;

    useEffect(() => {
        dispatch(listProducts());

        return () => {

        };
    }, [successSave, successDelete]);

    const addProductHandler = () => {
        setTextAction("Thêm sản phẩm");
        const formProducts = document.getElementById('form-products');
        formProducts.style.display = "flex";
    };
    const closeAddProductHandler = () => {
        const formProducts = document.getElementById('form-products');
        setId('');
        setPrdName('');
        setCategoryName('');
        setPrdBrand('');
        setPriceNormal(0);
        setPricePromotion(0);
        setCountInStock(0);
        setDescription('');
        setPrdImage('');

        setScreen('');
        setCardScreen('');
        setCpu('');
        setGpu('');
        setRam('');
        setRom('');
        setOperatingSys('');
        setOrigin('');
        setMfg('');
        setCamFront('');
        setCamRear('');
        setSim('');
        setBattery('');
        formProducts.style.display = "none";
    };

    const editProductHandler = (e, item) => {
        console.log(e, item);
        setTextAction("Sửa sản phẩm");
        const formProducts = document.getElementById('form-products');
        formProducts.style.display = "flex";

        setId(item._id);
        setPrdName(item.prdName);
        setCategoryName(item.categoryName);
        setPrdBrand(item.prdBrand);
        setPriceNormal(item.priceNormal);
        setPricePromotion(item.pricePromotion);
        setCountInStock(item.countInStock);
        setDescription(item.description);
        setPrdImage(item.prdImage);

        setScreen(item.specifications.screen);
        setCardScreen(item.specifications.cardScreen);
        setCpu(item.specifications.cpu);
        setGpu(item.specifications.gpu);
        setRam(item.specifications.ram);
        setRom(item.specifications.rom);
        setOperatingSys(item.specifications.operatingSys);
        setOrigin(item.specifications.origin);
        setMfg(item.specifications.mfg);
        setCamFront(item.specifications.camFront);
        setCamRear(item.specifications.camRear);
        setSim(item.specifications.sim);
        setBattery(item.specifications.battery);
    };

    const deleteProductHandler = (item) => {
        const token = adminInfo ? adminInfo.token : '';
        if (token) {
            dispatch(deleteProduct(item._id, token));
        }
    };

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('image', file);
        Axios
            .post('/api/uploads/product', fd, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response);
                setPrdImage(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const token = adminInfo ? adminInfo.token : '';
        const obj = categories ? {
            ...categories.find(x => x.categoryName === categoryName)
        } : '';
        const prdCreatedAt = new Date();
        if (token) {
            dispatch(saveProduct({
                _id: id ? id : '',
                prdName,
                categoryID: obj._id,
                prdImage,
                prdBrand,
                pricePromotion,
                priceNormal,
                categoryName,
                countInStock,
                description,
                prdCreatedAt,
                specifications: {
                    screen,
                    cardScreen,
                    cpu,
                    gpu,
                    ram,
                    rom,
                    operatingSys,
                    origin,
                    mfg,
                    camFront,
                    camRear,
                    sim,
                    battery
                }
            }, token));
            closeAddProductHandler();
            alert("Cập nhật sản phẩm thành công")
        } else {
            alert("Vui lòng đăng nhập lại")
        }
    }

    return <Container>
        <Row
            id="form-products"
            style={
                {
                    width: "60%",
                    display: "none",
                    position: "absolute",
                    left: "50%",
                    top: "0",
                    transform: "translate(-50%, 0)",
                    background: "#fff",
                    color: "#000",
                    border: "1px solid black",
                    borderRadius: "3px",
                    opacity: "0.99"
                }
            }>
            <Col xl={12} className="py-3 border-bottom border-dark">
                <Row>
                    <Col>
                        <h5>{textAction}</h5>
                    </Col>
                    <Col align="right">
                        <a onClick={closeAddProductHandler}>
                            <FontAwesomeIcon color="red" size="2x" icon={faTimesCircle} />
                        </a>
                    </Col>
                </Row>
            </Col>
            <Col className="py-3">
                <Form onSubmit={submitHandler}>
                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText1">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Tên sản phẩm:</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="prdName"
                                type="text"
                                value={prdName}
                                onChange={(e) => setPrdName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText2">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Danh mục</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="categoryName"
                                type="text"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText3">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Brand</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="prdBrand"
                                type="text"
                                value={prdBrand}
                                onChange={(e) => setPrdBrand(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicNumber1">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Giá gốc</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="priceNormal"
                                type="number"
                                value={priceNormal}
                                onChange={(e) => setPriceNormal(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicNumber2">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Giá KM</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="pricePromotion"
                                type="number"
                                value={pricePromotion}
                                onChange={(e) => setPricePromotion(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicNumber3">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Kho</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="countInStock"
                                type="number"
                                value={countInStock}
                                onChange={(e) => setCountInStock(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicFile1">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Image</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9} className="d-flex align-items-center">
                            {
                                prdImage ? <img src={prdImage} width="40px" className="mr-3" /> : ''
                            }
                            <Form.Control
                                name="prdImage"
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={uploadFileHandler}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicArea">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Mô tả</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <textarea
                                id="formBasicArea"
                                name="description"
                                row="3"
                                style={{ width: "100%" }}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    {/* --------------------------------------------------------- */}
                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText4">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Màn hình</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="screen"
                                type="text"
                                value={screen}
                                onChange={(e) => setScreen(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText5">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Card màn hình</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="cardScreen"
                                type="text"
                                value={cardScreen}
                                onChange={(e) => setCardScreen(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText6">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>CPU</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="cpu"
                                type="text"
                                value={cpu}
                                onChange={(e) => setCpu(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText7">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>GPU</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="gpu"
                                type="text"
                                value={gpu}
                                onChange={(e) => setGpu(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText8">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>RAM</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="ram"
                                type="text"
                                value={ram}
                                onChange={(e) => setRam(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText9">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>ROM</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="rom"
                                type="text"
                                value={rom}
                                onChange={(e) => setRom(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText10">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Hệ điều hành</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="operatingSys"
                                type="text"
                                value={operatingSys}
                                onChange={(e) => setOperatingSys(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText11">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Xuất xứ</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="origin"
                                type="text"
                                value={origin}
                                onChange={(e) => setOrigin(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText12">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Năm sản xuất</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="mfg"
                                type="text"
                                value={mfg}
                                onChange={(e) => setMfg(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText13">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Camera trước</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="camFront"
                                type="text"
                                value={camFront}
                                onChange={(e) => setCamFront(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText14">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Camera Sau</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="camRear"
                                type="text"
                                value={camRear}
                                onChange={(e) => setCamRear(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText15">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>SIM</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="sim"
                                type="text"
                                value={sim}
                                onChange={(e) => setSim(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row d-flex justify-content-center align-items-center" controlId="formBasicText16">
                        <Col xs={12} lg={3} xl={3}>
                            <Form.Label>Pin</Form.Label>
                        </Col>
                        <Col xs={12} lg={9} xl={9}>
                            <Form.Control
                                name="battery"
                                type="text"
                                value={battery}
                                onChange={(e) => setBattery(e.target.value)}
                            />
                        </Col>
                    </Form.Group>


                    {/* ----------------------------------------------- */}

                    <Button block variant="danger" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>

        <Row className="py-3">
            <Col><h5>Quản lý sản phẩm</h5></Col>
            <Col align="right">
                <Button onClick={addProductHandler}>Thêm sản phẩm</Button>
            </Col>
        </Row>
        <Row>
            <Table className="w-100" responsive="sm" size="sm" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th style={{ width: "5%" }}>STT</th>
                        <th style={{ width: "23%" }}>Tên sản phẩm</th>
                        <th style={{ width: "10%" }}>Danh mục</th>
                        <th style={{ width: "12%" }}>Thương hiệu</th>
                        <th style={{ width: "10%" }}>Hình ảnh</th>
                        <th style={{ width: "20%" }}>Thông tin</th>
                        <th style={{ width: "20%" }}>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products ? products.map((item, i) =>
                            <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td>{item.prdName}</td>
                                <td>{item.categoryName}</td>
                                <td>{item.prdBrand}</td>
                                <td align="center">
                                    <img className="pt-2" src={item.prdImage} width="50px" />
                                </td>
                                <td>
                                    <ul>
                                        <li style={{ listStyleType: "disc" }}>Giá gốc: {item.priceNormal}</li>
                                        <li style={{ listStyleType: "disc" }}>Giá KM: {item.pricePromotion}</li>
                                        <li style={{ listStyleType: "disc" }}>Tồn kho: {item.countInStock}</li>
                                    </ul>
                                </td>
                                <td align="center">
                                    <Button onClick={(e) => editProductHandler(e, item)} className="mt-1 mr-2">Sửa</Button>
                                    <Button onClick={() => deleteProductHandler(item)} variant="danger" className="mt-1">Xóa</Button>
                                </td>
                            </tr>
                        ) : <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                    }
                </tbody>
            </Table>
        </Row>
    </Container>
}

export default Products;