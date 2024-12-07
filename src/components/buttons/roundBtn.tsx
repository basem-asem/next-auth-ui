import React from 'react'

interface roundBtnProps {
    bgColor: string,
    w: string,
    children: string,
    isSelect: boolean
}
const RoundBtn = ({ bgColor, w, children, isSelect } : roundBtnProps) => {
    return(
        <button type='button' className={`flex items-center justify-center rounded-[30px] py-[6px] px-[16px] lg:w-auto sm:w-[100%]`}  style={{ width: w, backgroundColor:  isSelect ?  bgColor: '#ccc', color: isSelect ? 'white' : 'black' }}>{children}</button>
    )
}

export default RoundBtn;