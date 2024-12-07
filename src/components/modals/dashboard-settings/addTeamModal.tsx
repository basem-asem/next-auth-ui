import React, { useEffect, useRef, useState } from "react";
import DropBtn from "@/components/buttons/dropBtn";
import SelectBtn from "@/components/buttons/selectBtn";
import ModalContainer from "../modalContainer";

const AddTeamModal = ({ handleChange }: { handleChange: any }) => {
    const accountTypes = [
        {
            key: 'artist',
            value: '(User who created team)'
        }, {
            key: 'manager',
            value: '(User who created team)'
        }, {
            key: 'record_label',
            value: '(User who created team)'
        }, {
            key: 'music_expert',
            value: '(User who created team)'
        }
    ];

    const fileInputRef = useRef<HTMLInputElement | null>(null);;
    const [file, setFile] = useState<string | null>(null);
    const [selectedAccount, setAccount] = useState<any>(null)

    const handleAccount = (accountTypes: any) => {
        setAccount(accountTypes)
    }

    const handleFileChange = (e: any) => {
        if (e.target.files[0]) {
            if (file) {
                // Clean up old URL
            }
            const newFile = URL.createObjectURL(e.target.files[0]);
            setFile(newFile);
        } else {
            console.error("+");
        }
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <ModalContainer clickAction={handleChange}>
            <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-[590px] h-[692px] rounded-[12px] border bg-[white] z-[1]' >
                <header className="h-[52px]">
                    <h1 className="text-[20px] font-medium py-[10px] text-center">Create a New Artist Team</h1>
                    <div className="w-[100%] h-[1px] bg-[#ddd]"></div>
                </header>
                <main className="h-[558px] py-[20px] px-[35px] w-[100%] flex flex-col gap-[12px]">
                    <div className='flex justify-center items-center'>
                        <div className='w-[120px] h-[120px] flex justify-center items-center rounded-full border border-[#CBCBCB] text-[24px] text-[#CBCBCB] hover:text-white bg: overflow-hidden cursor-pointer hover:bg-slate-200' onClick={handleUploadClick} ><input ref={fileInputRef} className='hidden' type="file" onChange={handleFileChange} />
                            {file ? <img src={file} alt="Preview" /> : '+'}
                        </div>
                    </div>
                    <button className="flex items-center justify-center text-[18p] border rounded-[12px] border-[#ddd] py-[8px]">Artist Team Name</button>
                    <SelectBtn label="Find Artist to Link Stats" isLabel={false}  _class="text-[18p] w-[100%]" list={accountTypes} value={selectedAccount} onChange={handleAccount} />
                    <div className="flex text-start border rounded-[12px] border-[#ddd] p-[10px] gap-[10px]">
                        <img src="/images/adduser.png" alt="" width={26} height={26} />
                        <input type="text" className="outline-none w-[70%] text-[14px]" placeholder="Enter emails or invite from HyprFly" />
                        <DropBtn label="Select Role" />
                    </div>
                    <div className="flex flex-col text-start py-[37px] gap-[16px]">
                        <h1>TEAM ACCESS</h1>
                        <div className="overflow-y-auto max-h-[120px] pr-5">
                            <div className="flex items-center justify-between gap-[20px] mb-3">
                                <div className="flex items-center justify-between gap-[20px]">
                                    <div className="w-[30px] h-[30px] bg-[#D9D9D9] rounded-[50%]"></div>
                                    <span className="text-[18px] font-medium">2 people invited</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between  gap-[20px] mb-3">
                                <div className="flex items-center justify-between gap-[20px]">
                                    <div className="w-[30px] h-[30px] bg-[#D9D9D9] rounded-[50%]"></div>
                                    <span className="text-[18px] font-medium">2 people invited</span>
                                </div>
                                <div>
                                    <span className="text-[#50A2E5]">Owner</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between  gap-[20px] mb-3">
                                <div className="flex items-center justify-between gap-[20px]">
                                    <div className="w-[30px] h-[30px] bg-[#D9D9D9] rounded-[50%]"></div>
                                    <span className="text-[18px] font-medium">2 people invited</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between  gap-[20px] mb-3">
                                <div className="flex items-center justify-between gap-[20px]">
                                    <div className="w-[30px] h-[30px] bg-[#D9D9D9] rounded-[50%]"></div>
                                    <span className="text-[18px] font-medium">2 people invited</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="h-[82px]">
                    <div className="w-[100%] h-[1px] bg-[#ddd]"></div>
                    <div className="flex justify-end">
                        <button className="flex justify-center items-center rounded-[7px] text-[16px] py-[8px] px-[23px] my-[22px] mr-[22px] text-[white] bg-[black]" onClick={handleChange}>Create New Artist Team</button>
                    </div>
                </footer>
            </div>
        </ModalContainer>
    );
};

export default AddTeamModal