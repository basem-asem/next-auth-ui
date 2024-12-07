import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import AuthBg from "@/components/backgrounds/authBg";
import AuthHeader from "@/components/headers/authHeader";
import SignBtn from "@/components/buttons/signBtn";
import AuthContainer from "@/components/containers/authContainer";
import SocialLoginBtn from "@/components/buttons/socialLoginBtn";
import BasicInput from "@/components/inputs/basicInput";

import { isValidEmail } from "@/utils/common";

const SignIn = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleInput = (text: string) => {
        setEmailError(false);
        setEmail(text);
    }

    const onSignIn = () => {
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
                    <h1 className="text-[26px] font-bold text-[#ededed]">Sign In</h1>
                    <BasicInput _class="mt-[25px] text-[16px]" type='email' placeholder="Email*" value={email} action={handleInput} onBlur={handleBlur} />
                    {
                        emailError && <p className="text-left text-[#ff2d2d] text-[12px] my-[5px] pl-[5px]">Invalid email address</p>
                    }
                    <SignBtn action={onSignIn}>Sign In</SignBtn>
                    <div className="flex flex-col justify-center gap-[10px]">
                        <SocialLoginBtn><img src="/images/email.svg" alt="email" width={15} />Sign in with Google</SocialLoginBtn>
                        <SocialLoginBtn><img src="/images/facebook.svg" alt="facebook" width={15} />Sign in with Facebook</SocialLoginBtn>
                        <SocialLoginBtn><img src="/images/apple.svg" alt="apple" width={15} />Sign in with Apple</SocialLoginBtn>
                    </div>
                    <p className="flex justify-center gap-[10px] text-[14px] mt-[11px] text-[#ededed]">Don't have an account?<Link href={'./signup'} className="text-[#6cded3] underline">Sign up</Link></p>
                    {/* <Link href={'./forgot-password'} className="text-[#6cded3] underline mt-[15px] text-[14px]">Forgot Password?</Link> */}
                </div>
            </AuthContainer>
        </AuthBg>
    );
}

export default SignIn;
