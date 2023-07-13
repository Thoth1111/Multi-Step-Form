import React from 'react';

const Form3 = () => {
    const addOns = [
        {addOnNumber: 1, name: 'Online service', description: 'Access to multiplayer games'},
        {addOnNumber: 2, name: 'Larger storage', description: 'Extra 1TB of cloud save'},
        {addOnNumber: 3, name: 'Customizable profile', description: 'Custom theme on your profile'}
    ]

    return (
        <div className="p-5">
            <h1 className="fw-bold">Pick add-ons</h1>
            <p className="form-font mb-5">Add-ons help enhance your gaming experience.</p>

            <div>
                {addOns.map((addOn) => (
                    <div className="d-flex gap-4 align-items-center form-check border rounded mb-3" key={addOn.addOnNumber} style={{width: '45vw'}}>
                        <input type="checkbox" className="addOn-checkbox" id="addOn-1"/>
                        <div className="p-4">
                            <label className="form-check-label plan-font fw-bold" for="addOn-1">{addOn.name}</label>
                            <p className="form-font">{addOn.description}</p>
                        </div>
                        <p></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Form3;