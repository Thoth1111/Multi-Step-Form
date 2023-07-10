import React from 'react';
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';

const Form2 = () => {
    const plans = [
        {planNumber: 1, type: 'Arcade', price: 9, icon: arcadeIcon},
        {planNumber: 2, type: 'Advanced', price: 12, icon: advancedIcon},
        {planNumber: 3, type: 'Pro', price: 15, icon: proIcon}
    ]
    return (
        <div className="p-5">
            <h1 className="fw-bold">Select your plan</h1>
            <p className="form-font mb-5">You have the option of monthly or yearly billing</p>

            <div className="d-flex gap-4 mb-5" style={{marginTop: '80px'}}>
                {plans.map((plan) => (
                    <div className="rounded plans p-4" key={plan.planNumber} style={{border: '1px solid #c9c9c9'}}>
                        <img src={plan.icon} className="mb-5" alt="arcade icon" />
                        <p className="mt-3 plan-font fw-bold">{plan.type}</p>
                        <p className="form-font">${plan.price}/mo</p>
                    </div>
                ))}
            </div>
            <div className="d-flex rounded justify-content-center gap-5 mt-5 align-items-center">
                <p className="form-font fw-bold">Monthly</p>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="toggle-switch"/>
                </div>
                <p className="form-font fw-bold">Yearly</p>                
            </div>
        </div>
    );
};

{/* <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="toggleSwitch"
        checked={isToggled}
        onChange={handleToggle}
      />
      <label className="form-check-label" htmlFor="toggleSwitch">
        Toggle
      </label>
    </div> */}
export default Form2;