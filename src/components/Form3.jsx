import React, { useState } from 'react';

const Form3 = () => {
    const addOns = [
        {addOnNumber: 1, name: 'Online service', description: 'Access to multiplayer games', price: 1},
        {addOnNumber: 2, name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2},
        {addOnNumber: 3, name: 'Customizable profile', description: 'Custom theme on your profile', price: 2}
    ];

    const [checked, setChecked] = useState(false);
    
    const handlePicked = (addOnNumber) => {
        setChecked((prevChecked) => ({
            ...prevChecked,
            [addOnNumber]: !prevChecked[addOnNumber],
        }));
    }

    return (
        <div className="p-5">
            <h1 className="fw-bold">Pick add-ons</h1>
            <p className="form-font mb-5">Add-ons help enhance your gaming experience.</p>

            <div>
                {addOns.map((addOn) => (
                    <div 
                     className={`d-flex gap-4 align-items-center form-check addOn rounded mb-3 ${checked[addOn.addOnNumber] ? 'picked-addOn' : ''}`}
                     key={addOn.addOnNumber} style={{width: '45vw'}}
                    >
                        <input type="checkbox" className="addOn-checkbox" id={`addOn${addOn.addOnNumber}`} onChange={() => handlePicked(addOn.addOnNumber)}/>
                        <div className="p-4">
                            <label className="form-check-label plan-font fw-bold" htmlFor="addOn-1">{addOn.name}</label>
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