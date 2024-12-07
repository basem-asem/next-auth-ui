import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import DashboardBg from "@/components/backgrounds/dashboardBg";
import DashboardContainer from "@/components/containers/dashboardContainer";
import BillingSetting from "@/components/dashboard-settings/billingSetting";
import GeneralSetting from "@/components/dashboard-settings/generalSetting";
import HelpSetting from "@/components/dashboard-settings/helpSetting";
import LanguageSetting from "@/components/dashboard-settings/languageSetting";
import NotificationSetting from "@/components/dashboard-settings/notificationSetting";
import OrderHistorySetting from "@/components/dashboard-settings/orderSetting";
import TeamSetting from "@/components/dashboard-settings/teamSetting";
import Header from "@/components/headers/header";


const Tab = ({ text, active, value, handleClick, _className }: any) => {
    return (
        <div
            className={`text-[14px] cursor-pointer pb-2 border-b-[2px] font-semibold relative -bottom-[2px] px-[10px] ${value === active
                ? " text-[#000000] border-b-[#000]"
                : " text-[#0000004d] border-b-transparent"
                } ${_className ? _className : ''}`}
            onClick={() => handleClick(value)}
        >
            {text}
        </div>
    )
}

const Setting = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);

    return (
        <DashboardContainer>
            <Header />
            <DashboardBg>
                <div className="pl-[34px] pr-[90px] pt-[60px] pb-[34px]">
                    <h1 className="font-[500] text-[16px] text-[#000] font-LOGOTYPE">SETTINGS</h1>
                    <div className="flex gap-[20px] items-center mt-[30px] border-b border-b-[#C3C5C5]">
                        <Tab text={t("General")} active={activeTab} value={0} handleClick={setActiveTab} />
                        <Tab text={t("Plans & Billing")} active={activeTab} value={1} handleClick={setActiveTab} />
                        <Tab text={t("Notifications")} active={activeTab} value={2} handleClick={setActiveTab} />
                        <Tab text={t("Team")} active={activeTab} value={3} handleClick={setActiveTab} />
                        <Tab text={t("Language")} active={activeTab} value={4} handleClick={setActiveTab} />
                        <Tab text={t("Order History")} active={activeTab} value={5} handleClick={setActiveTab} />
                        <Tab text={t("Help")} active={activeTab} value={6} handleClick={setActiveTab} />
                    </div>
                    <div className="pl-[25px] pt-[30px] pr-[10px] pb-[10px]">
                        {activeTab === 0 && <GeneralSetting />}
                        {activeTab === 1 && <BillingSetting />}
                        {activeTab === 2 && <NotificationSetting />}
                        {activeTab === 3 && <TeamSetting />}
                        {activeTab === 4 && <LanguageSetting />}
                        {activeTab === 5 && <OrderHistorySetting />}
                        {activeTab === 6 && <HelpSetting />}
                    </div>
                </div>
            </DashboardBg>
        </DashboardContainer>
    )
}

export default Setting