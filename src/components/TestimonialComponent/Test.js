import React from 'react';
import './Testimony.scss';
import { FaQuoteLeft } from "react-icons/fa6";
import Slider from "react-slick";

function TestimonialComponent() {
    const testimonySettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true

                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="testimonialComponent">
            <div className="testimonialComponentWrapper">
                <div className="container">
                    <div className="contactContentTop">
                        {/* <div className="titleStroke">Projects</div> */}
                        <div className="subtitle"><span className="border-box"></span>TESTIMONIALS</div>
                        <h2 className="pageTitle">What People says about us</h2>
                    </div>
                </div>
            </div>

            <div className="sliderPalava">
                <div className="container">
                    <Slider {...testimonySettings} className='testimonialSlider'>
                        <div className="content">
                            <div className="testimonyIcon">
                                <FaQuoteLeft className='icon' />
                            </div>

                            <div className='testimonyText'>
                                Pedar Energy’s independent assessment gave us confidence in contract compliance and project integrity.
                            </div>
                            <div className="name">
                                Regulatory Auditor
                            </div>
                        </div>

                        <div className="content">
                            <div className="testimonyIcon">
                                <FaQuoteLeft className='icon' />
                            </div>

                            <div className='testimonyText'>
                                Pedar Energy’s engineering delivery set a new benchmark for reliability and safety.
                            </div>
                            <div className="name">
                                Client, Oil & Gas Operator
                            </div>
                        </div>

                        <div className="content">
                            <div className="testimonyIcon">
                                <FaQuoteLeft className='icon' />
                            </div>

                            <div className='testimonyText'>
                                PEGEAR® finally brings PPE that fits everyone on site.
                            </div>
                            <div className="name">
                                HSE Officer, Manufacturing
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default TestimonialComponent