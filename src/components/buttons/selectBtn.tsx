import React, { useEffect, useRef, useState } from "react";

const SelectBtn = ({ _class, label, list, value, onChange, isLabel = true }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    };

    const handleOptionClick = (key: string) => {
        onChange(key);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const [isActived, setIsActived] = useState(false)

    return (
        <div ref={dropdownRef} className={`${_class} relative`}>
            {isLabel && <p className='text-[12px]'>{label}</p>}
            <div
                onClick={toggleDropdown}
                className={`px-4 py-[15px] h-[40px] border mt-[2px] rounded-[8px] flex items-center justify-between cursor-pointer leading-[90%] focus:outline-none focus:border-black ${value ? 'text-black' : 'text-gray-500'} ${isOpen ? 'border-b-transparent rounded-b-none' : ''} ${
                    isActived ? '!border-[black]' : 'border-[#8b8a8a]'
                  }`}
                  onFocus={() => setIsActived(true)}
                  onBlur={() => setIsActived(false)}
                  >
                <span className="overflow-hidden text-[13px]">{value?.value ? value?.value : label}</span>
                <svg
                    className={`ml-2 w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"/>
                </svg>
            </div>
            {isOpen && (
                <div className="absolute w-full z-10 pb-[10px]">
                    <div className="border-[#8b8a8a] rounded-[8px] border border-t-transparent rounded-t-none bg-white focus:outline-none focus:border-black">
                        <ul className="max-h-[140px] overflow-auto text-gray-500 text-[13px]">
                            {
                                list.length == 0 ?
                                    <li className="px-4 py-2 text-[black] hover:bg-gray-100 cursor-pointer">&nbsp;</li> :
                                    list.map((l: any, index: number) => (
                                        <li
                                            key={index}
                                            value={l.key}
                                            onClick={() => handleOptionClick(l)}
                                            className="px-4 py-2 text-[black] hover:bg-gray-100 cursor-pointer ">
                                            {l.value}
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );

}


export default SelectBtn;