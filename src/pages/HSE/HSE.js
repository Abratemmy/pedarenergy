import React from 'react';
import './HSE.scss';
import OtherPages from '../../components/OtherPages/OtherPages';

function HSE() {
    return (
        <div>
            <OtherPages
                pageName="Sustainability"
            />

            <div className='hseContainer'>
                <div className="container">
                    <div className="contactContentTop">
                        <div className="titleStroke">HSE</div>
                        <div className="subtitle"><span className="border-box"></span>Building a Sustainable Future</div>
                        <h2 className="pageTitle">Our Commitment to <span>Sustainability</span></h2>
                    </div>

                    <div className="hseContent">
                        <div className='title'>
                            Our Commitment to People, Planet, and Performance
                        </div>

                        <div className="text">
                            At Pedar Energy Limited, sustainability and HSE (Health, Safety, and Environment) are not checkboxes—they are the very foundation of how we operate. We believe that the future of energy lies in responsible operations, innovative environmental stewardship, and a safety-first culture that protects lives while safeguarding the environment for future generations.
                        </div>

                        <div className="text">
                            From offshore oilfield services to clean energy innovation, our approach is guided by a single principle: <strong>no job is so urgent that it cannot be done safely and sustainably.</strong>
                        </div>

                        <div className="title">
                            Our Sustainability Vision
                        </div>

                        <div className="text">
                            We are committed to creating shared value for our clients, communities, and the planet. Our sustainability strategy is built around three pillars:
                        </div>

                        <div className='subTitle'><span>1.</span>Environmental Responsibility</div>
                        <ul className="advantagesList">
                            <li>Carbon Reduction Initiatives: <span> Integrating renewable energy solutions and clean fuel options in our operations.</span></li>
                            <li>Energy Efficiency: <span>Deploying technology to minimize energy waste across projects.</span></li>
                            <li>Waste Management: <span>Reducing, reusing, and recycling in every operational phase.</span></li>
                        </ul>

                        <div className='subTitle'><span>2.</span>Social Impact</div>
                        <ul className="advantagesList">
                            <li>Local Content Development: <span>Creating jobs and opportunities for Nigerian talent through training and skills transfer.</span></li>
                            <li>Community Engagement: <span>Partnering with local communities to support education, health, and infrastructure.</span></li>
                            <li>Empowerment: <span>Providing opportunities for women and underrepresented groups in technical fields.</span></li>
                        </ul>

                        <div className='subTitle'><span>3.</span>Governance & Ethics</div>
                        <ul className="advantagesList">
                            <li><span>Adhering to the highest standards of corporate governance, transparency, and compliance.</span></li>
                            <li><span>Conducting all operations with integrity and zero tolerance for unethical practices</span></li>

                        </ul>

                        <div className="hseImage">
                            <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755823497/pedarEnergy/sustainability1_si9fuu.jpg" alt="PEGEAR® HSE Brand" className='img-fluid' />
                        </div>

                        <div className='title'>
                            Health, Safety, and Environment (HSE)
                        </div>

                        <div className="text">
                            Safety is not a department—it’s our culture. Our goal is simple: <strong>zero incidents, zero harm, zero compromise.</strong>
                            We have established rigorous HSE protocols that exceed industry standards, ensuring that every task is performed in compliance with national and international regulations.

                        </div>

                        <div className='title'>Our HSE Principles:</div>
                        <ul className="advantagesList">
                            <li>Protect People First: <span>The health and safety of our employees, contractors, and clients come before everything else.</span></li>
                            <li>Safe Workplaces: <span>Implementing hazard identification, risk assessment, and control measures before any work begins.</span></li>
                            <li>Incident Prevention: <span>Proactive safety training, regular drills, and constant safety culture reinforcement.</span></li>
                            <li>Environmental Care: <span>Minimizing spills, emissions, and environmental footprint in every project.</span></li>

                        </ul>

                        <div className='title'>
                            PEGEAR™ – Our HSE Innovation Brand
                        </div>

                        <div className="text">
                            PEGEAR™ is Pedar Energy’s unique safety and environmental innovation arm, delivering premium PPE and HSE products tailored for Africa’s industries.
                        </div>
                        <div className="text">Through PEGEAR™, we:</div>
                        <ul className="advantagesList">
                            <li><span>Design and supply</span> personal protective equipment <span>that meets global standards while accommodating local needs (including female-focused PPE designs).</span></li>
                            <li><span>Partner with </span>OEMs <span>(Original Equipment Manufacturers) to ensure high-quality, durable, and certified safety gear</span></li>
                            <li><span>Integrate</span> smart PPE technology<span> - such as sensors, GPS tracking, and environmental monitors for enhanced worker safety.</span></li>

                        </ul>

                        <div className='title'>
                            Gas & Innovative Clean Energy Solutions
                        </div>

                        <div className="text">
                            We are actively developing and delivering projects that move Nigeria closer to a cleaner, more sustainable energy future:
                        </div>
                        <ul className="advantagesList">
                            <li>Gas-to-Power Projects <span>– Leveraging natural gas as a bridge fuel for lower emissions.</span></li>
                            <li>Mini-LNG & CNG Solutions <span>– Flexible gas supply for industrial and commercial clients.</span></li>
                            <li>Solar & Hybrid Power Systems <span>– Tailored renewable solutions for remote sites and urban installations.</span></li>
                            <li>Energy Efficiency Audits <span>– Identifying and implementing cost-saving, low-carbon improvements.</span></li>
                            <li>Green Hydrogen Exploration <span>– Positioning for next-generation clean fuel adoption in Africa. </span></li>

                        </ul>

                        <div className="hseImage">
                            <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755823496/pedarEnergy/sustainability2_ltdrhg.jpg" alt="PEGEAR® HSE Brand" className='img-fluid' />
                        </div>

                        <div className='title'>
                            Our Sustainability Goals (2025–2030)
                        </div>

                        <ul className="advantagesList">
                            <li>50% reduction <span> in operational emissions through clean energy integration.</span></li>
                            <li>Zero fatalities <span> and a measurable reduction in lost-time incidents (LTI).</span></li>
                            <li>100% compliance <span>with all HSE and environmental regulations.</span></li>
                            <li><span>Launching at least </span>three innovative clean energy projects <span> in Nigeria and West Africa.</span></li>

                        </ul>

                        <div className='title'>
                            Why This Matters
                        </div>
                        <div className='text'>
                            We understand that clients today don’t just want a contractor, they want a partner who shares their values for a sustainable, safe, and prosperous future.
                        </div>
                        <div className='text'>
                            At Pedar Energy, every project is a chance to <span>prove that safety and sustainability are competitive advantages </span> that drive performance, build trust, and secure long-term value.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HSE