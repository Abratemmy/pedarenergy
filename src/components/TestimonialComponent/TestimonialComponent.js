import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimony.scss";

export default function TestimonialSwiper() {
    return (
        <section className="tst-section">
            <div className="tst-hero">
                <div className="container">
                    <div className="contactContentTop">
                        {/* <div className="titleStroke">Projects</div> */}
                        <div className="subtitle"><span className="border-box"></span>TESTIMONIALS</div>
                        <h2 className="pageTitle">What People say about us</h2>
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="tst-wrap">
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
                        className="tst-swiper"
                    >
                        <SwiperSlide>
                            <div className="tst-card">
                                <div className="tst-quote"><FaQuoteLeft className="icon" /></div>
                                <div className="tst-text">
                                    Pedar Energy’s independent assessment gave us confidence in contract compliance and project integrity.
                                </div>
                                <div className="tst-name">Regulatory Auditor</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="tst-card">
                                <div className="tst-quote"><FaQuoteLeft className="icon" /></div>
                                <div className="tst-text">
                                    Pedar Energy’s engineering delivery set a new benchmark for reliability and safety.
                                </div>
                                <div className="tst-name">Client, Oil &amp; Gas Operator</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="tst-card">
                                <div className="tst-quote"><FaQuoteLeft className="icon" /></div>
                                <div className="tst-text">
                                    PEGEAR® finally brings PPE that fits everyone on site.
                                </div>
                                <div className="tst-name">HSE Officer, Manufacturing</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
