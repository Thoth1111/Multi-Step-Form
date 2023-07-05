import React from "react";

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="d-flex gap-3 mx-5 my-2">
                <div className="flex-item">
                    <h3>1</h3>  
                </div>
                <div className="flex-item">
                    <p>STEP 1</p>
                    <p>YOUR INFO</p>
                </div>                
            </div>
            <div className="d-flex gap-3 mx-5 my-2">
                <div className="flex-item">
                    <h3>2</h3>  
                </div>
                <div className="flex-item">
                    <p>STEP 2</p>
                    <p>SELECT PLAN</p>
                </div>                
            </div>
            <div className="d-flex gap-3 mx-5 my-2">
                <div className="flex-item">
                    <h3>3</h3>  
                </div>
                <div className="flex-item">
                    <p>STEP 3</p>
                    <p>ADD-ONS</p>
                </div>                
            </div>
            <div className="d-flex gap-3 mx-5 my-2">
                <div className="flex-item">
                    <h3>4</h3>  
                </div>
                <div className="flex-item">
                    <p>STEP 4</p>
                    <p>SUMMARY</p>
                </div>                
            </div>            
        </div>
    )
}

export default SideBar