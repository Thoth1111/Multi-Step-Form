import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../redux/userSlice';
import { setPlan } from '../redux/planSlice';
import { setAddOn, updateAddOn } from '../redux/addOnSlice';
import SideBar from './SideBar';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import ThankYou from './ThankYou';

const StepForm = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [isUserDetails, setIsUserDetails] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const totalSteps = 4;
    const dispatch = useDispatch();
    const yearly = useSelector((state) => state.plan.yearly);

    const handleUserData = (formData) => {
        if (formData.name !== '' && formData.email !== '' && formData.phone !== '') {
            setIsUserDetails(true);
            dispatch(setUserInfo(formData));
        } else {
            setIsUserDetails(false);
        }
    };

    const handlePlanData = (selected) => {
        dispatch(setPlan(selected));
    };

    const handleAddOns = (checkedAddOns) => {
        dispatch(setAddOn(checkedAddOns));
        if(yearly) {
            dispatch(updateAddOn());
        };
    };

    const handleNext = () => {
        if (activeStep === 1 && !isUserDetails) {
            alert('Please fill in your details first!');
        }
        else {
            setActiveStep(activeStep + 1);
        }
        if (activeStep > 1 && activeStep < totalSteps) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 1) {
            setActiveStep(activeStep - 1);
        }
    };

    const handleNew = () => {
        setActiveStep(1);
        setConfirmed(false);
    }

    const handleChangePlan = () => {
        setActiveStep(2);
    }

    const handleConfirm = () => {
        setConfirmed(true);
    }

    return (
        <div className="form-container">
            <SideBar activeStep={activeStep} />
            <div className="step-forms">
                <div className="form-component">
                    {activeStep === 1 && <Form1 user={handleUserData}/>}
                    {activeStep === 2 && <Form2 pickedPlan={handlePlanData}/>}
                    {activeStep === 3 && <Form3 extras={handleAddOns}/>}
                    {activeStep === 4 && !confirmed && <Form4 changePlan={handleChangePlan}/>}
                    {activeStep === 4 && confirmed && <ThankYou />}
                </div>
                <div className="step-switch-container">
                    <div className="d-flex justify-content-between pb-5 w-100">
                        <div>
                            { activeStep > 1 && !confirmed ? 
                            <button className="bck-btn p-2" onClick={handleBack}>Go Back</button> : null
                            }
                            { activeStep === totalSteps && confirmed ?
                            <button className="bck-btn p-2" onClick={handleNew}>New Order</button> : null
                            }
                        </div>
                        <div>
                            { activeStep < totalSteps && (
                            <button className="nxt-btn rounded p-2" onClick={handleNext}>Next Step</button>
                            )}
                            { activeStep === totalSteps && !confirmed ? 
                            <button className="nxt-btn rounded p-2" onClick={handleConfirm}>Confirm</button> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepForm;