import React from 'react';
import './VisionMission.scss';
import {FaDollyFlatbed, FaChartBar } from "react-icons/fa";

function VisionMission() {
  return (
    <div>
        <div className="missionVisionContainer">
            <div className="container">
                <div className="missionVision">
                    <h4>We are Africa’s trusted partner in delivering safe, innovative, and sustainable energy solutions — powering industries, protecting people, and preserving the planet with integrity.</h4>
                    <div className="content">
                        <div class="title">
                            <div className="iconDiv"><FaDollyFlatbed className="icon" /> </div>
                            <div class="border-box"></div>
                            <h4>Our Mission</h4>
                            <p>To deliver integrated services that power industries, protect people, preserve the planet, and uphold the highest standards of governance.</p>
                        </div>

                        <div class="title">
                            <div className="iconDiv"><FaChartBar className="icon" /> </div>
                            <div class="border-box"></div>
                            <h4>Our Vision</h4>
                            <p>To be Africa’s most trusted partner for safe, innovative, sustainable, and ethically governed energy solutions.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisionMission