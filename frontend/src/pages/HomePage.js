import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../components/Slider/Slider';
import ProductSelling from '../components/ProductSelling/ProductSelling';
import { listBanners, listSellingPhones, listSellingLaptops } from '../actions/sellingActions';
import { Spinner, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
    const dispatch = useDispatch();

    const bannerList = useSelector(state => state.bannerList);
    const { banners, error: errorBanner } = bannerList;

    const phoneSellingList = useSelector(state => state.phoneSellingList);
    const { phoneSelling, loading: loadingPhoneSelling, error: errorPhoneSelling } = phoneSellingList;
  
    const laptopSellingList = useSelector(state => state.laptopSellingList);
    const { laptopSelling, loading: loadingLaptopSelling, error: errorLaptopSelling } = laptopSellingList;


    useEffect(() => {
        dispatch(listBanners());

        dispatch(listSellingPhones());

        dispatch(listSellingLaptops());

        return () => {

        };
    }, []);

    return <div>
        <Slider data={banners} error={errorBanner} />
        {
            loadingPhoneSelling === false && phoneSelling ? <ProductSelling
                data={phoneSelling}
                title="Điện thoại nổi bật"
                categoryProduct="/phone"
            /> : (<Spinner animation="border" role="status">
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
            loadingLaptopSelling === false && laptopSelling ? <ProductSelling
                data={laptopSelling}
                title="Laptop bán chạy"
                categoryProduct="/laptop"
            /> : (<Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>)
        }
    </div>
};

export default HomePage;

