import React from "react";

import SmallSwitchBtn from "../buttons/smallSwitchBtn";


const ProfilModal = ({ onClose } : { onClose : () => void }) => {
    return(
        <>
            <div className="absolute flex flex-col right-[80px] top-[100px] w-[148px] h-[169px] rounded-[6px] border border-[white] bg-[#EDEDED] z-[6] gap-[8px] p-[12px]">
                <div className="text-[12px] font-normal hover:font-bold hover:cursor-pointer">Profile</div>
                <div className="text-[12px] font-normal hover:font-bold hover:cursor-pointer">Notifications</div>
                <div className="text-[12px] font-normal hover:font-bold hover:cursor-pointer ">Subscriptions</div>
                <div className="text-[12px] font-normal  hover:font-bold hover:cursor-pointer">Settings</div>
                <div className="flex relative items-center justify-between">
                    <span className="text-[12px] font-normal  hover:font-bold hover:cursor-pointer">Dark Mode</span>
                    <SmallSwitchBtn/>
                </div>
                <div className="text-[12px] font-normal  hover:font-bold hover:cursor-pointer">Log Out</div>
            </div>
            <div className="absolute z-[5] left-0 top-0 w-[100%] h-[100%]" onClick={onClose}></div>
        </>
        
    )
}


export default ProfilModal;