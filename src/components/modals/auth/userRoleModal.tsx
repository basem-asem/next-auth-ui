import React from 'react';

import BasicBtn from '@/components/buttons/basicBtn';
import SignBtn from '@/components/buttons/signBtn';

const UserRoleModal = ({ userRole, setModalPage, setUserRole }: any) => {
    const userRoleList = [
        {
            key: 'artist',
            label: 'Artist'
        }, {
            key: 'manager',
            label: 'Manager / A&R'
        }, {
            key: 'record_label',
            label: 'Record Label'
        }, {
            key: 'music_expert',
            label: 'Music Expert'
        }
    ]

    const onNextClick = () => {
        if (userRole !== '') {
            setModalPage("info");
        }
    }

    return (
        <>
            <div className="flex justify-center w-full">
            <div className='w-[49px] h-[49px] border border-[#A9A9A9] flex justify-center items-center text-[20px] hover:bg-[#141414] text-[#ededed] rounded-full cursor-pointer'>+</div>
            </div>
            <h1 className="text-center mt-[5px] text-[36px] sm:text-[56px] font-extrabold text-[#ffffff]">Let's get you started</h1>
            <p className="text-center mt-[20px] text-[18px] text-[#ffffffd6]">We just need a few details from you to get started</p>
            <div className="w-full overflow-auto max-w-[405px] rounded-[30px] pt-[20px] pb-[23px] px-[10px] mt-[20px] text-center">
                <div className="flex flex-col justify-center gap-[15px] px-0 sm:px-[23px]">
                    {
                        userRoleList.map((role: any, index: number) => (
                            <BasicBtn key={index} action={() => { setUserRole(role.key) }} _class={`${userRole === role.key ? 'bg-[white] text-black' : 'bg-transparent text-[#ededed]'}`}>{role.label}</BasicBtn>
                        ))
                    }
                </div>
                <SignBtn _class="mt-[25px] mb-[25px]" action={onNextClick}>Next</SignBtn>
            </div>
        </>
    )
}

export default UserRoleModal;