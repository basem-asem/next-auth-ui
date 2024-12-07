import React from 'react';

const SettingBtn = ({ _class, action, children }: any) => {

    return (
        <button className={`w-full h-[44px] sign-btn my-[15px] py-[0] px-[25px] rounded-[30px] bg-gradient-to-r from-[#DFFB48] via-[#caf469] to-[#B2EA8D] text-black font-bold cursor-pointer ${_class}`} onClick={action}>{children}</button>
    )
}

export default SettingBtn;