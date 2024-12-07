import React from "react";

const SmallSwitchBtn = () => {
    return(
        <div className="flex items-center">
            <label className="sm-switch ">
                <input type="checkbox" />
                <span className="sm-slider round"></span>
            </label>
        </div>
    )
}

export default SmallSwitchBtn