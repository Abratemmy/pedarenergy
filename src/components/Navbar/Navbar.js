import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { MdOutlineAddIcCall, MdEmail, MdAccessTime } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


function Navbar() {
    const [navbarScroll, setNavbarScroll] = useState(false);
    const changeBackground = () => {
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >= 130) {
            setNavbarScroll(true);
        } else {
            setNavbarScroll(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (click) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [click])

    return (
        <div className="navbarContainer">
            {navbarScroll ?
                <div className="whenScroll">
                    <div className="container" style={{ background: '#fff' }}>
                        <div className="navbarSession">
                            <div className="imageContainer">
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755574137/pedarEnergy/pedarLogo_i2pb1e.png" alt="Pedar energy" />
                            </div>

                            <ul className="nav-menu active">
                                <li className='nav-item'>
                                    <NavLink exact to="/" className="nav-links" >Home</NavLink>
                                </li>

                                <li className='nav-item'>
                                    <NavLink exact to="/about_us" className="nav-links" >About Us</NavLink>
                                </li>

                                <li className='nav-item'>
                                    <NavLink to="/services" className="nav-links" >Services</NavLink>
                                </li>


                                <li className='nav-item'>
                                    <NavLink to="/blogs" className="nav-links">Blogs</NavLink>
                                </li>

                                <li className='nav-item'>
                                    <NavLink to="/contact_us" className="nav-links" >Contact</NavLink>
                                </li>

                                <li className='nav-item'>
                                    <a to="#" className="nav-links" style={{ cursor: 'pointer' }} >Pages + </a>

                                    <div className="dropdown">
                                        <ul className="dropdown-content">
                                            <li>
                                                <NavLink to="/pegear" className="nav-links">PEGEAR®</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/sustainability" className="nav-links">Sustainability</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/project_partnership" className="nav-links">Projects & Partnerships</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/governance_compliance" className="nav-links">Governance & Compliance</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <div className="hamburger" onClick={handleClick} >
                                <FaBars className="hamburgerIcon" />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className=" whenNotScroll">
                    <div className="container">
                        <div className="topNav">
                            <div className="content">
                                <div className="iconContainer"><MdOutlineAddIcCall className="icon" /></div>
                                <div className="text">
                                    <a href="tel:(+234) 807 836 6949">(+234) 807 836 6949</a>
                                </div>
                            </div>

                            <div className="content">
                                <div className="iconContainer"><MdEmail className="icon" /></div>
                                <div className="text">
                                    <a href="maitTo:info@pedarenergy.com">info@pedarenergy.com</a>
                                </div>
                            </div>

                            <div className="content">
                                <div className="iconContainer"><MdAccessTime className="icon" /></div>
                                <div className="text">
                                    Mon to Fri : 9am to 6pm
                                </div>
                            </div>
                        </div>

                        <div className="navbarSession mainNavbar">
                            <div className="imageContainer">
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755574137/pedarEnergy/pedarLogo_i2pb1e.png" alt="Pedar energy" />
                            </div>
                            <div className="menuList">
                                <ul className="nav-menu active">
                                    <li className='nav-item'>
                                        <NavLink exact to="/" className="nav-links">Home</NavLink>
                                    </li>

                                    <li className='nav-item'>
                                        <NavLink exact to="/about_us" className="nav-links">About Us</NavLink>
                                    </li>

                                    <li className='nav-item'>
                                        <NavLink to="/services" className="nav-links">Services</NavLink>
                                    </li>

                                    <li className='nav-item'>
                                        <NavLink to="/blogs" className="nav-links">Blogs</NavLink>
                                    </li>

                                    <li className='nav-item'>
                                        <a to="#" className="nav-links" style={{ cursor: 'pointer' }} >Pages + </a>

                                        <div className="dropdown">
                                            <ul className="dropdown-content">
                                                <li>
                                                    <NavLink to="/pegear" className="nav-links">PEGEAR®</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/sustainability" className="nav-links">Sustainability</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/project_partnership" className="nav-links">Projects & Partnerships</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/governance_compliance" className="nav-links">Governance & Compliance</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                                <div className="hamburger" onClick={handleClick} >
                                    <FaBars className="hamburgerIcon" />
                                </div>

                                <div className="getQuote">
                                    <div className="quoteContent">
                                        <IoLogInOutline className="loginIcon" />
                                        <NavLink to="/contact_us" className="buttonText">Contact Us </NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }

            {/* Overlay */}
            <div className={`overlay ${click ? "show" : ""}`} onClick={handleClick}></div>

            {/* mobile menu */}
            <div className={`mobileMenu ${click ? "show" : ""}`}>
                <div className="closeMobileMenu" onClick={handleClick}>
                    <div className='closeIcon'><IoMdClose className="icon" /></div>
                </div>
                <div className="imageContainer">
                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755574137/pedarEnergy/pedarLogo_i2pb1e.png" alt="Pedar energy" />
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink exact="true" to="/" className="nav-links" onClick={handleClick}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact="true" to="/about_us" className="nav-links" onClick={handleClick}>About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className="nav-links" onClick={handleClick}>Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pegear" className="nav-links" onClick={handleClick}>PEGEAR®</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/sustainability" className="nav-links" onClick={handleClick}>Sustainability</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/project_partnership" className="nav-links" onClick={handleClick}>Projects & Partnerships</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/governance_compliance" className="nav-links" onClick={handleClick}>Governance & Compliance</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact_us" className="nav-links" onClick={handleClick}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar