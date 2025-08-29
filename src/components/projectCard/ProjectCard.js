import React from 'react';
import './ProjectCard.scss';
import { FaLocationDot } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";



function ProjectCard() {
    return (
        <div className='projectCardContainer'>
            <div className='container'>
                <div className="contactContentTop">
                    <div className="titleStroke">Projects</div>
                    <div className="subtitle"><span className="border-box"></span>OUR PROJECTS</div>
                    <h2 className="pageTitle">Some of our recent <span>projects</span></h2>
                </div>

                <div className='slider-container projectCardSlider'>
                    <Swiper
                        modules={[Pagination, Autoplay, A11y]}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },      // phones
                            750: { slidesPerView: 2 },    // tablets
                            1200: { slidesPerView: 3 },   // desktops
                        }}
                        className="projectCard-swiper"
                    >
                        <SwiperSlide>
                            <div className="single-service-style">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img loading="lazy" decoding="async" width="300" height="350"
                                            src='https://res.cloudinary.com/hayteetech/image/upload/v1755644378/pedarEnergy/project3_zivgpg.jpg'
                                            className="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div className="text-holder text-center">
                                    <h5>Solar Hybrid Microgrid </h5>
                                    <div className="location">
                                        <span className="icon"><FaLocationDot /></span>
                                        <span className="text">Akwa-Ibom</span>
                                    </div>
                                    <p>Delivered scalable hybrid solar + storage system, reducing energy costs by 40%.</p>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-service-style">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img loading="lazy" decoding="async" width="300" height="350"
                                            src='https://res.cloudinary.com/hayteetech/image/upload/v1755147223/pedarEnergy/service5_ddowpd.jpg'
                                            className="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div className="text-holder text-center">
                                    <h5>LNG Supply Chain </h5>
                                    <div className="location">
                                        <span className="icon"><FaLocationDot /></span>
                                        <span className="text">Lagos</span>
                                    </div>
                                    <p>Ensured reliable fuel supply through LNG trucking & storage solutions.</p>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-service-style">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img loading="lazy" decoding="async" width="300" height="350"
                                            src='https://res.cloudinary.com/hayteetech/image/upload/v1755644075/pedarEnergy/project2_mbwntf.jpg'
                                            className="attachment-erdunt_360x400 size-erdunt_360x400 wp-post-image" alt=""
                                            sizes="auto, (max-width: 360px) 100vw, 360px"
                                        />
                                    </div>
                                </div>
                                <div className="text-holder text-center">
                                    <h5>Oilfield Camp Support </h5>
                                    <div className="location">
                                        <span className="icon"><FaLocationDot /></span>
                                        <span className="text">Delta</span>
                                    </div>
                                    <p>Managed camp facilities & O&M for workforce of 300+, boosting productivity.</p>

                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard