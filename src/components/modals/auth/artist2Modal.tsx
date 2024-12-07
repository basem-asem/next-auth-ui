import React, { useState } from 'react';

import SignBtn from '@/components/buttons/signBtn';
import SearchInput from '@/components/inputs/searchInput';

const ArtistSecModal = () => {
    const searchData = [
        {
            avatar: '/images/avatar.png',
            text: 'user'
        }, {
            avatar: '/images/avatar.png',
            text: 'GALENCIA'
        }, {
            avatar: '/images/avatar.png',
            text: 'first user'
        }, {
            avatar: '/images/avatar.png',
            text: 'Second User'
        }, {
            avatar: '/images/avatar.png',
            text: 'User2'
        }
    ]

    const [searchValue, setSearchValue] = useState('');
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [filterData, setFilterData] = useState<any>([]);
    const [isFocus, setIsFocus] = useState(false);

    const onSearchInputChange = (text: string) => {
        if (selectedUser) {
            return;
        }
        setSearchValue(text);

        const _filterData = searchData.filter((s: any) => s.text.toLowerCase().startsWith(text.toLowerCase()));
        setFilterData(_filterData);
    }

    const onSelectFocus = () => {
        setIsFocus(true);
        const _filterData = searchData.filter((s: any) => s.text.toLowerCase().startsWith(searchValue.toLowerCase()));
        setFilterData(_filterData);
    }

    const onSelectBlur = () => {
        setTimeout(() => {
            setIsFocus(false)
        }, 100)
    }

    const handleSelect = (text: string) => {
        setSearchValue(text);
        const _selectedUser = searchData.find((s) => s.text === text);
        setSelectedUser(_selectedUser);
    }

    const handleDelete = () => {
        setSearchValue('');
        setSelectedUser(null);
    }

    return (
        <>
            <div className="flex justify-center w-full">
                <div className='w-[49px] h-[49px] border border-[#A9A9A9] flex justify-center items-center text-[20px] hover:bg-[#141414] rounded-full cursor-pointer'>+</div>
            </div>
            <h1 className="text-center mt-[5px] text-[36px] sm:text-[56px] font-extrabold text-[#ffffff]">Let's get you started</h1>
            <p className="text-center mt-[20px] text-[18px] text-[#ffffffd6]">We just need a few details from you to get started</p>
            <div className="w-full max-w-[525px] rounded-[30px] pt-[40px] pb-[23px] px-[20px] sm:px-[63px] mt-[20px] text-center">
                <p className="text-white text-[14px] text-left">Find Spotify artist</p>
                <div className="relative flex flex-col justify-center gap-[15px] mt-[5px]">
                    <SearchInput placeholder="Type artist name" _class={`${selectedUser ? 'pl-[48px]' : 'pl-[15px]'}`} onFocus={onSelectFocus} onBlur={onSelectBlur} value={searchValue} action={onSearchInputChange} />
                    {selectedUser && <img src={selectedUser.avatar} alt='image' className='absolute left-[10px] top-[50%] -translate-y-[50%]' width={30} />}
                    {searchValue !== '' && <span className='absolute w-[30px] h-[30px] right-[10px] top-[50%] -translate-y-[50%] text-[24px] pl-[2px] pt-[2px] text-white rounded-full hover:bg-[#3f3f3f] cursor-pointer flex justify-center items-center' onClick={handleDelete}>&times;</span>}
                    {
                        isFocus &&
                        <div className='absolute top-[50px] left-0 w-full px-[10px]'>
                            <div className='bg-black rounded-[10px] overflow-hidden'>
                                {
                                    filterData.map((data: any, index: number) => (
                                        <div key={index} className="hover:bg-[#414141e6] cursor-pointer py-[10px] px-[20px] flex justify-start items-center gap-[15px]" onClick={() => { handleSelect(data.text) }}>
                                            <img src={data.avatar} alt='image' />
                                            <p>{data.text}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>
                <SignBtn _class="mt-[25px] mb-[25px]">Finish</SignBtn>
            </div>
        </>
    )
}

export default ArtistSecModal;