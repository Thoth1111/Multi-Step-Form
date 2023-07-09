import React from 'react';

const Form1 = () => {
    return (
        <div className="p-5">
            <h1 className="fw-bold">Personal info</h1>
            <p className="form-font">Please provide your name, email address, and phone number</p>
            <form className="mt-5">
                <div className="d-flex flex-column mb-4">
                    <label htmlFor="name" className="mb-1 label">Name</label>
                    <input type="text" className="border border-3 rounded p-3" style={{width: '45vw'}} placeholder="e.g. Stephen King" required/>
                </div>
                <div className="d-flex flex-column mb-4">
                    <label htmlFor="email" className="mb-1 label">Email Address</label>
                    <input type="email" className="border border-3 rounded p-3" style={{width: '45vw'}} placeholder="e.g. stephenking@lorem.com" required/>
                </div>
                <div className="d-flex flex-column mb-4">
                    <label htmlFor="phone" className="mb-1 label">Phone Number</label>
                    <input type="tel" className="border border-3 rounded p-3" style={{width: '45vw'}} placeholder="e.g. +1 234 567 890" required/>
                </div>
            </form>
        </div>        
    );
};

export default Form1;