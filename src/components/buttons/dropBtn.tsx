import React, { useState, useRef, useEffect } from "react";
import DropDown from "./dropDown";

const DropBtn = ({label} : {label: string} ) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [ isOpen, setIsOpen ] = useState(false);
    
    const onOpenModal = () => { 
        setIsOpen(!isOpen) 
    }
    const onCloseModal = () => { setIsOpen(false) }

    const [selectItem, setSelectItem] = useState<string>('');

    const handleSelectChange = (item: string) => {
        setSelectItem(item);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onCloseModal()
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return(
        <div ref={dropdownRef} className="relative flex items-center w-[145px] h-[30px] rounded-[20px] border hover:bg-gray-100 hover:cursor-pointer ml-auto" onClick={onOpenModal}>
            <div className="relative flex items-center justify-center pl-[16px] pr-[25px] w-full">
                <span>{selectItem != '' ? selectItem : label}</span>
                <div className="absolute right-[7px] w-[10px]">
                    <img src="/images/triangle.png" alt="" width="10px" height="8px"/>
                </div>
            </div>
            {
                isOpen && <DropDown _class="absolute flex flex-col items-center top-[30px] right-0 rounded-[7px] bg-[white] border border-[#D2D2D2] w-[270px] overflow-y-auto z-[1]" onSelectChange={handleSelectChange}/>
            }
        </div>
    )
}

export default DropBtn;