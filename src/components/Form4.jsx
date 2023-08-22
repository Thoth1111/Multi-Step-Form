import React from 'react';
import { useSelector } from 'react-redux';

const Form4 = ( {changePlan} ) => {
    const plan = useSelector((state) => state.plan);
    const yearly = useSelector((state) => state.plan.yearly);
    const addOns = useSelector((state) => state.addOn);
    const addOnsPrice = addOns.reduce((sum, addOn) => sum + addOn.price, 0)
    const totalPrice = plan.price + addOnsPrice;

    const handleChangeClick = (event) => {
        event.preventDefault();
        changePlan();
    }

    return (
        <div className="p-5">
            <h3 className="fw-bold">Finishing up</h3>
            <p className="form-font mb-5">Double-check everything looks OK before confirming</p>

            <div className="rounded p-4" style={{backgroundColor: '#f8f9fe'}}>
                { yearly ? (
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="plan-font fw-bold">{plan.type} (Yearly)</p>
                            <a href="#" onClick={handleChangeClick} className="form-font change-link">change</a>
                        </div>
                        <div>
                            <p className="plan-font fw-bold">${plan.price}/yr</p>
                        </div>
                    </div>
                ) 
                : (
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="plan-font fw-bold">{plan.type} (Monthly)</p>
                            <a href="#" onClick={handleChangeClick} className="form-font change-link">change</a>
                        </div>
                        <div>
                            <p className="plan-font fw-bold">${plan.price}/mo</p>
                        </div>
                    </div>
                )}
                <hr className="mx-1" style={{color: '#c9c9c9'}}/>
                {addOns.map((addOn) => (
                    <div className="d-flex justify-content-between">
                        <p className="form-font">{addOn.name}</p>
                        { yearly ? <p className="form-font" style={{color: 'black'}}>+${addOn.price}/yr</p> 
                        : <p className="form-font" style={{color: 'black'}}>+${addOn.price}/mo</p> }
                    </div>
                ))}
            </div>            
            { yearly ? (
                <div className="d-flex justify-content-between p-4">
                    <p className="form-font">Total (per year)</p> 
                    <p className="form-font fw-bold" style={{color: '#4a3ee1'}}>${totalPrice}/yr</p>
                </div>
            ) : (
                <div className="d-flex justify-content-between p-4">
                    <p className="form-font">Total (per month)</p>
                    <p className="form-font fw-bold" style={{color: '#4a3ee1'}}>${totalPrice}/mo</p>
                </div>
            )}
        </div>
    );
};

export default Form4;