import React, { useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/signin');
  }, [])

  return (
    <div className="px-[10px]">
      <h1 className="text-center text-[32px] sm:text-[42px] mt-[100px] text-black">Welcome to the Home Page!</h1>
      <h2 className="text-center text-[24px] mt-[50px] text-black"><Link href="/auth/signin" className="hover:underline">Sign In</Link></h2>
      <h2 className="text-center text-[24px] mt-[20px] text-black"><Link href="/auth/signup" className="hover:underline">Sign Up</Link></h2>
    </div>
  )
}

export default Home;