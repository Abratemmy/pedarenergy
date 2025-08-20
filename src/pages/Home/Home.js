import React from 'react';
import './Home.scss';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import { PiWindmillDuotone } from "react-icons/pi";
import { MdPhoneCallback } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaSolarPanel, FaBalanceScale, FaThumbsUp, FaHandPointDown } from "react-icons/fa";
import { GiWaterFountain, GiGlobe, GiArrowWings } from "react-icons/gi";
import homeWorkforceImage from '../../Images/about-image2.jpg';
import Button from '../../components/Button/Button';
import { TbTopologyStar3 } from "react-icons/tb";
import Faq from '../../components/Faq/Faq';
import faqImage from '../../Images/faq-style2-image.jpg';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import CounterComponent from '../../components/Counter/CounterComponent';
import ProjectCard from '../../components/projectCard/ProjectCard';
import TestimonialComponent from '../../components/TestimonialComponent/TestimonialComponent';
import BlogCard from '../../components/Blog/BlogCard';



function Home() {
    return (
        <div>
            <SliderComponent />
            <div className="homeContainerSession1">
                <div className="container">
                    <div className="row gy-2">
                        <div className="col-md-6 col-xl-3 animate__fadeInDown animate__delay-100ms">
                            <div className="single-features-style">
                                <div class="icon"><FaSolarPanel className="cardIcon" /></div>
                                <div class="inner">
                                    <div class="counting">
                                        <h2>01</h2>
                                    </div>
                                    <div class="text">
                                        <h3>20+ years combined industry expertise</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3 wow fadeInDown animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "100ms", animationName: "fadeInDown" }}>
                            <div class="single-features-style single-features-style2">
                                <div class="icon"><GiWaterFountain className="cardIcon" /></div>
                                <div class="inner">
                                    <div class="counting">
                                        <h2>02</h2>
                                    </div>
                                    <div class="text">
                                        <h3>Multi-sector energy solutions (Oil, Gas, Renewables)</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 wow fadeInDown animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "100ms", animationName: "fadeInDown" }}>
                            <div class="single-features-style">
                                <div class="icon"><PiWindmillDuotone className="cardIcon" /></div>
                                <div class="inner">
                                    <div class="counting">
                                        <h2>03</h2>
                                    </div>
                                    <div class="text">
                                        <h3>Trusted OEM & EPC partnerships</h3>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 wow fadeInDown animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "100ms", animationName: "fadeInDown" }}>
                            <div class="single-features-style single-features-style2">
                                <div class="icon"><PiWindmillDuotone className="cardIcon" /></div>
                                <div class="inner">
                                    <div class="counting">
                                        <h2>04</h2>
                                    </div>
                                    <div class="text">
                                        <h3>ESG, compliance & HSE at the core</h3>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* another section here. this is the introduction part */}
            <div className="homeAboutSession">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-xl-6">
                            <div className="imageSession">
                                <div className="firstImage">
                                    <img src='https://res.cloudinary.com/hayteetech/image/upload/v1755580505/pedarEnergy/about1_zdcsoj.jpg' alt="Pedar" />
                                </div>


                                <div className="imageSession2">
                                    <div className="image">
                                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755581053/pedarEnergy/service10_jtcpbn.jpg" alt="Pedar" />
                                    </div>
                                    <div className="image image2">
                                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755581053/pedarEnergy/service2_ixpqya.jpg" alt="Pedar" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="home-about-style">
                                <div className="titleStroke">About</div>
                                <div className="subtitle"><span className="border-box"></span>WHO WE ARE</div>
                                <h2>We are the best <span>Energy Company</span></h2>
                                <div className="content">
                                    Pedar Energy is a Nigerian energy and industrial services company delivering safe, sustainable, and innovative solutions. Our expertise spans engineering, procurement, clean energy, workforce support, and compliance, empowering industries and communities alike.
                                </div>

                                <div className="homeAboutButton" style={{ marginTop: '20px' }}>
                                    <Button
                                        text="Learn More About Us"
                                        buttonLink="/about_us"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* another section here */}
            <div className="homeServicesContainer" >
                <ServiceCard
                    inHomePage={true}
                />
            </div>

            {/* another section here for the counter */}
            <CounterComponent />

            {/* another section here elementor-Container */}

            <div className="elementorContainer">
                <div className="container">
                    <div className="elementorContent">
                        <div className="left">
                            <div class="title-box">
                                <div class="sec-title style2">
                                    <div class="sub-title">
                                        <span class="border-box"></span>
                                        <h5>Workers Protected with PEGEAR®</h5>
                                    </div>

                                    <h2>PEGEAR® – Safety That Performs</h2>
                                    <div className='text'>
                                        Ergonomic, inclusive, and compliant PPE designed for Nigerian environments. <br />Flame-resistant apparel, helmets, gloves, boots, and corporate-branded options
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right" >
                            <Button
                                text="Explore PEGEAR®"
                                button2ndDesign
                                buttonLink="/"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* project section */}
            <div className="homeProjectContainer">
                <ProjectCard />
            </div>

            {/* Testimony section */}
            <div className='homeTestimonyContainer'>
                <TestimonialComponent />
            </div>

            {/* blog card here */}
            <div>
                <BlogCard />
            </div>

            {/* why choose us container */}
            <div className="whyChooseUSContainerWrapper">
                <div className="whyChooseUsContainer">
                    <div className="container">

                        <div class="project-style4_top">
                            <div class="sec-title style2 with_text">
                                <div class="sub-title">
                                    <span class="border-box"></span>
                                    <h5>Governance & Compliance </h5>
                                </div>

                                <h2>Our Commitment to Ethical Governance</h2>
                            </div>

                            <div class="text">
                                <p>At Pedar Energy Limited, good governance is a core pillar of our business. We are committed to ethical practices, compliance with all applicable laws, and the promotion of human rights throughout our operations and supply chain.</p>
                                <div className="download">
                                    Download here <span><FaHandPointDown className='icon' /></span>
                                </div>
                                <Button
                                    text="Download"
                                    buttonLink="/about_us"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="whychooseUs">
                    <div className="content">
                        <div className="text">
                            <div className="iconImage"><FaThumbsUp className='icon' /></div>
                            <p>Modern Slavery & Ethical Sourcing Policies </p>
                        </div>
                        <div className="text">
                            <div className="iconImage"><FaThumbsUp className='icon' /></div>
                            <p>Environmental Responsibility & ESG Reporting </p>
                        </div>
                        <div className="text">
                            <div className="iconImage"><FaThumbsUp className='icon' /></div>
                            <p>Transparent Contracting & Vendor Oversight</p>
                        </div>
                        <div className="text">
                            <div className="iconImage"><FaThumbsUp className='icon' /></div>
                            <p>Independent Person Assessment (IPA) ensures compliance, objectivity, and trust in projects</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* another section here */}
            {/* <div className="homeWorkforceContainer">
                <div className="container">
                    <div class="row gy-5">
                        <div class="col-xl-5">
                            <div class="about-style5-image-box">
                                <img decoding="async" src={homeWorkforceImage} alt="Awesome Image" />
                            </div>
                        </div>

                        <div class="col-xl-7">
                            <div class="about-style5-content-box text-right-rtl">
                                <div class="sec-title with_text">
                                    <div class="sub-title">
                                        <span class="border-box"></span>
                                        <h5>The Industry Leaders In Energy Production</h5>
                                    </div>
                                    <h2>Join The New Innovation With<br /> Technically Workforce</h2>
                                    <div class="text">
                                        <p>Our organizational culture's basis establishes high expectations for both delivery and performance outcomes accomplished via innovation and customer focus.  We concentrate on "how" we do our work as much as the results of "what" we do</p>
                                    </div>
                                </div>
                                <div class="inner-content">
                                    <ul>
                                        <li>
                                            <div class="inner">
                                                <span class="icon1"><TbTopologyStar3 className="icon" /></span>
                                            </div>
                                            <div class="text">
                                                <h3>Collaborative</h3>
                                                <p>We collaborate closely with our partners and peers, combining our abilities to achieve mutually beneficial outcomes.</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="inner">
                                                <span class="icon1"><FaBalanceScale className="icon" /></span>
                                            </div>
                                            <div class="text">
                                                <h3>Efficient</h3>
                                                <p>We are a results-oriented organization committed to maximizing value for our employees and community.</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <div class="inner">
                                                <span class="icon1"><GiGlobe className="icon" /></span>
                                            </div>
                                            <div class="text">
                                                <h3>Progressive</h3>
                                                <p>Keep our company at the forefront of the global energy market, we cultivate the  spirit of innovation.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="inner">
                                                <span class="icon1"><GiArrowWings className="icon" /></span>
                                            </div>
                                            <div class="text">
                                                <h3>Respectful</h3>
                                                <p>We promote a culture of inclusion and mutual respect, and we adhere to the highest professional and ethical .</p>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div> */}

            {/* home faq section */}
            <div className="homeFaqSection">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-xl-7">
                            <div class="sec-title style3 with_text">
                                <div class="sub-title clr2">
                                    <span class="border-box"></span>
                                    <h5>Pedar Energy Services</h5>
                                </div>
                                <h2>General Questions</h2>
                            </div>

                            <Faq />

                        </div>

                        <div className="col-xl-5">

                            <div className="faq-style2-image-box">
                                <div className="inner">
                                    <img decoding="async"
                                        src='https://res.cloudinary.com/hayteetech/image/upload/v1755580505/pedarEnergy/about1_zdcsoj.jpg'
                                        alt="AwesomeImage"
                                    />
                                </div>
                                <div className="box1">
                                    <div className="inner-border" ></div>
                                </div>
                                <div className="phone_number">
                                    <div className="plus_icon"><FaPlus className="icon" /></div>
                                    <div className="outer-box">
                                        <div className="icon1">
                                            <MdPhoneCallback className="icon" />
                                        </div>
                                        <div class="text">
                                            <p>Call us for a Project Quote</p>
                                            <h3><a href="tel:(+234) 807 836 6949">(+234) 807 836 6949</a></h3>                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Home