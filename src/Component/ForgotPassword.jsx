import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function ForgotPassword() {
    const [verified, setVerified] = useState(false);
    const [showCaptcha, setShowCaptcha] = useState(false);

    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true);
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior
        if (showCaptcha && !verified) {
            alert('Please complete the CAPTCHA');
            return;
        }
        // Add your form submission logic here
        console.log('Form submitted');
    }

    function handleForgotPasswordClick() {
        setShowCaptcha(true);
    }

    return (
        <div className='forgot'>
            <form onSubmit={handleSubmit}>
                <h3 className="createh3">Enter Your Email</h3>
                <input type="email" name="email" placeholder="Email" className='email1' required />
                
                <input type="submit" value="Submit"onClick={handleForgotPasswordClick}  />
                <div className='captcha-container'>
                {showCaptcha && (
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange} />
                )}
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;
