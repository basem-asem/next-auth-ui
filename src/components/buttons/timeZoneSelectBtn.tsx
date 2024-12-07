import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment-timezone';
import { useGlobalContext } from '@/context'

const TimeZoneSelectBtn = ({ _class, onChange }: any) => {

    const { state, dispatch } = useGlobalContext();

    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const timezones = moment.tz.names();

    const getOffset = (tz: string): string => {
        const now = moment.tz(tz);
        const offset = now.utcOffset();
        const hours = Math.floor(Math.abs(offset) / 60);
        const minutes = Math.abs(offset) % 60;
        const sign = offset >= 0 ? '+' : '-';
        return `(GMT${sign}${hours}:${minutes < 10 ? '0' : ''}${minutes})`;
    };


    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    };

    const handleOptionClick = (key: string) => {
        const val = key.split(' ');
        dispatch({ type: 'l_Timezone', payload: { key: val[0], value: val[1] } });
        onChange(key)
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

    return (
        <div ref={dropdownRef} className={`${_class} relative`}>
            <div
                onClick={toggleDropdown}
                className={`relative px-2 py-[15px] h-[40px] border mt-[2px] border-[#686868] rounded-[8px] flex items-center justify-between cursor-pointer leading-[90%] pr-[70px] ${isOpen ? 'border-b-transparent rounded-b-none' : ''}`}>
                {
                    <div className='flex gap-[5px] items-center justify-center text-[14px]'>
                        <span className='min-w-[80px]'>{state.l_Timezone.key}</span>
                        <p className='w-[150px] break-words'>{state.l_Timezone.value}</p>
                    </div>
                }
                <div className='flex justify-center items-center w-[20px] absolute right-[6px] top-[50%] -translate-y-[50%] '>
                    <svg
                        className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div className="absolute w-full z-10 pb-[10px]">
                    <div className="border-[#686868] rounded-[8px] border border-t-transparent rounded-t-none bg-white">
                        <ul className="max-h-[200px] overflow-auto text-gray-500 text-[13px]">
                            {
                                timezones.length == 0 ?
                                    <li className="px-2 py-2 text-[black] hover:bg-gray-100 cursor-pointer">&nbsp;</li> :
                                    timezones.map((tz: any, index: number) => (
                                        <li
                                            key={index}
                                            value={tz}
                                            onClick={() => handleOptionClick(getOffset(tz) + " " + tz)}
                                            className="flex items-center gap-[10px] px-4 py-2 text-[black] hover:bg-gray-100 cursor-pointer ">
                                            <span>{getOffset(tz)} {tz}</span>
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


export default TimeZoneSelectBtn;