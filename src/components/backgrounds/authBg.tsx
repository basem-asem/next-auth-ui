import React from 'react';

const AuthBg = ({ children }: any) => {
    return (
        <main className="flex justify-center items-center relative h-screen">
            <img src="/images/bg.png" alt="bg" width={100} height={100} className="fixed top-0 left-0 w-full h-full min-h-screen object-cover -z-[1]" />
            {children}
        </main>
    )
}

export default AuthBg;