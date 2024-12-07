import React, { useState, useRef, useEffect } from "react";

import InviteUserModal from "../modals/dashboard-settings/inviteUserModal";
import MemberDeleteModal from "@/components/modals/dashboard-settings/memberDeleteModal";
import AddTeamModal from "../modals/dashboard-settings/addTeamModal";

import TeamTr from "../table/teamTr";

const TeamSetting = () => {
    
    const data = [
        {
            img: "/images/avatar1.png",
            name: "Warner Music",
            role: "admin",
            btn: "Remove"
        },{
            img: "/images/avatar1.png",
            name: "Warner Music",
            role: "user",
            btn: "Remove"
        },{
            img: "/images/avatar1.png",
            name: "Warner Music",
            role: "admin",
            btn: "Remove"
        }
    ]

    const [showInviteModal, setShowInviteModal] = useState(false);
    const [showAddTeamModal, setAddTeamModal] = useState(false);

    const openInviteModal = () => setShowInviteModal(!showInviteModal);

    const openAddTeamModal = () => setAddTeamModal(!showAddTeamModal);

    const [ showMemberDelModal, setShowMemberDelModal ] = useState(false);

    const handleMemberDelModal = () => {
        setShowMemberDelModal(true)
    }

    const closeMemberDelModal = () => setShowMemberDelModal(false);

    

    return(
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th className="text-[14px] ">TEAM NAME</th>
                        <th className="text-[14px] text-center">Role</th>
                        <th className="text-[14px] text-end pr-7">Permissions</th>
                        <th className="text-[14px] justify-end flex">
                            <div className="flex gap-2 justify-end">
                                {/* <div className="border rounded-[17px] text-center ml-[auto] cursor-pointer border-[black] w-[110px] h-[24px]">
                                    + New Team
                                </div> */}
                                <div className="border rounded-[17px] text-center ml-[auto] cursor-pointer border-[black] w-[110px] h-[24px]"  onClick={openAddTeamModal}>
                                    + New Team
                                </div>
                                <div className="border rounded-[17px] text-center ml-[auto] cursor-pointer border-[black] w-[110px] h-[24px]" onClick={openInviteModal}>
                                    + Invite User
                                    
                                </div>
                                {
                                    showInviteModal && <InviteUserModal handleChange={openInviteModal}/>
                                }

                                {
                                    showAddTeamModal && <AddTeamModal handleChange={openAddTeamModal}/>
                                }
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((i, k) => (
                        <TeamTr key={k} item={i} showModal={handleMemberDelModal}/>
                    ))}
                    </tbody>
            </table>
            {
                showMemberDelModal ? <MemberDeleteModal handleClose={closeMemberDelModal}/> : <></>
            }
            
        </div>
    )
}

export default TeamSetting