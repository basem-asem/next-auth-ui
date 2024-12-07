import React from "react";
import SettingInput from "../inputs/settingInput";
import SettingBtn from "../buttons/settingBtn";
import SetingTextarea from "../inputs/settingTextarea";

import { useGlobalContext } from "@/context";


const HelpSetting = () => {

    const { state, dispatch } = useGlobalContext();

    
    const handleInputChange = (evt: any) => {
        const { name, value } = evt.target;
        dispatch({ type: name, payload: value });
    }

    return(
        <div>
            <div className="flex gap-[15px]">
                <SettingInput label='Name'  placeholder="Dan Goldman" name="h_Name" value={state.h_Name} action={handleInputChange}/> 
                <SettingInput label='Artist or Company Name (optional)' placeholder="-" name="h_CompanyName"  value={state.h_CompanyName} action={handleInputChange}/>
            </div>
            <div>
                <SetingTextarea name="h_Detail" />
            </div>
            <div className="border-t mt-[20px]">
                <h2 className="text-[16px] pt-[20px]">Contact us Directly</h2>
                <p className="text-[14px] text-[#A2A2A2] pt-[14px]">1800-244-0000<br />
                    staff@goldfire.com<br />
                </p>
                <p className="text-[14px] text-[#A2A2A2] pt-[20px]">500 Wilshire Blvd<br />
                    Santa Monica, CA<br />
                </p>
            </div>
            <div className="border-t mt-[20px]">
                <h2 className="text-[16px] pt-[20px]">Get Support Now</h2>
                    <SettingBtn _class="!w-[235px] !h-[37px] text-[13px] font-light !mt-[10px]">Chat with Us</SettingBtn>
            </div>
        </div>
    )
}

export default HelpSetting;