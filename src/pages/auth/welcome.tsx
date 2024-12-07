import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import AuthBg from '@/components/backgrounds/authBg';
import AuthHeader from '@/components/headers/authHeader';
import WelcomeContainer from '@/components/containers/welcomeContainer';
import { sleep } from '@/utils/common';

const Welcome = () => {
    const router = useRouter();
    const [loadWidth, setLoadWidth] = useState(0);

    useEffect(() => {
        setLoadWidth(0);
        (async () => {
            for (let i = 0; i < 50; i++) {
                setLoadWidth(prev => { return prev + 2 });
                await sleep(30);
            }

            await sleep(1000);
            router.push('/dashboard');
        })();
    }, [])

    return (
        <AuthBg>
            <WelcomeContainer>
                <AuthHeader />
                <h1 className="text-center text-white text-[34px] mt-[22px] font-bold">Welcome</h1>
                <div className="w-[285px] h-[25px] mx-auto mt-[10px] border-[2px] p-[2px] border-[#fff] rounded-[30px] bg-transparent overflow-hidden">
                    <div className='h-full bg-white rounded-[30px] transition-all duration-75' style={{ width: `${loadWidth}%` }}></div>
                </div>
            </WelcomeContainer>
        </AuthBg>
    )
}

export default Welcome;