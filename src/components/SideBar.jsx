import React from "react";

const SideBar = ({ activeStep }) => {
    const steps = [
        { stepNumber: 1, stepInfo: "YOUR INFO", stepHead: "STEP 1" },
        { stepNumber: 2, stepInfo: "SELECT PLAN", stepHead: "STEP 2" },
        { stepNumber: 3, stepInfo: "ADD-ONS", stepHead: "STEP 3" },
        { stepNumber: 4, stepInfo: "SUMMARY", stepHead: "STEP 4" }
    ];

    return (
        <div className="side-bar">
            {steps.map((step) => (
                <div className="d-flex gap-3 mx-5 my-5" key={step.stepNumber}>
                    <div className={`circles d-flex justify-content-center align-items-center border rounded-circle border-white
                     ${step.stepNumber === activeStep ? "active" : ""}`}
                    >
                        <h4>{step.stepNumber}</h4>
                    </div>
                    <div className="text-white">
                        <p className="m-0 p-0 step-font">{step.stepHead}</p>
                        <h5 className="m-0 p-0 fw-bold step-head">{step.stepInfo}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideBar