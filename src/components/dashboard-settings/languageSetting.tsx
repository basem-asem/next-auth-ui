import React, { useMemo, useRef, useState } from "react";

import LanguageSelectBtn from "../buttons/languageSelectBtn";
import TimeZoneSelectBtn from "../buttons/timeZoneSelectBtn";


const LanguageSetting = () => {

    const handleLanguageChange = (languageData: any) => {
        
    };

    const handleTimezoneChange = ( timezoneData: any ) => {

    }

    return(
        <div>
            <h2 className="text-[18px]">Language & Region</h2>
            <p className="text-[14px] text-[#878787]">Control your language and region settings</p>
            <div className="border-b-2 pt-[16px] pb-[25px] w-[50%] flex justify-between items-center">
                <h2>Language</h2>
                <LanguageSelectBtn _class="w-[280px]" onChange={handleLanguageChange} />
            </div>
            <div className="pt-[35px] flex items-start justify-between w-[50%] timezone">
                <div>
                    <h2 className="text-[18px]">Timezone</h2>
                    <p className="text-[14px] text-[#878787]">Your current timezone in your region</p>
                </div> 
                <TimeZoneSelectBtn _class="w-[280px]" onChange={handleTimezoneChange} />
            </div>
        </div>
    )
}

export default LanguageSetting;