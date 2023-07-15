import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/userSlice';
import SideBar from './SideBar';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

const StepForm = () => {
    const [activeStep, setActiveStep] = useState(1);
    const totalSteps = 4;
    const dispatch = useDispatch();

    const handleUserData = (formData) => {
        dispatch(setUserInfo(formData));
    }

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

    return (
        <div className="d-flex">
            <SideBar activeStep={activeStep} />
            <div className="step-forms position-relative">
                {activeStep === 1 && <Form1 onUser={handleUserData}/>}
                {activeStep === 2 && <Form2 />}
                {activeStep === 3 && <Form3 />}
                {activeStep === 4 && <Form4 />}
                <div className="position-absolute bottom-0 p-5" style={{width: '50vw'}}>
                    <div className="d-flex justify-content-between pb-5 w-100">
                        <div>
                            { activeStep > 1 && (
                            <button className="bck-btn p-3" onClick={handleBack}>Go Back</button>
                            )}
                        </div>
                        <div>
                            { activeStep < totalSteps && (
                            <button className="nxt-btn rounded p-3" onClick={handleNext}>Next Step</button>
                            )}
                            { activeStep === totalSteps && (
                            <button className="nxt-btn rounded p-3">Confirm</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepForm;