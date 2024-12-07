import React, { useEffect, useRef, useState } from "react";


const DropDown = ({ _class, onSelectChange  }: { _class: string, onSelectChange : any }) => {
    const data = [
        {
            title: 'Owner',
            src: '/images/owner.svg',
            hoverBg: '#F0F0F0',
            content: 'Owns Artist Teams, change access permissions, collaborate, Edit'
        },
        {
            title: 'Admin',
            src: '/images/admin.svg',
            hoverBg: '#F0F0F0',
            content: 'Can change access permissions, collaborate, Edit, View Artist progress'
        },
        {
            title: 'Collaborator',
            src: '/images/collaborator.png',
            hoverBg: '#F0F0F0',
            content: 'Can comment, Edit Projects, and view all Artists progression'
        },
        {
            title: 'Viewer',
            src: '/images/viewer.png',
            hoverBg: '#F0F0F0',
            content: 'Can view but can\'t Edit Artists Artist Progression'
        }
    ]
    const handleSelectChange = (item: string) => {
        onSelectChange(item);
    };
    
    return (
        <div className={_class}>
            {
                data.map((d, i) => (
                    <div key={i} className="flex items-start justify-center py-[10px] pl-[18px] pr-[10px] gap-[10px] hover:bg-[#F0F0F0] hover:cursor-pointer" onClick={(e) => {handleSelectChange(d.title)}}>
                        <img src={d.src} alt="" width="22px" height="20px" className="w-[25px]"/>
                        <div className="w-full">
                            <h1 className="font-bold text-[12px]">{d.title}</h1>
                            <p className="text-[11px] leading-[140%]">{d.content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );

}


export default DropDown;