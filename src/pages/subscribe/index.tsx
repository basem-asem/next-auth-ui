"use client"; // This makes the component a Client Component

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="relative w-1/2 h-screen">
        <Image
          src="/images/sub.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/LogoTitle.png"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
          />
          <p className="text-xs pt-16">Personal Music Career Coach - Speed your Music Career</p>
        </div>
      </div>

      <div className="w-1/2 max-w-3xl mx-auto p-6 flex flex-col items-center bg-black text-white">
        <div className="space-y-3 w-full mb-3 bg-[#131313] p-3 rounded-lg">
          {[
            "Up to 25% discounts on playlist pitches",
            "Run unlimited ads with no booking fees on TikTok, Instagram, and Facebook",
            "Create your own website and fan hub",
            "1:1 access to our marketing experts",
            "Take marketing actions on personalized data insights",
            "NEW + MORE including partner discounts, unlimited streaming and social data, and our new artist comparison feature",
          ].map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className={`flex items-start space-x-2 ${index === 2 ? "relative" : ""}`}>
                <div className="w-5 h-5 flex items-center justify-center rounded-full">
                  <span className="text-xs text-white">✓</span>
                </div>
                <p className={`text-xs leading-tight`}>
                  {feature}
                </p>
                  {index === 2 && (
                    <span className="absolute text-xs text-[#E71BBB] bg-[#471B4F] px-1.5 py-0.5 rounded-md ml-2 right-0">
                      NEW
                    </span>
                  )}
              </div>
              <span className={`w-full h-0.5 bg-gray-500 mt-2  ${index === 5 ? "hidden" : ""}`}></span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2 w-full">
          <h2 className="text-xl font-bold">Choose a plan to continue</h2>
          <p className="text-white text-sm">
            Take your music company to the next level with subscription plans
          </p>

          <div className="flex justify-center space-x-3 mt-4">
            <div className="border border-[#E71BBB] rounded-lg text-center w-1/2">
              <div className="text-black text-xs font-semibold mb-1 p-2 bg-[#E71BBB]">
                1 week free
              </div>
              <h3 className="text-2xl font-bold">$99.99</h3>
              <p className="py-1 text-xs">billed annually</p>
              <p className="pb-2 text-xs">(8.33 per month)</p>
            </div>
            <div className="rounded-lg text-center w-1/2">
              <div className=" text-xs font-semibold mb-1 p-2 bg-[#383838] rounded-t-lg">
                Standard plan
              </div>
              <h3 className="text-2xl font-bold">$99.99</h3>
              <p className="py-1 text-xs">billed annually</p>
            </div>
          </div>

          <p className="text-white text-xs mt-4">
            We will send you an email reminder 3 days before your trial ends
          </p>
          <button className="bg-white text-black font-bold py-2 px-4 rounded-lg mt-3 text-sm" onClick={() => router.push("/about")}>
            Start free trial
          </button>

          <p className="text-white text-xs mt-3 text-center">
            Start my free trial. You won’t be charged until your free trial ends. If
            you do not cancel your free trial by 28/11/2024, you will be charged based
            on the plan you select. You can cancel your free trial at any time in your
            account settings.
          </p>
        </div>
      </div>

    </div>
  );
}
