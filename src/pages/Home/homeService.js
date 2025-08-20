import React from 'react';
import "./homeService.scss";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import service3Image from "../../Images/service3.jpg";
import service4Image from "../../Images/service4.jpg";
import service5Image from "../../Images/service5.jpg";
import { HashLink } from "react-router-hash-link";



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


function HomeService() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
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
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="homeServiceContainer">
            <div className="container">
                <div className="homeSlider-container">
                    <div class="sec-title style3 with_text text-center">
                        <div class="sub-title">
                            <span class="border-box"></span>
                            <h5>Pedar Energy Services</h5>
                        </div>
                        <h2>Services &amp; Solutions</h2>
                        <div class="text" style={{ paddingBottom: '30px' }}>
                            <p>Working safely ensures Pedar's long-term viability, allowing it to continue providing community support, outstanding employment opportunities, significant <br /> stakeholder value, and reliable and inexpensive transportation fuels that enable modern life in the safest manner possible.</p>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div>
                            <div class="single-service-style">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img loading="lazy" decoding="async" width="360" height="400" src={service3Image}
                                            class="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div class="text-holder text-center">
                                    <h2>Innovative Clean Energy & Gas Solutions</h2>
                                    <p>We provide cleaner, more efficient power solutions tailored for industrial and commercial clients</p>
                                    <div class="readmore-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <HashLink smooth to="/services#cleanEnergy" className="readMoreLink">
                                            Read More
                                        </HashLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="single-service-style">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img loading="lazy" decoding="async" width="360" height="400"
                                            src='https://res.cloudinary.com/hayteetech/image/upload/v1755147224/pedarEnergy/service1_u0ll6l.jpg'
                                            class="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div class="text-holder text-center">
                                    <h2>Comprehensive Engineering & Technical Services</h2>
                                    <p>We deliver end-to-end engineering solutions, from Front-End Engineering Design (FEED) and EPC projects to specialized mechanical, electrical, civil, and instrumentation works.</p>
                                    <div class="readmore-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <HashLink smooth to="/services#engineering" className="readMoreLink">
                                            Read More
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="single-service-style">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img loading="lazy" decoding="async" width="360" height="400"
                                            src='https://res.cloudinary.com/hayteetech/image/upload/v1755492075/pedarEnergy/service10_m42iqv.jpg'
                                            class="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div class="text-holder text-center">
                                    <h2>OEM Partnerships & Equipment Solutions</h2>
                                    <p>Leveraging strong relationships with trusted Original Equipment Manufacturers (OEMs), we provide certified industrial machinery and power equipment, including pumps, compressors, generators, and process systems.</p>
                                    <div class="readmore-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <HashLink smooth to="/services#oemPartnerships" className="readMoreLink">
                                            Read More
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="single-service-style">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img loading="lazy" decoding="async"
                                            width="360" height="400" src={service4Image}
                                            class="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div class="text-holder text-center">
                                    <h2>PEGEAR® – Our Proprietary Nigerian-Market Focused HSE Brand</h2>
                                    <p>PEGEAR® delivers personal protective equipment designed specifically for Nigerian workers and environments with inclusivity at its core</p>
                                    <div class="readmore-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <HashLink smooth to="/services#hseBrand" className="readMoreLink">
                                            Read More
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="single-service-style">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img loading="lazy" decoding="async" width="360"
                                            height="400" src={service5Image}
                                            class="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div class="text-holder text-center">
                                    <h2>Oilfield & Industrial Procurement Excellence</h2>
                                    <p>We handle end-to-end procurement from reputable global and local vendors, ensuring timely delivery of critical spares, materials, and consumables.</p>
                                    <div class="readmore-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <HashLink smooth to="/services#procurement" className="readMoreLink">
                                            Read More
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="single-service-style">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img loading="lazy" decoding="async" width="360" height="400"
                                            src='https://res.cloudinary.com/hayteetech/image/upload/v1755491818/pedarEnergy/service9_alwmaz.jpg'
                                            class="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div class="text-holder text-center">
                                    <h2>Camp Support & Operations & Maintenance (O&M)</h2>
                                    <p>We ensure workforce well-being and operational efficiency through hygienic, nutritious onsite catering, professional camp management and accommodation services, and dependable O&M support designed to maximize facility performance and uptime.</p>
                                    <div class="readmore-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <HashLink smooth to="/services#campSupport" className="readMoreLink">
                                            Read More
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="single-service-style">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img loading="lazy" decoding="async" width="360" height="400"
                                            src='https://res.cloudinary.com/hayteetech/image/upload/v1755147225/pedarEnergy/service6_mwmegt.jpg'
                                            class="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div class="text-holder text-center">
                                    <h2>Environmental & Sustainability Advisory</h2>
                                    <p>We provide expert guidance on environmental management, including waste handling, hazardous spill response, and carbon footprint reduction.</p>
                                    <div class="readmore-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <HashLink smooth to="/services#environmentalAdvisory" className="readMoreLink">
                                            Read More
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HomeService