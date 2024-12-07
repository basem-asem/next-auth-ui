import React from "react";

const SwitchBtn = ({ action, value } : any) => {
    return(
        <div>
            <label className="switch">
                <input 
                    type="checkbox" 
                    onChange={action} 
                    checked={value} // This should use `checked={value}`
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default SwitchBtn