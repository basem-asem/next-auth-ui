import React from "react";

import SwitchBtn from "../buttons/switchBtn";
import RoundBtn from "../buttons/roundBtn";

const NeccessaryCookies = () => {
    return(
        <div className="absolute flex flex-col justify-center items-start right-[30px] top-[110px] w-[500px]  rounded-[8px] z-[1] gap-[18px] p-[12px] border border-[#DADADA] bg-[white]">
            <div className="flex gap-[15px]">
                <SwitchBtn/>
                <div className="flex justify-center flex-col ">
                    <h1>Google Analytics 4</h1>
                    <span>- Basic analytics for internal traffic reporting only.</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
            <div className="flex gap-[15px]">
                <SwitchBtn/>
                <div className="flex justify-center flex-col ">
                    <h1>Hubspot</h1>
                    <span>- Basic analytics for internal traffic reporting only.</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
            <RoundBtn w='auto' bgColor='#5767C9' isSelect={true}>Save</RoundBtn>
        </div>
    )
}
export default NeccessaryCookies;