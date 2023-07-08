import React, { useState } from 'react';
import SideBar from './SideBar';
import Form1 from './Form1';

const StepForm = () => {
    const [activeStep, setActiveStep] = useState(1);
    const totalSteps = 4;

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
            <div>
                {activeStep === 1 && <Form1 />}
                {/* {activeStep === 2 && <Form2 />}
                {activeStep === 3 && <Form3 />}
                {activeStep === 4 && <Form4 />} */}
                <div>
                    <button onClick={handleBack}>Go Back</button>
                    <button onClick={handleNext}>Next Step</button>
                </div>
            </div>
        </div>
    );
};

export default StepForm;