import React, { useState } from 'react';
import ProfilModal from '../modals/profileModal';
import NotificationModal from '../modals/notificationModal';

const Header = () => {

    const [showProfile, setShowProfile] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const onShowProfile = () => {
        setShowProfile(!showProfile);
    }

    const onShowNotification = () => {
        setShowNotification(!showNotification);
    }

    return (
        <div className="b-[white] w-[100%] bg-[white] h-[75px] px-[50px] items-center flex justify-between rounded-[20px] ">
            <img src="/images/dack-logo.png" alt="logo" width={100} height={100} className="w-[auto] h-[auto] flex" />
            <div className='flex items-center'>
                <div className='flex'>
                    <img src="/images/user/1.png" alt="user1" className='w-[45px] h-[45px] rounded-[50%] z-[4]' />
                    <img src="/images/user/2.png" alt="user1" className='w-[45px] h-[45px] rounded-[50%] ml-[-20px] z-[3]' />
                    <img src="/images/user/3.png" alt="user1" className='w-[45px] h-[45px] rounded-[50%] ml-[-20px] z-[2]' />
                    <img src="/images/user/4.png" alt="user1" className='w-[45px] h-[45px] rounded-[50%] ml-[-20px] z-[1]'/>
                </div>
                <div className='flex items-center rounded-[17px] border border-[#979797] h-[33px] px-[12px] py-[3px] gap-[14px] ml-[12px]'>
                    <span className='text-[20px] font-normal'> + </span>
                    <span className='text-[14px] font-normal'> Invite </span>
                </div>
                <div className='flex ml-[52px] hover:cursor-pointer' onClick={onShowNotification}>
                    <div className='relative flex'>
                        <img src="/images/alarm.svg" alt="user1" className='w-[23px] h-[25px]' />
                        <div className='absolute bg-[#DFFB48] rounded-[50%] w-[12px] h-[12px] top-[-5px] right-0'></div>
                    </div>
                    {
                        showNotification ? <NotificationModal onClose={() => setShowNotification(false)}/> : <></>
                    }
                </div>
                <div className='hover:cursor-pointer' onClick={onShowProfile}>
                    <img src="/images/user/0.png" alt="user1" className='w-[60px] h-[60px] rounded-[50%] ml-[27px]' />
                </div>
                {
                    showProfile && <ProfilModal onClose={() => setShowProfile(false)}/>
                }
            </div>
        </div>
    )
}

export default Header;