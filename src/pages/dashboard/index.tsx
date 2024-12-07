import React, { useState } from "react";

import Header from "@/components/headers/header";
import DashboardBg from "@/components/backgrounds/dashboardBg";
import DashboardContainer from "@/components/containers/dashboardContainer";
import AuthModalBg from "@/components/modals/auth/authModalBg";

import UserRoleModal from "@/components/modals/auth/userRoleModal";
import UserInfoModal from "@/components/modals/auth/userInfoModal";
import ArtistSecModal from "@/components/modals/auth/artist2Modal";
import SupportBox from "@/components/modals/supportBox";
import CommentsSidebar from "@/components/modals/comments";
import Graph from "@/components/modals/graph";
import Team from "@/components/modals/team";
import SmallSupport from "@/components/modals/smallSupportBox";

const SignIn = () => {
    const [modalPage, setModalPage] = useState('role');
    const [userRole, setUserRole] = useState('');

    return (
        <DashboardContainer>
            <Header />
            <DashboardBg>
                <AuthModalBg>
                    {
                        modalPage === 'role' && <UserRoleModal userRole={userRole} setModalPage={setModalPage} setUserRole={setUserRole} />
                    }
                    {
                        modalPage === 'info' && <UserInfoModal userRole={userRole} setModalPage={setModalPage} />
                    }
                    {
                        modalPage === 'artist-2' && <ArtistSecModal />
                    }
                    
                </AuthModalBg>
            </DashboardBg>
            <div className="absolute bottom-0 right-0 mb-3 mr-3 z-50">
            {/* <SupportBox /> */}
            {/* <CommentsSidebar  /> */}
            {/* <Graph/> */}
            {/* <Team/> */}
            <SmallSupport/>
            </div>
        </DashboardContainer>
    );
}

export default SignIn;
