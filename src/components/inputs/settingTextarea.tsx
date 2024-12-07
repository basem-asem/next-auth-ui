import React, { useState } from "react";
import SettingBtn from "../buttons/settingBtn";

import { useGlobalContext } from "@/context";


const SettingTextarea = ({ label, placeholder, name, onBlur, disabled = false, _class }: any) => {

    const { state, dispatch } = useGlobalContext();
    
    const [detailData, setDetailData] = useState('');

    const handleInputChange = (ext: any) => {
        const { value } = ext.target;
        setDetailData(value);
    }

    const handleClick = () => {
        dispatch({ type: name, payload: detailData });
    }
    return(
        <div className="relative w-[547px]">
            <p className='text-[12px] pt-[20px]'>{label}</p>
            <textarea placeholder={placeholder} name={name} onBlur={onBlur} className={`${_class} w-[547px] h-[100px] text-[13px] px-[12px] py-[9px] rounded-[8px] border-[0.5px] border-[#686868] outline-none`} onChange={handleInputChange}>{state.h_Detail}</textarea>
            <SettingBtn _class="!w-[91px] !h-[26px] text-[13px] font-light absolute bottom-0 right-[15px]" action={handleClick}>Send</SettingBtn>
        </div>
    )
}

export default SettingTextarea;