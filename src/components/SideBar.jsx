import React from "react";

const SideBar = () => {
    return (
        <div className="side-bar py-5">
            <div className="d-flex gap-3 mx-5 mt-4 my-5">
                <div className="circles d-flex justify-content-center align-items-center border rounded-circle border-white">
                    <h4>1</h4>  
                </div>
                <div className="flex-item text-white">
                    <p className="m-0 p-0 step-font">STEP 1</p>
                    <h5 className="m-0 p-0 fw-bold step-head">YOUR INFO</h5>
                </div>                
            </div>
            <div className="d-flex gap-3 mx-5 my-5">
                <div className="circles d-flex justify-content-center align-items-center border rounded-circle border-white">
                    <h4>2</h4>  
                </div>
                <div className="flex-item text-white">
                    <p className="m-0 p-0 step-font">STEP 2</p>
                    <h5 className="m-0 p-0 fw-bold step-head">SELECT PLAN</h5>
                </div>                
            </div>
            <div className="d-flex gap-3 mx-5 my-5">
                <div className="circles d-flex justify-content-center align-items-center border rounded-circle border-white">
                    <h4>3</h4>  
                </div>
                <div className="flex-item text-white">
                    <p className="m-0 p-0 step-font">STEP 3</p>
                    <h5 className="m-0 p-0 fw-bold step-head">ADD-ONS</h5>
                </div>                
            </div>
            <div className="d-flex gap-3 mx-5 w-5 my-5">
                <div className="circles d-flex justify-content-center align-items-center border rounded-circle border-white">
                    <h4>4</h4>  
                </div>
                <div className="flex-item text-white">
                    <p className="m-0 p-0 step-font">STEP 4</p>
                    <h5 className="m-0 p-0 fw-bold step-head">SUMMARY</h5>
                </div>                
            </div>            
        </div>
    )
}

export default SideBar