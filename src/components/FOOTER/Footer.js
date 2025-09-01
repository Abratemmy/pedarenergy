import React from 'react';
import './Footer.scss';
import { BsDot } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import { MdOutlineAddIcCall, MdMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

function Footer() {
    return (
        <div className="FooterContainer">
            <div className="container">
                <div className="row g-1 footer-row">
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="image">
                                <img src='https://res.cloudinary.com/hayteetech/image/upload/v1755574137/pedarEnergy/pedarLogo_i2pb1e.png' alt="Pedarene Logo" />
                            </div>
                            <div className="text" style={{ padding: '10px 0px' }}>Pedar Energy Limited is a trusted Nigerian energy services provider specializing in integrated solutions for the oil & gas, power, and industrial sectors.  </div>
                            <div className="footerCall" style={{ padding: '20px 0px 10px' }}>
                                <MdMessage className="call" />
                                <div className="footer-title">Support
                                    <span> <a href="mailTo:info@pedarenergy.com">info@pedarenergy.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="footer-title">Our Services</div>
                            <div className="footerLinkArea">
                                <div className="footerLink">
                                    <BsDot className='icon' /><HashLink smooth to="/services#cleanEnergy" className="footer-link">Clean Energy & Gas</HashLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><HashLink smooth to="/services#environmentalAdvisory" className="footer-link">Env. & Sustainability</HashLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><HashLink smooth to="/services#engineering" className="footer-link">Eng. & Tech. Services</HashLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><HashLink smooth to="/services#oemPartnerships" className="footer-link">OEM & Equipment</HashLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><HashLink smooth to="/services#procurement" className="footer-link">Oilfield & Industrial</HashLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><HashLink smooth to="/services#campSupport" className="footer-link">Camp Ops & Maintenance </HashLink>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="footer-title">Quick links</div>
                            <div className="footerLinkArea">
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/about_us" className="footer-link">About Us</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/pegear" className="footer-link">PEGEAR®</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/contact_us" className="footer-link">Contact</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/sustainability" className="footer-link">Sustainability</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/governance_compliance" className="footer-link">Governance &amp; Compliance</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="footer-title">MAKE an Appointment</div>
                            <div className="text">
                                Getting an accurate diagnosis can be one of the most impactful experiences that you can have.
                            </div>
                            <div className="footerCallArea">
                                <div className="footerCall">
                                    <MdOutlineAddIcCall className="call" />
                                    <div className="footer-title">Need a Consultation?
                                        <span>(+234) 807 836 6949 </span>
                                    </div>
                                </div>

                                <div className="footerCall">
                                    <FaLocationDot className="call" />
                                    <div className="footer-title">Office
                                        <span> 9 Anifowoshe Street, Victoria Island Lagos</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="copyrightContainer">
                    <div className='copyright'>&copy;copyright, all right reserved {(new Date().getFullYear())} </div>
                </div>
            </div>
        </div>
    )
}

export default Footer