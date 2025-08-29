import React from 'react';
import './ProjectPartner.scss';
import OtherPages from '../../components/OtherPages/OtherPages';
import ProjectCard from '../../components/projectCard/ProjectCard';

function ProjectPartner() {
    return (
        <div>
            <OtherPages
                pageName="Projects"
            />

            <div className='projectContainer'>
                <div className="container">
                    <div className="contactContentTop">
                        <div className="titleStroke">P & P</div>
                        <div className="subtitle"><span className="border-box"></span>Projects & Partnerships</div>
                        <h2 className="pageTitle">From concept to completion, we partner to <span>deliver excellence.</span></h2>
                    </div>

                    <div className='projectContent'>
                        <div className="text">We proudly partner with leading operators and contractors across Africa, delivering projects that prioritize safety, quality, sustainability, and governance.</div>

                        <div className="text">Our strong OEM relationships ensure clients receive certified equipment and superior technical support.</div>

                        <div className="title">
                            Delivering Excellence Through Strategic Collaboration
                        </div>

                        <div className="text">
                            At Pedar Energy Limited, we believe that the most successful projects are built on strong partnerships and a shared commitment to quality, safety, and innovation. Over the years, we have collaborated with leading operators, contractors, original equipment manufacturers (OEMs), and local communities to deliver impactful energy and industrial projects across Nigeria and Africa.
                        </div>

                        <div className="title">
                            Our Project Portfolio
                        </div>

                        <div className="text">
                            We have extensive experience executing projects across multiple sectors including oil & gas, power generation, renewable energy, infrastructure, and industrial services. Our project approach focuses on delivering measurable value, maintaining strict safety standards, and fostering sustainable outcomes.
                        </div>

                        <div className='title'>
                            Key Project Types:
                        </div>
                        <ul>
                            <li>Engineering, Procurement & Construction (EPC) for energy infrastructure</li>
                            <li>Gas-to-Power and Clean Energy Deployment</li>
                            <li>Field Operations Support including catering and camp management</li>
                            <li>Equipment installation, commissioning, and maintenance</li>
                            <li>Environmental management and waste remediation</li>
                            <li>Workforce staffing and technical manpower supply</li>
                        </ul>

                        {/* project section */}
                        <ProjectCard />

                        <div className='title' style={{ paddingTop: '30px' }}>
                            Notable Project Highlights
                        </div>
                        <ul>
                            <li><span>Gas-to-Power Plant Installation: </span>Delivered end-to-end engineering and equipment supply for a mid-scale gas-fired power facility supporting Nigeria’s national grid.</li>
                            <li><span>PEGEAR® PPE Rollout: </span>Supplied and trained over 1,000 field workers across multiple oilfield projects with gender-inclusive, Nigerian-market tailored PPE.</li>
                            <li><span>Renewable Energy Microgrid: </span>Commissioned solar hybrid systems in remote communities to provide reliable, sustainable electricity access.</li>
                            <li><span>Major OEM Equipment Deployment: </span>Partnered with leading OEMs to supply and maintain pumps, compressors, and generators for key industrial clients.</li>
                            <li><span>Comprehensive Environmental Management: </span>Led hazardous waste cleanup and environmental monitoring on a multi-site industrial complex, achieving regulatory compliance ahead of schedule.</li>

                        </ul>

                        <div className='title'>
                            Our Partnership Philosophy
                        </div>

                        <div className='text'>
                            We strive to build long-term, trust-based relationships with every client and partner. Our core principles include:
                        </div>
                        <ul>
                            <li><span>Collaborative Planning: </span>Engaging all stakeholders early to ensure alignment on project goals and deliverables.</li>
                            <li><span>Quality & Compliance: </span>Adhering to local and international standards to deliver safe, reliable, and regulatory-compliant solutions.</li>
                            <li><span>Innovation & Continuous Improvement: </span>Applying the latest technologies and best practices to improve efficiency and sustainability</li>
                            <li><span>Local Content & Empowerment: </span>Prioritizing local workforce development and supplier engagement to strengthen communities.</li>
                            <li><span>Transparent Communication: </span>Maintaining clear, consistent communication throughout project lifecycles to foster trust and responsiveness.</li>

                        </ul>

                        <div className='title'>
                            OEM and Vendor Partnerships
                        </div>

                        <div className='text'>
                            Our network of carefully selected Original Equipment Manufacturers and suppliers ensures that we provide only the highest quality products and technical support, backed by warranties and service agreements.
                        </div>
                        <ul>
                            <li><span>Certified Equipment: </span>Valves, Pumps, compressors, electrical systems, instrumentation, and safety gear.</li>
                            <li><span>Lifecycle Support: </span>Installation, calibration, maintenance, and repair services to maximize uptime.</li>
                            <li><span>Joint Innovation: </span>Collaborating with OEMs on custom solutions adapted for African operational environments.</li>

                        </ul>

                        <div className='title'>
                            Community and Stakeholder Engagement
                        </div>

                        <div className='text'>
                            We understand that sustainable project success depends on positive relationships with local communities and stakeholders. Pedar Energy is committed to:
                        </div>
                        <ul>
                            <li>Conducting environmental and social impact assessments</li>
                            <li>Implementing community development programs aligned with local needs</li>
                            <li>Ensuring health, safety, and well-being of all impacted populations</li>
                            <li>Promoting inclusivity and gender equality across project initiatives</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPartner