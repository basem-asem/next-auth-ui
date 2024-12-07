import React from "react";
import SwitchBtn from "../buttons/switchBtn";
import { useGlobalContext } from "@/context";


const NotificationSetting = () => {

    const { state, dispatch } = useGlobalContext();
    const data = [
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
        'Notification setting - This will control your setting notifying you about your latest notification' ,
    ]
    const handleChange = (index: number) => {
        const newNotifications = [...state.n_Notification];
        newNotifications[index] = !newNotifications[index];
        dispatch({ type: 'n_Notification', payload: newNotifications });
    }
    return(
        <div>
            <h2 className="text-[14px]">Configure your notifications</h2>
            <div className="mt-[30px] overflow-y-auto max-h-[450px]">
                {
                    data.map((d, i) => (
                        <div className="flex gap-[25px] mt-[20px]">
                            <SwitchBtn action={() => handleChange(i)} value= {state.n_Notification[i]}/>
                            <p className="text-[14px]">{d}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NotificationSetting