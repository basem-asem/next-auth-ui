import React from 'react';

const BillingBtn = ({ action, _class, children }: any) => {
    return (
        <button className={`${_class} w-full h-[33px] link-btn flex justify-center items-center text-[14px] py-[0] px-[25px] rounded-[30px] hover:opacity-80`} onClick={action}>{children}</button>
    )
}

export default BillingBtn;