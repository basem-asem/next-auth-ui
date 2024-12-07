import React from 'react';

const SignBtn = ({ _class, action, children }: any) => {
    return (
        <button className={`w-full h-[44px] sign-btn mt-[33px] mb-[30px] py-[0] px-[25px] rounded-[30px] bg-gradient-to-r from-[#6BD793] via-[#6BD793] to-[#C9E77A] text-black font-bold cursor-pointer ${_class}`} onClick={action}>{children}</button>
    )
}

export default SignBtn;