import React, { useState, useEffect, useRef } from 'react'
import countryList from 'react-select-country-list'
import { useGlobalContext } from '@/context'

const LanguageSelectBtn = ( { _class, onChange } : any ) => {

    const { state, dispatch } = useGlobalContext();

    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const options = countryList().getData();

    const optionsWithFlags = options.map((country) => ({
        ...country,
        flag: `https://flagcdn.com/w320/${country.value.toLowerCase()}.png`, // Generate flag URL
    }));

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    };

    const handleOptionClick = (key: any) => {
        
        const { label, flag } = key;

        onChange(key);
        dispatch({ type: 'l_Language', payload: { key: flag, value: label } });
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
                className={`relative px-2 py-[15px] h-[40px] border mt-[2px] border-[#686868] rounded-[8px] flex items-center justify-between cursor-pointer leading-[90%]  ${isOpen ? 'border-b-transparent rounded-b-none' : ''}`}>
                <div className='overflow-hidden w-[100px]'>
                    {
                        <div className='flex items-center gap-[5px] text-[black]'>
                            <img src={state.l_Language.key} alt="" width={20}/>
                            <p className='break-none whitespace-nowrap overflow-ellipsis'>{state.l_Language.value}</p>
                        </div>
                    }
                </div>
                <div className='absolute right-[6px] top-[50%] -translate-y-[50%] w-[20px] flex justify-center items-center'>
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
                            d="M19 9l-7 7-7-7"/>
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div className="absolute w-full z-10 pb-[10px]">
                    <div className="border-[#686868] rounded-[8px] border border-t-transparent rounded-t-none bg-white">
                        <ul className="max-h-[200px] overflow-auto text-gray-500 text-[13px]">
                            {
                                optionsWithFlags.length == 0 ?
                                    <li className="px-2 py-2 text-[black] hover:bg-gray-100 cursor-pointer">&nbsp;</li> :
                                    optionsWithFlags.map((l: any, index: number) => (
                                        <li
                                            key={index}
                                            value={l.key}
                                            onClick={() => handleOptionClick(l)}
                                            className="flex items-center gap-[10px] px-2 py-2 text-[black] hover:bg-gray-100 cursor-pointer ">
                                            <img src={l.flag} alt="" width={20}/>
                                            <span>{l.label}</span>
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


export default LanguageSelectBtn;