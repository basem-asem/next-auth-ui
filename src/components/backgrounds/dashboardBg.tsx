import React from 'react';

const DashboardBg = ({ children }: any) => {
    return (
        <main className="relative h-[calc(100vh-90px-75px)] object-cover bg-[white] mt-[30px] rounded-[30px]">{children}</main>
    )
}

export default DashboardBg;