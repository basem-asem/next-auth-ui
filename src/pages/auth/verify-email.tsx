import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import AuthBg from '@/components/backgrounds/authBg';
import AuthHeader from '@/components/headers/authHeader';
import WelcomeContainer from '@/components/containers/welcomeContainer';

const VerifyEmail = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('./welcome');
        }, 1000)
    }, [])
    return (
        <AuthBg>
            <WelcomeContainer>
                <AuthHeader />
                <h1 className="text-center text-white text-[34px] mt-[22px] font-bold">Verify your email address</h1>
                <p className="text-center text-white text-[15px] mt-[12px]">Before we get started, we just need you to verify your email address. </p>
                <div className='w-full flex justify-center mt-[50px]'><img src='/images/email-verify.svg' alt='email verify' /></div>
            </WelcomeContainer>
        </AuthBg>
    )
}

export default VerifyEmail;