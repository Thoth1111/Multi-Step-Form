import React from 'react';

const Form1 = () => {
    return (
        <div className="step-form">
            <div className="py-5">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number</p>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="e.g. Stephen King" required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" placeholder="e.g. stephenking@lorem.com" required/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" placeholder="e.g. +1 234 567 890" required/> "
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form1;