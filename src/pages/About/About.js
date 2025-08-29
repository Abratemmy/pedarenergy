import React from 'react';
import './About.scss';
import OtherPages from '../../components/OtherPages/OtherPages';
import { MdPhoneCallback } from "react-icons/md";
import Button from '../../components/Button/Button'
import { FaLocationArrow } from "react-icons/fa";
import VisionMission from '../../components/visionMission/VisionMission'
import { IoCheckmarkDone } from "react-icons/io5";

function About() {
  return (
    <div>
      <OtherPages
        pageName="About"
      />


      <div className="aboutContainer">
        <div className="container">
          <div className="aboutContainerSession1">
            <div className="row gy-5">
              <div className="col-xl-6">
                <div className="content">
                  <div className="titleStroke">About</div>
                  <div className="subtitle"><span className="border-box"></span>Welcome to Pedar Energy</div>
                  <h2 className="pageTitle">Powering Progres, <span> Protecting people </span></h2>

                  <div className="text">
                    At Pedar Energy Limited, we are more than an energy services company, we are a solutions partner committed to powering industries, protecting lives, and driving sustainable growth across Africa.
                  </div>

                  <div className='text'>
                    Founded on innovation, integrity, and impact, Pedar Energy delivers clean energy solutions, oil & gas services, and high-quality personal protective equipment (PPE) designed to meet today’s toughest industrial challenges. Whether it’s enabling smarter energy systems, ensuring workplace safety, or optimizing oilfield performance, we are relentless in our pursuit of excellence.
                  </div>

                  <div className="text">
                    Our approach is simple: safety first, sustainability always, and value at every step. We believe Africa’s energy future must balance efficiency, responsibility, and resilience—and we work with clients, regulators, and communities to make that future possible.
                  </div>

                  <div className="aboutButton">
                    <Button
                      text="Free Consultation"
                      buttonLink="/about_us"
                    />
                    <div className="call">
                      <MdPhoneCallback className="icon" />
                      <a href="tel:(+234) 807 836 6949">(+234) 807 836 6949</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className='imageContainer'>
                  <img src="https://res.cloudinary.com/hayteetech/image/upload/v1755573559/pedarEnergy/banner1_wkaqh1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* another session here */}
        {/* vision mission */}
        <VisionMission />


        {/* another section here */}

        <div className="container">
          <div className="howWeworkContainer">
            <div className="howweWorkTop">
              <div className="titleStroke">Steps</div>
              <div className="subtitle"><span className="border-box"></span>Welcome to Pedar Energy</div>
              <h2 className="pageTitle">Engineering Safety,<br /> <span> Empowering Growth</span></h2>

              <div className="text">
                Pedar Energy plans every project with precision, grounded in data and industry insight.
                Then we execute with the innovation, partnerships, and operational strength you can trust.
              </div>
            </div>

            <div className="howWeWorkCard">
              <div className="row gx-3 gy-5">
                <div className="col-md-6 col-lg-4">
                  <div className="aboutCard">
                    <div className="cardMedia cardMedia1">

                    </div>

                    <div className="cardContent">
                      <div className="cardTop">
                        <div className="titleStroke">01</div>
                        <div className="cardSubtitle">Step</div>
                      </div>
                      <div className="cardWrapper">
                        <div className="cardTitle">Project Planning</div>
                        <div className="cardText">
                          We collaborate with clients to define objectives, scope, and timelines, ensuring every clean energy, engineering, or procurement project starts with a solid roadmap.
                        </div>
                      </div>
                    </div>

                    <div className="cardIcon">
                      <div className="iconImage"><FaLocationArrow className="icon" /> </div>
                    </div>

                  </div>
                </div>


                <div className="col-md-6 col-lg-4">
                  <div className="aboutCard">
                    <div className="cardMedia cardMedia2">

                    </div>

                    <div className="cardContent">
                      <div className="cardTop">
                        <div className="titleStroke">02</div>
                        <div className="cardSubtitle">Step</div>
                      </div>
                      <div className="cardWrapper">
                        <div className="cardTitle">Research & Analysis</div>
                        <div className="cardText">
                          Our experts conduct detailed technical studies, regulatory checks, and market analysis to design the most effective and sustainable solutions.
                        </div>
                      </div>
                    </div>

                    <div className="cardIcon">
                      <div className="iconImage"><FaLocationArrow className="icon" /> </div>
                    </div>

                  </div>
                </div>


                <div className="col-md-6 col-lg-4">
                  <div className="aboutCard">
                    <div className="cardMedia cardMedia3">

                    </div>

                    <div className="cardContent">
                      <div className="cardTop">
                        <div className="titleStroke">03</div>
                        <div className="cardSubtitle">Step</div>
                      </div>
                      <div className="cardWrapper">
                        <div className="cardTitle">Make it happen</div>
                        <div className="cardText">
                          We deliver on time and to spec, leveraging OEM partnerships, proprietary HSE standards, and field-tested operational excellence.
                        </div>
                      </div>
                    </div>

                    <div className="cardIcon">
                      <div className="iconImage"><FaLocationArrow className="icon" /> </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* another session here */}
        <div className="aboutQuestionContainer">
          <div className="container">
            <div className="contentWrapper">
              <div className="left">
                <div className="pageTitle">Have Questions? We are here to Help You!</div>
                <div className="text">Pedar is among the world’s leading renewable energy solutions provider.</div>
              </div>
              <div className="right">
                <div className="titleStroke">24/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* another scetion here .coreValue */}
        <div className="coreValueContainer">
          <div className="container">
            <div className="topContainer">
              <div className="titleStroke">Value</div>
              <div className="subtitle"><span className="border-box"></span>Our Value</div>
              <h2 className="pageTitle">The Principles that <br /><span>Power us </span></h2>
            </div>

            <div className="row g-3">
              <div className="col-md-4">
                <div className="valueContainerCard">
                  <div className="content">
                    <div className="iconCard">
                      <IoCheckmarkDone className="icon" />
                    </div>

                    <div className="cardTitle">Safety First </div>
                    <div className="text">Every decision starts with protecting lives.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="valueContainerCard valueContainerCard2">
                  <div className="content">
                    <div className="iconCard">
                      <IoCheckmarkDone className="icon" />
                    </div>

                    <div className="cardTitle">Integrity</div>
                    <div className="text">Honouring commitments to build trust through ethical conduct.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="valueContainerCard">
                  <div className="content">
                    <div className="iconCard">
                      <IoCheckmarkDone className="icon" />
                    </div>

                    <div className="cardTitle">Innovation </div>
                    <div className="text">Embracing new ideas and technologies.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="valueContainerCard valueContainerCard2">
                  <div className="content">
                    <div className="iconCard">
                      <IoCheckmarkDone className="icon" />
                    </div>

                    <div className="cardTitle">Excellence </div>
                    <div className="text">Delivering with precision and reliability.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="valueContainerCard">
                  <div className="content">
                    <div className="iconCard">
                      <IoCheckmarkDone className="icon" />
                    </div>

                    <div className="cardTitle">Sustainability</div>
                    <div className="text">Acting responsibly for future generations.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="valueContainerCard valueContainerCard2">
                  <div className="content">
                    <div className="iconCard">
                      <IoCheckmarkDone className="icon" />
                    </div>

                    <div className="cardTitle">Accountability </div>
                    <div className="text">Transparent governance embedded in all operations.</div>

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

export default About