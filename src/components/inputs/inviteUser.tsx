import React from 'react';
import SelectBtn from '../buttons/selectBtn';



const InfiveUserInput = ({ type = "text", name = '', label, placeholder, value, action, onBlur, disabled = false, _class, style }: any) => {
    return (
        <div>
            <p className='text-[12px]'>{label}</p>
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={action} onBlur={onBlur} style={style} className={`${_class} w-[267px] text-[13px] px-[12px] py-[9px] mt-[5px] rounded-[8px] border-[0.5px] border-[#686868] outline-none`}>
            {/* <SelectBtn label='Account Type' _class="w-[267px] mb-0" /> */}
            </input>
            <h2 className='text-[12px]'>TEAM ACCESS</h2>
            <div>
                <img src="/" alt="" />
                <p className='text-[18px]'>0 People invited</p>
            </div>
        </div>
    )
}

export default InfiveUserInput;