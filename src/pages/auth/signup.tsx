import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import AuthContainer from "@/components/containers/authContainer";
import AuthBg from "@/components/backgrounds/authBg";
import AuthHeader from "@/components/headers/authHeader";
import SignBtn from "@/components/buttons/signBtn";
import BasicInput from "@/components/inputs/basicInput";
import SocialLoginBtn from "@/components/buttons/socialLoginBtn";

import { isValidEmail } from "@/utils/common";

const SignUp = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleInput = (text: string) => {
        setEmailError(false);
        setEmail(text);
    }

    const onSignUp = () => {
        if (isValidEmail(email)) {
            localStorage.setItem('email', email);
            router.push('/auth/verify-email');
        } else {
            setEmailError(true);
        }
    }

    const handleBlur = () => {
        if (email !== '' && !isValidEmail(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }

    return (
        <AuthBg>
            <AuthContainer>
                <AuthHeader />
                <div className="info grid bg-[#000000e6] rounded-[30px] pt-[35px] pb-[34px] px-[34px] text-center">
                    <h1 className="text-[26px] font-bold text-[#ededed]">Sign Up</h1>
                    <BasicInput _class="mt-[25px] text-[16px]" type='email' placeholder="Email*" value={email} action={handleInput} onBlur={handleBlur} />
                    {
                        emailError && <p className="text-left text-[#ff2d2d] text-[12px] my-[5px] pl-[5px]">Invalid email address</p>
                    }
                    <SignBtn action={onSignUp}>Sign Up</SignBtn>
                    <div className="flex flex-col justify-center gap-[10px]">
                        <SocialLoginBtn><img src="/images/email.svg" alt="email" width={15} />Sign up with Google</SocialLoginBtn>
                        <SocialLoginBtn><img src="/images/facebook.svg" alt="facebook" width={15} />Sign up with Facebook</SocialLoginBtn>
                        <SocialLoginBtn><img src="/images/apple.svg" alt="apple" width={15} />Sign up with Apple</SocialLoginBtn>
                    </div>
                    <div className="flex justify-center gap-[10px] text-[14px] pt-[11px] text-[#ededed]">Have an account?<Link href={'./signin'} className="text-[#6cded3] underline">Sign in</Link></div>
                </div>
            </AuthContainer>
        </AuthBg>
    );
}


export default SignUp;