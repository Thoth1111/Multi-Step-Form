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
    const [confirmed, setConfirmed] = useState(false);
    const totalSteps = 4;
    const dispatch = useDispatch();
    const yearly = useSelector((state) => state.plan.yearly);

    const handleUserData = (formData) => {
        dispatch(setUserInfo(formData));
    }

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
        if (activeStep < totalSteps) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 1) {
            setActiveStep(activeStep - 1);
        }
    };

    const handleConfirm = () => {
        setConfirmed(true);
    }

    return (
        <div className="d-flex">
            <SideBar activeStep={activeStep} />
            <div className="step-forms position-relative">
                {activeStep === 1 && <Form1 user={handleUserData}/>}
                {activeStep === 2 && <Form2 pickedPlan={handlePlanData}/>}
                {activeStep === 3 && <Form3 extras={handleAddOns}/>}
                {activeStep === 4 && confirmed ? <ThankYou /> : activeStep === 4 && <Form4 />}
                <div className="position-absolute bottom-0 p-5" style={{width: '50vw'}}>
                    <div className="d-flex justify-content-between pb-5 w-100">
                        <div>
                            { activeStep > 1 && !confirmed ? 
                            <button className="bck-btn p-3" onClick={handleBack}>Go Back</button> : null
                            }
                        </div>
                        <div>
                            { activeStep < totalSteps && (
                            <button className="nxt-btn rounded p-3" onClick={handleNext}>Next Step</button>
                            )}
                            { activeStep === totalSteps && !confirmed ? 
                            <button className="nxt-btn rounded p-3" onClick={handleConfirm}>Confirm</button> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepForm;