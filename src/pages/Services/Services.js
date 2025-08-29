import React, { useEffect } from 'react';
import './Services.scss';
import OtherPages from '../../components/OtherPages/OtherPages';
import { useLocation } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import ServiceCard from '../../components/ServiceCard/ServiceCard';

function Services() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const section = document.querySelector(location.hash);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div>
            <OtherPages
                pageName="Services"
            />

            <div className="servicesContainer">
                <div className="">
                    <ServiceCard />
                </div>
                <div className="container">
                    {/* servcie pages description */}
                    <div className="servicesPageDescription">
                        <div className='cleanEnergy' id='cleanEnergy'>
                            <div className="subtitle"><span className="border-box"></span>Our Services</div>
                            <h2 className="pageTitle">Innovative Clean Energy <br />& Gas Solutions</h2>
                            <div className="row">
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <div className="descriptionSession">
                                        <p>
                                            We provide cleaner, more efficient power solutions tailored for industrial and commercial clients, including:
                                        </p>
                                        <ul>
                                            <li><BsDot className='icon' /><span>Gas-to-power plants</span></li>
                                            <li><BsDot className='icon' /><span>LNG and CNG supply and distribution</span></li>
                                            <li><BsDot className='icon' /><span>Renewable energy systems such as solar hybrids and microgrids</span></li>
                                            <li><BsDot className='icon' /><span>Energy storage and smart grid integration</span></li>
                                        </ul>
                                        <p>
                                            From concept to completion, our extensive engineering capabilities cover
                                        </p>

                                        <ul>
                                            <li><BsDot className='icon' /><span>Design, installation, and commissioning of industrial systems</span></li>
                                            <li><BsDot className='icon' /><span>Fabrication of steel structures, skids, and modules</span></li>
                                            <li><BsDot className='icon' /><span>Minor and modular construction for oilfield and industrial facilities</span></li>
                                            <li><BsDot className='icon' /><span>OEM partnerships for quality-assured equipment integration</span></li>
                                        </ul>
                                        <p>Our engineering solutions combine technical expertise with industry-leading quality and safety standards.</p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <div className="imageSession">
                                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755832333/pedarEnergy/service6_jld2vy.jpg" alt="Clean Energy Solutions" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* another service */}
                        <div className='cleanEnergy' id='engineering'>

                            <div className="row g-5">
                                <div className='col-lg-6 col-md-12 col-sm-12 order-lg-2'>
                                    <div className="descriptionSession">
                                        <div className="subtitle"><span className="border-box"></span>Our Services</div>
                                        <h2 className="pageTitle">Comprehensive Engineering <br /> & Technical Services</h2>
                                        <p>
                                            We deliver end-to-end engineering solutions. Our engineering expertise spans
                                        </p>
                                        <ul>
                                            <li><BsDot className='icon' /><span>Front-End Engineering Design (FEED) and EPC services</span></li>
                                            <li><BsDot className='icon' /><span>Mechanical, electrical, civil, and instrumentation works</span></li>
                                            <li><BsDot className='icon' /><span>Asset integrity management and maintenance</span></li>
                                            <li><BsDot className='icon' /><span>Facility modifications and upgrades</span></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 order-lg-1'>
                                    <div className="imageSession">
                                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755490513/pedarEnergy/oil2_qwfzei.jpg" alt="Engineering Services" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* another service */}
                        <div className='cleanEnergy' id='oemPartnerships'>

                            <div className="row">
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <div className="descriptionSession">
                                        <div className="subtitle"><span className="border-box"></span>Our Services</div>
                                        <h2 className="pageTitle">OEM Partnerships & <br />Equipment Solutions</h2>
                                        <p>
                                            Leveraging strong relationships with trusted Original Equipment Manufacturers (OEMs), we provide certified industrial machinery and power equipment, including:
                                        </p>
                                        <ul>
                                            <li><BsDot className='icon' /><span>Certified industrial machinery and power equipment</span></li>
                                            <li><BsDot className='icon' /><span>Pumps, compressors, generators, and process equipment</span></li>
                                            <li><BsDot className='icon' /><span>Full lifecycle support including installation and after-sales service</span></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <div className="imageSession">
                                        <img src='https://res.cloudinary.com/hayteetech/image/upload/v1755832333/pedarEnergy/service7_pmgmwg.jpg' alt="OEM Partnerships" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='cleanEnergy' id='hseBrand'>

                            <div className="row">
                                <div className='col-lg-6 col-md-12 col-sm-12 order-lg-2'>
                                    <div className="descriptionSession">
                                        <div className="subtitle"><span className="border-box"></span>Our Services</div>
                                        <h2 className="pageTitle">PEGEAR® – Our Proprietary Nigerian-Market Focused HSE Brand</h2>
                                        <p>
                                            PEGEAR® delivers personal protective equipment designed specifically for Nigerian workers and environments with inclusivity at its core
                                        </p>
                                        <ul>
                                            <li><BsDot className='icon' /><span>Flame-resistant clothing, helmets, gloves, boots, and eye protection</span></li>
                                            <li><BsDot className='icon' /><span>PPE ergonomically designed for all genders and body types</span></li>
                                            <li><BsDot className='icon' /><span>Compliance with Nigerian and international safety standards</span></li>
                                            <li><BsDot className='icon' /><span>Customized branding options for corporate clients</span></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 order-lg-1'>
                                    <div className="imageSession">
                                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755488803/pedarEnergy/service6_bgbzip.jpg" alt="PEGEAR® HSE Brand" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='cleanEnergy' id='procurement'>

                            <div className="row">
                                <div className='col-lg-6 col-md-12 col-sm-12 '>
                                    <div className="descriptionSession">
                                        <div className="subtitle"><span className="border-box"></span>Our Services</div>
                                        <h2 className="pageTitle">Oilfield & Industrial <br /> Procurement Excellence</h2>
                                        <p>
                                            We handle end-to-end procurement from reputable global and local vendors. Our procurement services include:
                                        </p>
                                        <ul>
                                            <li><BsDot className='icon' /><span>Timely delivery of critical spares, materials, and consumables</span></li>
                                            <li><BsDot className='icon' /><span>Transparent sourcing and competitive pricing</span></li>
                                            <li><BsDot className='icon' /><span>Efficient logistics and last-mile delivery solutions</span></li>
                                            <li><BsDot className='icon' /><span>Adherence to ethical sourcing and modern slavery prevention policies (learn more in our Governance & Compliance section)</span></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 '>
                                    <div className="imageSession">
                                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755832333/pedarEnergy/service8_h00fck.jpg" alt="Procurement Excellence" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='cleanEnergy' id='campSupport'>
                            <div className="row">
                                <div className='col-lg-6 col-md-12 col-sm-12 order-lg-2'>
                                    <div className="descriptionSession">
                                        <div className="subtitle"><span className="border-box"></span>Our Services</div>
                                        <h2 className="pageTitle">Field Catering, Camp Support &<br /> Operations & Maintenance (O&M)</h2>
                                        <p>
                                            We keep your workforce productive and comfortable with:
                                        </p>
                                        <ul>
                                            <li><BsDot className='icon' /><span>Hygienic, nutritious onsite catering</span></li>
                                            <li><BsDot className='icon' /><span>Camp management and accommodation services</span></li>
                                            <li><BsDot className='icon' /><span>Reliable O&M support to maximize facility uptime</span></li>

                                        </ul>

                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 order-lg-1'>
                                    <div className="imageSession">
                                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755490127/pedarEnergy/campsupport_foxhrd.jpg" alt="Field Catering and Camp Support" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='cleanEnergy' id='environmentalAdvisory'>
                            <div className="subtitle"><span className="border-box"></span>Our Services</div>
                            <h2 className="pageTitle">Environmental, Local Content <br />& Sustainability Advisory</h2>
                            <div className="row">
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <div className="descriptionSession">
                                        <p>
                                            We provide expert guidance on environmental management, including:
                                        </p>
                                        <ul>
                                            <li><BsDot className='icon' /><span>Waste management and hazardous spill response</span></li>
                                            <li><BsDot className='icon' /><span>Carbon footprint assessments</span></li>
                                            <li><BsDot className='icon' /><span>ESG compliance consulting and sustainability reporting</span></li>
                                            <li><BsDot className='icon' /><span>Local Content Advisory and Assessment Program Management</span></li>
                                            <li><BsDot className='icon' /><span>Embedding ethical governance and social responsibility in all projects</span></li>

                                        </ul>

                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <div className="imageSession">
                                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755489925/pedarEnergy/IMG_9785_va0z4j.jpg" alt="Environmental Advisory" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='cleanEnergy' id='independentPA'>
                            <div className="row">
                                <div className='col-lg-6 col-md-12 col-sm-12 order-lg-2'>
                                    <div className="descriptionSession">
                                        <div className="subtitle"><span className="border-box"></span>Our Services</div>
                                        <h2 className="pageTitle">Independent Person <br />Assessment (IPA)</h2>
                                        <p>
                                            Pedar Energy provides independent third-party assurance for energy and infrastructure projects, ensuring compliance, transparency, and trust:
                                        </p>
                                        <ul>
                                            <li><BsDot className='icon' /><span>Independent review of engineering designs & procurement</span></li>
                                            <li><BsDot className='icon' /><span>Risk assessments, due diligence & quality audits</span></li>
                                            <li><BsDot className='icon' /><span>Contract compliance verification (aligned with Nigerian regulations & international standards)</span></li>
                                            <li><BsDot className='icon' /><span>Neutral evaluations to satisfy regulators, investors & stakeholders</span></li>

                                        </ul>

                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 order-lg-1'>
                                    <div className="imageSession">
                                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755832534/pedarEnergy/service9_xuiyat.jpg" alt="Field Catering and Camp Support" className='img-fluid' />
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

export default Services