import React, { useState } from 'react'
import OtherPages from '../../components/OtherPages/OtherPages'
import './Contact.scss';
import { FaLocationPinLock } from "react-icons/fa6";
import { MdWifiCalling1, MdAttachEmail } from "react-icons/md";
import GoogleMapComponent from '../../components/GoogleMap/GoogleMapComponent';

function Contact() {
    // const navigate = useNavigate()

    const initialValue = {
        fullName: "",
        message: "",
        email: "",
        phoneNumber: ""
    }
    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false);

    const clearValues = () => {
        console.log("Initial", initialValue)
        setValues(initialValue)
        // ref.current.reset();
    }
    console.log('VALUES', values);
    // get input values
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value,
        });
    };


    // handle errors
    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.fullName) errorsValue.fullName = "Name is required";
        if (!targets.message) errorsValue.message = "Type  a message";
        if (!targets.phoneNumber) errorsValue.phoneNumber = "Type  a phoneNumber";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    // submit form
    const submitForm = async (ev) => {
        ev.preventDefault();
        let v = handleError(values);
        setSuccessMessage(false)
        setSubmitError(false)
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
            setLoading(false)
        }
        else {
            alert("Form submitted successfully");
            //   sendEmail(ev);
            // navigate('/form_success');
        }
    };
    //   function sendEmail(ev) {
    //     setLoading(true)
    //     emailjs.sendForm(
    //       'service_w9bmuq7',
    //       'template_pngutyh',
    //       ev.target,
    //       'aDa4G9MvkUKU8oiBk'
    //     ).then(res => {
    //       setLoading(false)
    //       setSuccessMessage(true)
    //       setSubmitError(false)
    //       clearValues();
    //     }).catch(err => {
    //       setLoading(false);
    //       setSubmitError(true)
    //       setSuccessMessage(false)
    //       console.log(err)
    //     })
    //   }

    return (
        <div>
            <OtherPages
                pageName="Contact"
            />

            <div className="contactContainer">
                <div className="container">
                    <div className="contactContentTop">
                        <div className="titleStroke">Contact</div>
                        <div className="subtitle"><span className="border-box"></span>GET IN TOUCH</div>
                        <h2 className="pageTitle">Don't hesitate to contact Us</h2>
                    </div>

                    <div className="contactCardContainer">
                        <div className='row g-3'>
                            <div className='col-md-4'>
                                <div className="contactCard">
                                    <div className="content">
                                        <div className="iconDiv">
                                            <FaLocationPinLock className='icon' />
                                        </div>
                                        <h3>Our Office</h3>
                                        <p>9 Anifowoshe Street, Victoria Island Lagos</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className="contactCard">
                                    <div className="content">
                                        <div className="iconDiv">
                                            <MdWifiCalling1 className='icon' />
                                        </div>
                                        <h3>Our Phone</h3>
                                        <p><a href="tel:(+234) 807 836 6949">(+234) 807 836 6949</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className="contactCard">
                                    <div className="content">
                                        <div className="iconDiv">
                                            <MdAttachEmail className='icon' />
                                        </div>
                                        <h3>Our Email</h3>
                                        <p><a href="mailTo:info@pedarenergy.com">info@pedarenergy.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* another session here */}
                    <div className='row g-3' style={{ padding: '60px 0px  30px' }}>
                        {/* <div className='col-lg-6'>
                            <GoogleMapComponent />
                        </div> */}
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                            <div className='contact-formdetails'>
                                <form onSubmit={submitForm} >
                                    <div className='row'>
                                        {successMessage && <div className='successMessage'>
                                            <div className='text'>Form submitted successfully</div>
                                        </div>
                                        }
                                        {submitError && <div className='submitError'>
                                            <div className='text'>Form not submitted </div>
                                        </div>
                                        }
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="contact-form">
                                                <label>Full Name <span>*</span></label>
                                                <input type="text" id="" name="fullName" placeholder="FullName" className="inputfield" onChange={handleChange} />
                                                {errors ? <p className='error'> {errors.fullName}</p> : ""}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="contact-form">
                                                <label>Phone Number <span>*</span></label>
                                                <input type="text" id="" name="phoneNumber" placeholder="Phone number" className="inputfield" onChange={handleChange} />
                                                {errors ? <p className='error'> {errors.phoneNumber}</p> : ""}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="contact-form">
                                                <label>Email<span>*</span></label>
                                                <input type="email" id="" name="email" placeholder="Email" className="inputfield" onChange={handleChange} />
                                                {errors ? <p className='error'> {errors.email}</p> : ""}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="contact-form">
                                                <label>Message <span>*</span></label>
                                                <textarea id="" name="message" placeholder="message" className="textarea" rows="4" onChange={handleChange}></textarea>
                                                {errors ? <p className='error'> {errors.message}</p> : ""}
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-4">
                                            {loading ? <>
                                                <button type="submit" value="Submit" className="pageButton" >
                                                    <span className="spinner-grow spinner-grow-sm text-info" role="status" style={{ marginRight: '10px' }}>
                                                    </span>
                                                    Submitting...
                                                </button>
                                            </> :
                                                <button type="submit" value="Submit" className="pageButton" >Submit</button>
                                            }
                                        </div>
                                        {successMessage && <div className='successMessage'>
                                            <div className='text'>Form submitted successfully</div>
                                        </div>
                                        }
                                        {submitError && <div className='submitError'>
                                            <div className='text'>Form not submitted </div>
                                        </div>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact