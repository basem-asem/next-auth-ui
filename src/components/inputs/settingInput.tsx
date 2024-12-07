import React, { useState } from 'react';

const SettingInput = ({ type = "text", name = '', label, placeholder, value, action, onBlur, disabled = false, _class, style }: any) => {

    return (
        <div>
            <p className='text-[12px]'>{label}</p>
            <input type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value} 
                onChange={action} 
                style={style} 
                className={`${_class} w-[267px] text-[13px] px-[12px] py-[9px] mt-[5px] rounded-[8px] border-[0.5px] border-[#8b8a8a] focus: outline-none focus:border-[black] `}
            />
        </div>
    )
}

export default SettingInput;