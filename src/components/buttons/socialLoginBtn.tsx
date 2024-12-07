import React from 'react';

const SocialLoginBtn = ({ children }: any) => {
    return (
        <button className="w-full link-btn h-[44px] flex justify-center sm:justify-start gap-[1em] items-center text-[14px] py-[0] pl-[0px] sm:pl-[110px] rounded-[30px] bg-[#000] border border-[#5A5A5A] text-[#ededed] hover:bg-[#141414]">{children}</button>
    )
}

export default SocialLoginBtn;