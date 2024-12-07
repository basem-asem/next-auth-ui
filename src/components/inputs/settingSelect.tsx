import React from 'react';

const SettingSelect = ({ _class, label, list, value, onChange }: any) => {
    return (
        <div>
            <p className='text-[12px]'>{label}</p>
            <select className={`${_class} text-[13px] px-[12px] py-[9px] rounded-[8px] border-[0.5px] border-[#686868] outline-none`} value={value} onChange={onChange} >
                {
                    list.map((l: any, index: number) => (
                        <option key={index} value={l.key} className='text-black'>{l.value}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default SettingSelect;