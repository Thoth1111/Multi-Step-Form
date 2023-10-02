import React, { useState, useEffect } from 'react';

const Form1 = ({ user }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleUserData = (e) => {
        const { name, value } = e.target
        setUserData({
            ...userData, [name]: value,
        })           
    };
     console.log(userData);   
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');

    useEffect(() => {
        user(userData);
    }, [userData, user]);

    return (
        <div className="p-5">
            <h3 className="fw-bold">Personal info</h3>
            <p className="form-font">Please provide your name, email address, and phone number</p>
            <form className="mt-3">
                <div className="d-flex flex-column mb-3">
                    <label htmlFor="name" className="mb-1 label">Name</label>
                    <input
                     type="text"
                     className="custom-width1 border border-3 rounded p-1"
                     placeholder="e.g. Stephen King"
                     required
                     onChange={handleUserData}
                     value={userData.name}
                    />
                </div>
                <div className="d-flex flex-column mb-3">
                    <label htmlFor="email" className="mb-1 label">Email Address</label>
                    <input
                     type="email"
                     className="custom-width1 border border-3 rounded p-1"
                     placeholder="e.g. stephenking@lorem.com"
                     required
                     onChange={handleUserData}
                    />
                </div>
                <div className="d-flex flex-column mb-3">
                    <label htmlFor="phone" className="mb-1 label">Phone Number</label>
                    <input
                     type="tel"
                     className="custom-width1 border border-3 rounded p-1"
                     placeholder="e.g. +1 234 567 890"
                     required
                     onChange={handleUserData}
                    />
                </div>
            </form>
        </div>        
    );
};

export default Form1;