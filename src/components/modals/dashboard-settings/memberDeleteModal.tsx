import React from "react";


const MemberDeleteModal = ({ handleClose } : {handleClose : () => void}) => {
    return (
        <div className="absolute top-[50%] left-[50%] w-[400px] h-[260px] rounded-[6px] bg-[white] flex flex-col border border-[#ddd] p-[15px] gap-[5px] transform -translate-x-1/2 -translate-y-1/2">
            <div className="ml-auto  hover:cursor-pointer hover:opacity-80" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 72 72">
                    <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
                </svg>
            </div>
            <div className="flex flex-col  items-center text-center gap-[10px]">
                <div className="bg-[#d9d9d9] w-[36px] h-[36px] rounded-[50%] " style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 4px 8px 0px"}}></div>
                <span>Member</span>
                <span>Are you sure you would like to remove this member from the team?</span>
            </div>
            <button className="rounded-[10px] bg-[#d84545] py-[5px] text-[white] text-[16px] mt-[20px]">Remove</button>
        </div>
    )
}

export default MemberDeleteModal;