import React from 'react'
import OtherPages from '../../components/OtherPages/OtherPages';
import { TbReplaceOff } from "react-icons/tb";
import { MdOutlineHealing, MdAttractions } from "react-icons/md";
import Button from '../../components/Button/Button';
import DownloadFile from '../../components/DownloadFile/DownloadFile';

function GCompliance() {
    return (
        <div>
            <OtherPages
                pageName="Compliance"
            />

            <div className='hseContainer'>
                <div className="container">
                    <div className="contactContentTop">
                        <div className="titleStroke">G & S</div>
                        <div className="subtitle"><span className="border-box"></span>Governance & Compliance</div>
                        <h2 className="pageTitle">Every project meets standards and <span>regulatory frameworks.</span></h2>
                    </div>

                    <div className="hseContent">
                        <div className='title'>
                            Upholding Integrity, Transparency, and Responsibility
                        </div>

                        <div className="text">
                            At Pedar Energy Limited, good governance is a core pillar of our business. We are committed to ethical practices, compliance with all applicable laws, and the promotion of human rights throughout our operations and supply chain.
                        </div>

                        <div className='title'>Modern Slavery & Human Trafficking Policy</div>

                        <div className="text">
                            Pedar Energy Limited has a zero-tolerance approach to any form of modern slavery, forced labor, or human trafficking. We actively work to identify, prevent, and mitigate these risks within our operations and supply chains.
                        </div>

                        <div className="text">
                            Our commitments include:
                        </div>

                        <ul className="advantagesList">
                            <li><span>Conducting due diligence and risk assessments on suppliers and contractors.</span></li>
                            <li><span>Including anti-slavery clauses in all contracts</span></li>
                            <li><span>Providing employee training on identifying and reporting concerns.</span></li>
                            <li><span>Encouraging transparency and ethical conduct at all levels.</span></li>
                        </ul>

                        <div className='title'>Anti-Corruption & Bribery Policy</div>
                        <div className="text">
                            We strictly prohibit bribery and corruption in any form. All employees and partners must adhere to ethical standards, with clear reporting mechanisms for suspected violations.
                        </div>

                        <div className="title">
                            Code of Conduct
                        </div>

                        <div className='text'>
                            Our code sets out the standards of behaviour expected of all employees and partners, fostering a respectful, safe, and inclusive workplace.
                        </div>

                    </div>

                    <div className='hseCardContainer'>
                        <div className="row">
                            <div className='col-md-6 col-lg-4'>
                                <div className="policyCard">
                                    <div className='content'>
                                        <div className='policyIcon'><TbReplaceOff className='icon' /></div>
                                        <div className='title'>Environmental Policy</div>
                                        <div className='text'>
                                            We commit to minimizing our environmental footprint by adhering to all regulations and pursuing sustainable practices across all operations.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-4'>
                                <div className="policyCard policyCardActive">
                                    <div className='content'>
                                        <div className='policyIcon'><MdOutlineHealing className='icon' /></div>
                                        <div className='title'>Health &amp; Safety Policy</div>
                                        <div className='text'>
                                            We prioritize the health and safety of our workforce, contractors, and communities with rigorous protocols and continuous improvement.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-4'>
                                <div className="policyCard">
                                    <div className='content'>
                                        <div className='policyIcon'><MdAttractions className='icon' /></div>
                                        <div className='title'>Data Protection & Privacy</div>
                                        <div className='text'>
                                            We respect the privacy of our stakeholders and protect personal data in compliance with relevant laws and regulations.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="hseContentDownload">
                    <div className='container'>
                        <div className='downloadContent'>
                            <div className="left">
                                <div className='title'>
                                    Transparency & Accessibility
                                </div>

                                <div className="text">
                                    All governance policies are publicly available and regularly reviewed to ensure alignment with evolving best practices. Download our full governance documents here:
                                </div>
                            </div>
                            <div className="right">
                                <div className="download">
                                    <span>
                                        <DownloadFile
                                            filePath="/documents/Modern-Slavery-Policy.pdf"
                                            fileName="Modern Slavery Policy.pdf"
                                        >
                                            Modern Slavery Policy.pdf 
                                        </DownloadFile>
                                    </span>
                                </div>
                                <div className="download">
                                    <span>
                                        <DownloadFile
                                            filePath="/documents/Code-of-Conduct.pdf"
                                            fileName="Code of Conduct.pdf"
                                        >
                                            Code of Conduct.pdf
                                        </DownloadFile>
                                    </span>
                                </div>
                                <div className="download">
                                    <span>
                                        <DownloadFile
                                            filePath="/documents/Antibribery-policy.pdf"
                                            fileName="Antibribery policy.pdf"
                                        >
                                            Antibribery policy.pdf
                                        </DownloadFile>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GCompliance