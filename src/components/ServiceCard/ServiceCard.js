import React from 'react'
import './ServiceCard.scss';
import { GiEnergyTank, GiTechnoHeart, GiTeslaCoil, GiFluffyTrefoil, GiLevelFourAdvanced } from "react-icons/gi";
import { AiOutlineApartment } from "react-icons/ai";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { HashLink } from "react-router-hash-link";
import { FaUsersViewfinder } from "react-icons/fa6";


function ServiceCard({ inHomePage = false }) {
    return (
        <div className='ServiceCardContainer'>
            <div className="container">
                <div className="contactContentTop">
                    <div className="titleStroke">Services</div>
                    <div className="subtitle"><span className="border-box"></span>OUR SERVICES</div>
                    <h2 className="pageTitle">We provide best Services</h2>
                    <p>Comprehensive solutions for energy, industrial, and governance challenges.</p>
                </div>
                <div className='row g-4' style={{ margin: '50px 0px 20px' }}>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='servicesCard'>
                            <div className="content">
                                <div className="cardIcon">
                                    <GiEnergyTank className='icon' />
                                </div>
                                <div className="cardTitle">Innovative Clean Energy & Gas Solutions</div>
                                <div className='cardDescription'>
                                    We provide cleaner, more efficient power solutions tailored for industrial and commercial clients
                                </div>

                                <div className='LearnMore'>
                                    {
                                        inHomePage ?
                                            <HashLink smooth to="/services#cleanEnergy">
                                                Read More
                                            </HashLink>
                                            :
                                            <a href="#cleanEnergy">Learn More</a>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='servicesCard servicesCard2'>
                            <div className="content">
                                <div className="cardIcon">
                                    <GiTechnoHeart className='icon' />
                                </div>
                                <div className="cardTitle">Comprehensive Engineering & Technical Services</div>
                                <div className='cardDescription'>
                                    We deliver end-to-end engineering solutions, from Front-End Engineering Design (FEED) and EPC projects to specialized mechanical, electrical, civil, and instrumentation works.
                                </div>

                                <div className='LearnMore'>
                                    {
                                        inHomePage ?
                                            <HashLink smooth to="/services#engineering">
                                                Read More
                                            </HashLink>
                                            :
                                            <a href="#engineering">Learn More </a>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='servicesCard '>
                            <div className="content">
                                <div className="cardIcon">
                                    <AiOutlineApartment className='icon' />
                                </div>
                                <div className="cardTitle">OEM Partnerships & Equipment Solutions</div>
                                <div className='cardDescription'>
                                    Leveraging strong relationships with trusted Original Equipment Manufacturers (OEMs), we provide certified industrial machinery and power equipment, including pumps, compressors, generators, and process systems.
                                </div>

                                <div className='LearnMore'>
                                    {
                                        inHomePage ?
                                            <HashLink smooth to="/services#oemPartnerships">
                                                Read More
                                            </HashLink>
                                            :
                                            <a href="#oemPartnerships"> Learn More </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='servicesCard servicesCard2'>
                            <div className="content">
                                <div className="cardIcon">
                                    <PiBuildingApartmentFill className='icon' />
                                </div>
                                <div className="cardTitle">PEGEAR® – Our Proprietary Nigerian-Market Focused HSE Brand</div>
                                <div className='cardDescription'>
                                    PEGEAR® delivers personal protective equipment designed specifically for Nigerian workers and environments with inclusivity at its core
                                </div>

                                <div className='LearnMore'>
                                    {
                                        inHomePage ?
                                            <HashLink smooth to="/services#hseBrand">
                                                Read More
                                            </HashLink>
                                            :
                                            <a href="#hseBrand"> Learn More</a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='servicesCard '>
                            <div className="content">
                                <div className="cardIcon">
                                    <GiTeslaCoil className='icon' />
                                </div>
                                <div className="cardTitle">Oilfield & Industrial Procurement Excellence</div>
                                <div className='cardDescription'>
                                    We handle end-to-end procurement from reputable global and local vendors, ensuring timely delivery of critical spares, materials, and consumables.
                                </div>

                                <div className='LearnMore'>
                                    {
                                        inHomePage ?
                                            <HashLink smooth to="/services#procurement">
                                                Read More
                                            </HashLink>
                                            :
                                            <a href="#procurement"> Learn More</a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='servicesCard servicesCard2'>
                            <div className="content">
                                <div className="cardIcon">
                                    <GiFluffyTrefoil className='icon' />
                                </div>
                                <div className="cardTitle">Field Catering, Camp Support & Operations & Maintenance (O&M)</div>
                                <div className='cardDescription'>
                                    We ensure workforce well-being and operational efficiency through hygienic, nutritious onsite catering, professional camp management and accommodation services, and dependable O&M support designed to maximize facility performance and uptime.
                                </div>

                                <div className='LearnMore'>
                                    {
                                        inHomePage ?
                                            <HashLink smooth to="/services#campSupport">
                                                Read More
                                            </HashLink>
                                            :
                                            <a href="#campSupport">Learn More</a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='servicesCard '>
                            <div className="content">
                                <div className="cardIcon">
                                    <GiLevelFourAdvanced className='icon' />
                                </div>
                                <div className="cardTitle">Environmental, Local Content & Sustainability Advisory</div>
                                <div className='cardDescription'>
                                    We provide expert guidance on environmental management, including waste handling, hazardous spill response, and carbon footprint reduction.
                                </div>

                                <div className='LearnMore'>
                                    {
                                        inHomePage ?
                                            <HashLink smooth to="/services#environmentalAdvisory">
                                                Read More
                                            </HashLink>
                                            :
                                            <a href="#environmentalAdvisory">Learn More</a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='servicesCard servicesCard2'>
                            <div className="content">
                                <div className="cardIcon">
                                    <FaUsersViewfinder className='icon' />
                                </div>
                                <div className="cardTitle">Independent Person Assessment (IPA) </div>
                                <div className='cardDescription'>
                                    Impartial verification of project progress, compliance, risk management, contract performance, and stakeholder reporting.
                                </div>

                                <div className='LearnMore'>
                                    {
                                        inHomePage ?
                                            <HashLink smooth to="/services#independentPA">
                                                Read More
                                            </HashLink>
                                            :
                                            <a href="#independentPA">Learn More</a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServiceCard