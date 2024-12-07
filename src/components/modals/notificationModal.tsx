import React from "react";

const NotificationModal = ({ onClose } : { onClose: () => void }) => {
    return(
        <>
            <div className="absolute right-[30px] top-[75px] w-[420px]  rounded-[8px] z-[6] gap-[8px] p-[12px]">
                <div className="triangle"></div>
                <div className="border border-[#DADADA] bg-[white]">
                    <h1 className="flex items-center justify-center text-[16px] font-extrabold py-[12px]">Your Notifications</h1>
                    <div className="overflow-y-auto h-[600px]">
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                        <div className="flex flex-col text-[14px] font-normal hover:font-bold hover:cursor-pointer hover:bg-[#ccc] pl-[27px] pr-[19px] py-[16px]">
                            <span>Dashboard Notifications will appear in this box</span>
                            <span>1 day ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute z-[5] left-0 top-0 w-[100%] h-[100%]" onClick={onClose}></div>
        </>

    )
}


export default NotificationModal;