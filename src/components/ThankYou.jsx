import React from 'react';
import thanksIcon from '../assets/images/icon-thank-you.svg';

const ThankYou = () => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center m-auto" style={{height: '90vh'}}>
            <img className="mb-5 thanks-icon" src={thanksIcon} alt="thank you icon" />
            <h1 className="fw-bold mb-4">Thank you!</h1>
            <p className="form-font text-center" style={{width: '45vw'}}>
                Thanks for confirming your subscription! We hope you have fun using our platform.
                If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
        </div>
    );
};

export default ThankYou;