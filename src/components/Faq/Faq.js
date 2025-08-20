import React, { useState } from 'react'
import './Faq.scss';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

function Faq() {
    const faqData = [
        {
            service: 'Where can I find more information?',
            answer: 'You can find more information about our services on our website, or you can contact us directly for specific inquiries. We also have a FAQ section that addresses common questions.',
        },
        {
            service: 'Which industries does Pedar Energy serve?',
            answer: 'Pedar Energy serves a wide range of industries. Our expertise allows us to tailor our services to meet the unique needs of each industry.',
        },
        {
            service: 'Where are your operations located?',
            answer: 'We serve a wide range of industries, including residential, commercial, industrial, and specialized sectors. Our expertise allows us to tailor our services to meet the unique needs of each industry.',

        },
        {
            service: 'Do you work with both government and private sector clients?',
            answer: "Yes, we work with a wide range of clients, including government agencies, private companies, and individuals. Our services are tailored to meet the specific needs of each client, regardless of their sector.",
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