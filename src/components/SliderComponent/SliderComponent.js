import React, { useState } from 'react';
import Slider from "react-slick";
import './SliderComponent.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Button from '../Button/Button'


const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow next-arrow"
            onClick={onClick}
        >
            <div className="arrowDiv"><FaArrowRightLong /></div>
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow prev-arrow"
            onClick={onClick}
        >
            <div className="arrowDiv"><FaArrowLeftLong /></div>
        </div>
    );
};
function SliderComponent() {
    const [activeSlide, setActiveSlide] = useState(0);
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (_, next) => setActiveSlide(next),
    };

    return (
        <div className="sliderComponentWrapper">
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="SliderWrapper">
                        <div className="container">
                            <div className="sliderContent">
                                <div
                                    className={`subTopic animate__animated ${activeSlide === 0 ? "animate__fadeInDown animate__delay-2s" : ""
                                        }`}
                                >
                                    <div className="line"></div>Welcome to Pedar Energy
                                </div>
                                <div
                                    className={`topic animate__animated ${activeSlide === 0 ? "animate__fadeInDown animate__delay-1s " : ""
                                        }`}
                                >
                                    Powering Africa’s Energy Future, Safely & Sustainably
                                </div>
                                <div className={`text animate__animated ${activeSlide === 0 ? "animate__fadeInUp animate__delay-2s" : ""
                                    }`}
                                >
                                    Pedar Energy delivers integrated solutions across oil, gas, renewables, and industrial services, ensuring efficiency, compliance, and operational excellence.
                                </div>
                                <div className={`sliderButton animate__animated ${activeSlide === 0 ? "animate__fadeInUp animate__delay-3s" : ""
                                    }`}>
                                    <Button text="Explore Our Services"
                                        buttonLink="/services"
                                    />
                                    <Button text="Partner with us" button2ndDesign
                                        buttonLink="/contact_us"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="SliderWrapper SliderWrapper2">
                        <div className="container">
                            <div className="sliderContent">
                                <div className={`subTopic animate__animated ${activeSlide === 1 ? "animate__fadeInDown animate__delay-2s" : ""
                                    }`}
                                >
                                    <div className="line"></div>Welcome to Pedar Energy
                                </div>
                                <div className={`topic animate__animated ${activeSlide === 1 ? "animate__fadeInDown animate__delay-1s" : ""
                                    }`}
                                >
                                    Powering Africa’s Energy Future, Safely & Sustainably
                                </div>
                                <div className={`text animate__animated ${activeSlide === 1 ? "animate__fadeInUp animate__delay-2s" : ""
                                    }`}
                                >
                                    Pedar Energy delivers integrated solutions across oil, gas, renewables, and industrial services, ensuring efficiency, compliance, and operational excellence.
                                </div>
                                <div className={`sliderButton animate__animated ${activeSlide === 1 ? "animate__fadeInUp animate__delay-3s" : ""
                                    }`}>
                                    <Button text="Explore Our Services"
                                        buttonLink="/services"
                                    />
                                    <Button text="Partner with us" button2ndDesign
                                        buttonLink="/contact_us"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SliderComponent