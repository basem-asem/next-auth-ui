import React from 'react';

const SearchInput = ({ type = "text", placeholder = '', value = '', action = () => { }, _class = '', onFocus = () => { }, onBlur = () => { } }: any) => {
    return (
        <input type={type} placeholder={placeholder} className={`${_class} bg-transparent rounded-[30px] border-[1px] border-[#ffffff80] focus:border-[#fff] py-[10px] pr-[48px] text-[14px] focus:outline-none`} value={value} onChange={(e) => { action(e.target.value) }} onFocus={onFocus} onBlur={onBlur} />
    )
}

export default SearchInput;