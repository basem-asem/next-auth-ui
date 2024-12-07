import React, { useEffect } from "react";

import Cookies from "@/components/otherComponents/cookies";
import NeccessaryCookies from "@/components/otherComponents/neccessary-cookies";
import ColorPicker from "@/components/otherComponents/colorPickerModal";
import ChartCardCarosel from "@/components/otherComponents/chartCardCarosel";
import NotificationModal from "@/components/modals/notificationModal";
import ProfilModal from "@/components/modals/profileModal";
import SupportBox from "@/components/modals/supportBox";
import CommentsSidebar from "@/components/modals/comments";
import Graph from "@/components/modals/graph";
import Team from "@/components/modals/team";
import SmallSupport from "@/components/modals/smallSupportBox";


const Modals = () => {
    return(
        <div className="flex flex-col bg-[black] p-[30px] gap-[30px] ">
            {/* <Cookies/>
            <div className="relative">
                <NeccessaryCookies/>
            </div>
            <ColorPicker/>
            <ChartCardCarosel/>
            <div className="relative w-[45%]">
                <NotificationModal onClose={() => {}}/>
            </div>
            <div className="relative w-[17%]">
                <ProfilModal onClose={() => {}}/>
            </div> */}
              <SupportBox />
            <SmallSupport/>
            <CommentsSidebar  />
            <Graph/>
            <Team/>
        </div>
    )
}

export default Modals;