import React from 'react'

import RoundBtn from '../buttons/roundBtn';

const Cookies = () => {
    return (
        <div className='flex items-center justify-between bg-[white] px-[20px] py-[30px] rounded-[30px] lg:flex-row max-lg:flex-row sm:flex-col max-sm:flex-col'>
            <div className='lg:sm:mb-0 max-lg:mb-0 sm:mb-[30px] max-sm:mb-[30px]'>
                <h1 className='text-[20px] font-extrabold'>Cookies</h1>
                <span>We use cookies to improve website functionality and services. Cookie preferences can be changed anytime via the cookie button, which appears after selection on this banner.</span>
            </div>
            <div className='flex gap-[10px] lg:flex-row lg:w-auto max-lg:w-auto max-lg:flex-row sm:flex-col sm:w-[100%] max-sm:flex-col max-sm:w-[100%]'>
                <RoundBtn w='auto' bgColor='#5767C9' isSelect={true}>Accept</RoundBtn>
                <RoundBtn w='auto' bgColor='#5767C9' isSelect={false}>Decline</RoundBtn>
                <RoundBtn w='auto' bgColor='#5767C9' isSelect={false}>Customize</RoundBtn>
            </div>
        </div>
    )
}

export default Cookies;