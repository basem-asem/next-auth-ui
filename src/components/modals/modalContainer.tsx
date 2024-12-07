import React from 'react';

const ModalContainer = ({ clickAction, children }: any) => {
    return (
        <>
            <div className='h-screen w-screen fixed top-0 left-0 bg-[#00000040] z-100000' onClick={clickAction}></div>
            {children}
        </>
    )
}

export default ModalContainer;