import React, { useState, useEffect } from 'react';
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';

const Form2 = ( {onPlan} ) => {
    const plans = [
        {planNumber: 1, type: 'Arcade', price: 9, icon: arcadeIcon},
        {planNumber: 2, type: 'Advanced', price: 12, icon: advancedIcon},
        {planNumber: 3, type: 'Pro', price: 15, icon: proIcon}
    ];

    const [yearly, setYearly] = useState(false);
    const [selected, setSelected] = useState(plans[0]);
    const calculatePrice = () => {
        return yearly ? selected.price * 10 : selected.price;
    }
    const type = selected.type
    const price = calculatePrice();

    useEffect(() => {
        onPlan({type, price, yearly})
    }, [type, yearly, onPlan]);

    const handleToggle = () => {
        setYearly(!yearly);
    };

    const handleSelected = (num) => {
        const selectedPlan = plans[num -1];
        setSelected(selectedPlan);
    };

    return (
        <div className="p-5">
            <h1 className="fw-bold">Select your plan</h1>
            <p className="form-font mb-5">You have the option of monthly or yearly billing</p>

            <div className="d-flex gap-4 mb-5" style={{marginTop: '80px'}}>
                {plans.map((plan) => (
                    <div 
                     key={plan.planNumber}
                     className={`plans rounded p-4 ${plan.planNumber === selected.planNumber ? 'selected-plan' : ''}`}
                     onClick={() => handleSelected(plan.planNumber)}
                     role="button"
                     tabIndex={0}
                    >
                        <img src={plan.icon} className="mb-5" alt="arcade icon" />
                        <p className="mt-3 plan-font fw-bold">{plan.type}</p>
                        { yearly ? (
                            <>
                                <p className="form-font">${plan.price * 10}/yr</p>
                                <p className="form-font" style={{color: '#032b5f', fontSize: '20px'}}>2 months free</p>
                            </>
                        ) : (
                            <p className="form-font">${plan.price}/mo</p>
                        )}
                    </div>
                ))}
            </div>
            <div className="d-flex rounded justify-content-center gap-5 pt-2 mt-5 align-items-center" style={{width: '710px', backgroundColor: '#f8f9fe'}}>
                <p className={`form-font ${yearly ? "" : "active-term"}`}>Monthly</p>
                <div className="switch-container">
                    <input className="toggle-checkbox" type="checkbox" id="toggle-switch" checked={yearly} onChange={handleToggle}/>
                    <label htmlFor="toggle-switch" className="toggler">
                        <div className="toggle-circle"></div>
                    </label>
                </div>
                <p className={`form-font ${yearly ? "active-term" : ""}`}>Yearly</p>                
            </div>
        </div>
    );
};

export default Form2;