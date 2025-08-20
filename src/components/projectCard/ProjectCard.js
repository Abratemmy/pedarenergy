import React from 'react';
import './ProjectCard.scss';
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow next-arrow"
            onClick={onClick}
        >
            <div className="arrowDiv"><IoIosArrowForward className="icon" /></div>
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
            <div className="arrowDiv"><IoIosArrowBack className="icon" /></div>
        </div>
    );
};

function ProjectCard() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='projectCardContainer'>
            <div className='container'>
                <div className="contactContentTop">
                    <div className="titleStroke">Projects</div>
                    <div className="subtitle"><span className="border-box"></span>OUR PROJECTS</div>
                    <h2 className="pageTitle">Some of our recent projects</h2>
                </div>

                <div className='projectCardSlider'>
                    <Slider {...settings}>
                        <div>
                            <div class="single-service-style">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img loading="lazy" decoding="async" width="300" height="300"
                                            src='https://res.cloudinary.com/hayteetech/image/upload/v1755644378/pedarEnergy/project3_zivgpg.jpg'
                                            class="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div class="text-holder text-center">
                                    <h5>Solar Hybrid Microgrid </h5>
                                    <div className="location">
                                        <span className="icon"><FaLocationDot /></span>
                                        <span className="text">Akwa-Ibom</span>
                                    </div>
                                    <p>Delivered scalable hybrid solar + storage system, reducing energy costs by 40%.</p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="single-service-style">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img loading="lazy" decoding="async" width="300" height="300"
                                            src='https://res.cloudinary.com/hayteetech/image/upload/v1755147223/pedarEnergy/service5_ddowpd.jpg'
                                            class="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div class="text-holder text-center">
                                    <h5>LNG Supply Chain </h5>
                                    <div className="location">
                                        <span className="icon"><FaLocationDot /></span>
                                        <span className="text">Lagos</span>
                                    </div>
                                    <p>Ensured reliable fuel supply through LNG trucking & storage solutions.</p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="single-service-style">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img loading="lazy" decoding="async" width="300" height="300"
                                            src='https://res.cloudinary.com/hayteetech/image/upload/v1755644075/pedarEnergy/project2_mbwntf.jpg'
                                            class="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div class="text-holder text-center">
                                    <h5>Oilfield Camp Support </h5>
                                    <div className="location">
                                        <span className="icon"><FaLocationDot /></span>
                                        <span className="text">Delta</span>
                                    </div>
                                    <p>Managed camp facilities & O&M for workforce of 300+, boosting productivity.</p>

                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard