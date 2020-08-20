import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../components/Slider/Slider';
import ProductList from '../components/ProductList/ProductList';
import { listBanners, listSellingPhones, listSellingLaptops } from '../actions/sellingActions';
import { Spinner, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
    const dispatch = useDispatch();

    const bannerList = useSelector(state => state.bannerList);
    const { banners, error: errorBanner } = bannerList;

    const phoneSellingList = useSelector(state => state.phoneSellingList);
    const { phoneSelling, loading: loadingPhoneSelling } = phoneSellingList;
  
    const laptopSellingList = useSelector(state => state.laptopSellingList);
    const { laptopSelling, loading: loadingLaptopSelling } = laptopSellingList;


    useEffect(() => {
        dispatch(listBanners());

        dispatch(listSellingPhones());

        dispatch(listSellingLaptops());

        return () => {

        };
    }, []);

    return <div className="position-relative">
        <Slider data={banners} error={errorBanner} />
        {
            loadingPhoneSelling === false && phoneSelling ? <ProductList
                data={phoneSelling}
                title="Điện thoại nổi bật"
                categoryProduct="/phone"
            /> : (<Spinner className="loading-center" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>)
        }

        <Container className="mb-3">
            <Link to="/phone/iphone11-pro-max">
                <img
                    width="100%"
                    src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/7/27/637314868050439212_H5.png"
                    alt="Chương trình khuyến mãi"
                    title="Chương trình khuyến mãi"
                />
            </Link>
        </Container>

        {
            loadingLaptopSelling === false && laptopSelling ? <ProductList
                data={laptopSelling}
                title="Laptop bán chạy"
                categoryProduct="/laptop"
            /> : (<Spinner className="loading-center" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>)
        }
    </div>
};

export default HomePage;

