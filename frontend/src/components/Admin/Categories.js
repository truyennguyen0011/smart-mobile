import React, { useEffect } from 'react';
import { Container, Row, Table, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { listCategories } from '../../actions/categoryActions';

const Categories = () => {
    const categoryList = useSelector(state => state.categoryList);
    const { categories, error, loading } = categoryList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCategories());

        return () => {

        };
    }, []);

    console.log(categories);

    return <Container>
        <Row className="py-3">
            <Col><h5>Quản lý danh mục sản phẩm</h5></Col>
            <Col align="right">
                <Button >Thêm danh mục sản phẩm</Button>
            </Col>
        </Row>
        <Row xl={12}>
            <Table responsive="sm" size="sm" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Danh mục</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories ? categories.map((item, i) =>
                            <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td>{item._id}</td>
                                <td>{item.categoryName}</td>
                                <td align="center">
                                    <div>
                                        <Button className="mt-1 mr-2">Sửa</Button>
                                        <Button variant="danger" className="mt-1">Xóa</Button>
                                    </div>
                                </td>
                            </tr>
                        ) : <tr>
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

export default Categories;