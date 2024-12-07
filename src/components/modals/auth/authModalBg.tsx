import React from 'react';

const AuthModalBg = ({ children }: any) => {
    return (
        <div className="bg-[#000000e6] w-[100%] h-[100%] flex flex-col items-center justify-start pt-[50px] pb-[10px] px-[10px]">{children}</div>
    )
}

export default AuthModalBg;