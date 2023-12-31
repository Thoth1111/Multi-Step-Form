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
                <div className="nav-steps" key={step.stepNumber}>
                    <div className={`circles d-flex justify-content-center align-items-center border rounded-circle border-white
                     ${step.stepNumber === activeStep ? "active" : ""}`}
                    >
                        <h5>{step.stepNumber}</h5>
                    </div>
                    <div className="text-white sidebar-details">
                        <p className="m-0 p-0 step-font">{step.stepHead}</p>
                        <h5 className="m-0 p-0 fw-bold step-head">{step.stepInfo}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideBar