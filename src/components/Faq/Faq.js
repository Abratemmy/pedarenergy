import React, { useState } from 'react'
import './Faq.scss';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

function Faq() {
    const faqData = [
        {
            service: 'What does Pedar Energy Limited do?',
            answer: 'Pedar Energy is a Nigerian energy services company providing innovative clean energy solutions, engineering & technical services, OEM equipment partnerships, and local PPE production. We are committed to safety, sustainability, and local content growth.',
        },
        {
            service: 'Where is Pedar Energy based?',
            answer: 'We are headquartered in Lagos, Nigeria, with operations and partnerships across the country to serve the oil & gas, power, and industrial sectors.',
        },
        {
            service: 'What clean energy solutions do you offer?',
            answer: 'Our solutions include gas-to-power plants, LNG & CNG supply, solar hybrids, renewable systems, energy storage, and smart grid integration tailored for industrial and commercial clients.',

        },
        {
            service: 'Do you provide energy solutions for SMEs or only large-scale clients?',
            answer: "While our focus is on industrial and commercial operations, we design scalable solutions that can be tailored for SMEs, estates, and community power projects.",
        },
        {
            service: "What makes Pedar Energy’s PPE different from imported products?",
            answer: "Our PPE is locally manufactured to international standards, ensuring better quality control, faster delivery, affordability, and designs tailored to Nigeria’s operating conditions.",
        }
        ,
        {
            service: 'Who can buy Pedar Energy PPE?',
            answer: 'We supply to oil & gas companies, construction firms, manufacturing plants, and government agencies. Retail availability for individuals and SMEs will be announced soon.',

        },
        {
            service: 'What engineering services does Pedar Energy provide?',
            answer: "We offer Front-End Engineering Design (FEED), EPC services, facility upgrades, asset integrity management, and multi-disciplinary engineering support (mechanical, civil, electrical, instrumentation).",
        },
        {
            service: "Can Pedar Energy support long-term maintenance contracts?",
            answer: "Yes, we provide end-to-end lifecycle support, including maintenance, modifications, and integrity checks for long-term operational efficiency.",
        },
        {
            service: 'How does Pedar Energy support Nigeria’s local content policy?',
            answer: "We invest in local manufacturing (PPE), skills transfer, Nigerian workforce development, and SME empowerment, reducing dependency on imports and creating local jobs.",
        },
        {
            service: "Do you partner with OEMs or international companies?",
            answer: "Yes, we collaborate with trusted Original Equipment Manufacturers (OEMs) to deliver certified machinery, power equipment, and after-sales support.",
        }
    ]

    const [isExtended, setIsExtended] = useState(null);
    const handleToggle = (task, index) => {
        if (isExtended === index) {
            setIsExtended(null)
        } else {
            setIsExtended(index)
        }
        // setDropdowncontent([task]); 
    };
    return (
        <div className='faqContainer'>
            {/* <div className='pageTitle'>
                Frequent Queries to help get clear solutions<div className='line'></div>
            </div> */}

            {faqData.map((data, index) => (
                <div
                    className={`wrapper ${isExtended === index ? 'active' : ''}`}
                    key={index}
                >
                    <div
                        className="titleContainer"
                        onClick={() => handleToggle(data, index)}
                    >
                        <div className={`title ${isExtended === index ? 'titleColor' : ''}`}>
                            {data.service}
                            {isExtended === index ? <MdKeyboardArrowDown className="icon" /> : <MdKeyboardArrowRight className="icon" />}
                        </div>
                    </div>

                    {isExtended === index && (
                        <div>
                            <div className="answer">{data.answer}</div>
                        </div>
                    )}
                </div>
            ))}

        </div>
    )
}

export default Faq