import React from 'react';

const BasicInput = ({ type = "text", placeholder, value, action, onBlur, disabled = false, _class }: any) => {
    return (
        <input type={type} placeholder={placeholder} disabled={disabled} className={`${_class} bg-transparent border-b-[1px] border-b-[#ffffff80] focus:border-b-[#ffffff] text-[#ededed] pt-[10px] pb-[5px] px-[5px] text-[14px] focus:outline-none`} value={value} onChange={(e) => { action(e.target.value) }} onBlur={onBlur} />
    )
}

export default BasicInput;