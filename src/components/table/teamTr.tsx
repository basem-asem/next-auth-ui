import React, { useState } from "react";
import DropBtn from "../buttons/dropBtn";


const TeamTr = ({ item, showModal } : { item: any, showModal: () => void}) => {

    const [ showMemberDelModal, setShowMemberDelModal ] = useState(false);

    const handleMemberDelModal = () => {
        showModal && showModal();
    }

    return(
        <tr >
            <td>
                <div className="flex gap-[20px] items-center">
                    <img src={item.img} />
                    <div className="text-[14px]" >{item.name}</div>
                </div>
            </td>
            <td className="text-[14px] text-center">{item.role}</td>
            <td className="text-[14px] text-start">
                <DropBtn label="Select Role"/>
            </td>
            <td className="text-end">
                <span className="text-[14px] cursor-pointer" onClick={handleMemberDelModal}>{item.btn}</span>
            </td>
        </tr>
    )
}

export default TeamTr;