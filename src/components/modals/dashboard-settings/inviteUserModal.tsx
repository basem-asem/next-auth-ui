import React, { useEffect, useRef, useState } from "react";

import DropBtn from "@/components/buttons/dropBtn";
import ModalContainer from "../modalContainer";

const InviteUserModal = ({ handleChange }: { handleChange: any }) => {
    return (
        <ModalContainer clickAction={handleChange}>
            <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-[620px] h-[480px] rounded-[12px] border bg-[white] z-[1000001]' >
                <header className="h-[52px]">
                    <h1 className="text-[20px] text-left font-medium pl-[50px] py-[10px]">Invite Users</h1>
                    <div className="w-[100%] h-[1px] bg-[#ddd]"></div>
                </header>
                <main className="h-[346px] py-[32px] px-[40px] w-[100%]">
                    <div className="flex text-start border rounded-[12px] border-[#ddd] p-[10px] gap-[10px]">
                        <img src="/images/adduser.png" alt="" width={26} height={26} />
                        <input type="text" className="outline-none w-[80%] text-[14px]" placeholder="Enter emails or invite from Google directory or HyprFly" />
                        <DropBtn label="Select Role" />
                    </div>
                    <div className="flex flex-col text-start py-[37px] gap-[16px]">
                        <h1>TEAM ACCESS</h1>
                        <div className="flex items-center gap-[20px]">
                            <div className="w-[30px] h-[30px] bg-[#D9D9D9] rounded-[50%]"></div>
                            <span className="text-[18px] font-medium">0 people invited</span>
                        </div>
                    </div>
                </main>
                <footer className="h-[82px]">
                    <div className="w-[100%] h-[1px] bg-[#ddd]"></div>
                    <div className="flex justify-end">
                        <button className="flex justify-center items-center rounded-[7px] text-[16px] py-[8px] px-[23px] my-[22px] mr-[22px] bg-[#85D9B8] text-[#fff]" onClick={handleChange}>Send Invites</button>
                    </div>
                </footer>
            </div>
        </ModalContainer>
    );
};

export default InviteUserModal