import React, { useState } from "react";
import { Carousel, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const SimpleSlider = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const { data } = props;

    return (
        <Container>
            {props.error ? <div></div> :
                <Carousel className="my-3 bg-white" slide={true} touch={true} pause="hover" interval={3000} activeIndex={index} onSelect={handleSelect}>
                    {data ? data.map(
                        (item) => (
                            <Carousel.Item key={item._id}>
                                <Link to={item.bannerLink}>
                                    <img
                                        className="d-block w-100"
                                        src={item.bannerUrlImg}
                                        alt={item.bannerImgAlt}
                                        title={item.bannerImgTitle}
                                    />
                                </Link>
                            </Carousel.Item>
                        )
                    ) : (<Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
                    }
                </Carousel>
            }
        </Container>
    );
}

export default SimpleSlider;
