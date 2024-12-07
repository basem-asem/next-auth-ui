import Link from 'next/link';
import React from 'react';

const BillingBox = ({ tag, name, color, price, link, children, _class, isBorder = true}: any) => {
    return (
        <div className={`rounded-[20px] p-[18px] w-[262px]`}>
            <div className='w-full'><div className={`${_class ? _class : ''} w-[50%] rounded-[3px] text-[black] px-[7px] py-[3px] text-[12px] font-[700] `} style={{ backgroundColor: color }}>{tag}</div></div>
            <div className='flex justify-between items-center mt-[9px]'>
                <h3 className='text-[18px] font-[700] pl-[7px]'>{name}</h3>
                <div className={`${price === 0 ? 'invisible' : 'visible'}`}>
                    <p className='text-[18px] font-[800] text-right leading-[120%]'>${price}</p>
                    <p className='text-[12px] font-[800] text-right leading-[120%]'>month</p>
                </div>
            </div>
            <p className='font-[700] text-[14px] mt-[10px]'>• Feature</p>
            <p className='font-[700] text-[14px] mt-[6px] mb-[16px]'>• Feature</p>
            {children}
            <div className='flex justify-center items-center'>
                <Link href={link} className='mt-[10px] text-center text-[12px] mx-auto underline'>See more details</Link>
            </div>
        </div>
    )
}

export default BillingBox;