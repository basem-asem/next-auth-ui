import React from 'react';

const BasicSelect = ({ _class, list, value, onChange }: any) => {
    return (
        <select className={`${_class} bg-transparent border-b-[1px] mt-[0] pt-[10px] pb-[3px] px-[2px] text-[14px] text-[#ededed] focus:outline-none `} onChange={onChange} >
            {
                list.map((l: any, index: number) => (
                    <option key={index} value={l.key} selected={value === l.key ? true : false} className='text-black'>{l.value}</option>
                ))
            }
        </select>
    )
}

export default BasicSelect;