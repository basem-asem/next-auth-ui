import React from 'react';

const TeamSelectBtn = ({ _class, action, children }: any) => {
    return (
        <button className={`w-full h-[33px] sign-btn py-[0] px-[25px] rounded-[30px] hover:opacity-80 bg-gradient-to-r from-[#bf984c] via-[#dfb157] to-[#ffca62] text-black font-bold cursor-pointer ${_class}`} onClick={action}>{children}</button>
    )
}

export default TeamSelectBtn;