import React from 'react';
import { useSelector } from 'react-redux';

const Form4 = () => {
    const plan = useSelector((state) => state.plan);
    const yearly = useSelector((state) => state.plan.yearly);
    const addOns = useSelector((state) => state.addOn);
    const addOnsPrice = addOns.reduce((sum, addOn) => sum + addOn.price, 0)
    const totalPrice = plan.price + addOnsPrice;

    return (
        <div className="p-5">
            <h1 className="fw-bold">Finishing up</h1>
            <p className="form-font mb-5">Double-check everything looks OK before confirming</p>

            <div className="rounded p-4" style={{backgroundColor: '#f8f9fe'}}>
                { yearly ? (
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="plan-font fw-bold" style={{fontSize: '26px'}}>{plan.type} (Yearly)</p>
                            <a className="form-font" style={{fontSize: '22px'}}>change</a>
                        </div>
                        <div>
                            <p className="plan-font fw-bold" style={{fontSize: '26px'}}>${plan.price}/yr</p>
                        </div>
                    </div>
                ) 
                : (
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="plan-font fw-bold" style={{fontSize: '26px'}}>{plan.type} (Monthly)</p>
                            <a className="form-font" style={{fontSize: '22px'}}>change</a>
                        </div>
                        <div>
                            <p className="plan-font fw-bold" style={{fontSize: '26px'}}>${plan.price}/mo</p>
                        </div>
                    </div>
                )}
                <hr className="mx-1" style={{color: '#c9c9c9'}}/>
                {addOns.map((addOn) => (
                    <div className="d-flex justify-content-between">
                        <p className="form-font" style={{fontSize: '22px'}}>{addOn.name}</p>
                        { yearly ? <p className="form-font" style={{color: 'black', fontSize: '22px'}}>+${addOn.price}/yr</p> 
                        : <p className="form-font" style={{color: 'black', fontSize: '22px'}}>+${addOn.price}/mo</p> }
                    </div>
                ))}
            </div>            
            { yearly ? (
                <div className="d-flex justify-content-between p-4">
                    <p className="form-font" style={{fontSize: '22px'}}>Total (per year)</p> 
                    <p className="form-font fw-bold" style={{color: '#4a3ee1', fontSize: '26px'}}>${totalPrice}/yr</p>
                </div>
            ) : (
                <div className="d-flex justify-content-between p-4">
                    <p className="form-font" style={{fontSize: '22px'}}>Total (per month)</p>
                    <p className="form-font fw-bold" style={{color: '#4a3ee1', fontSize: '26px'}}>${totalPrice}/mo</p>
                </div>
            )}
        </div>
    );
};

export default Form4;