import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Country, State } from 'country-state-city';

import SignBtn from '@/components/buttons/signBtn';
import BasicInPut from '@/components/inputs/basicInput';
import BasicSelect from '@/components/inputs/basicSelect';

const UserInfoModal = ({ userRole, setModalPage }: any) => {
    const artistNumberList = [
        {
            key: 'default',
            value: 'Number of Artists'
        }, {
            key: '1-3',
            value: '1 - 3'
        }, {
            key: '4-9',
            value: '4 - 9'
        }, {
            key: '10-20',
            value: '10 - 20'
        }, {
            key: '21-50',
            value: '21 - 50'
        }
        , {
            key: '50+',
            value: '50 +'
        }
    ]

    const [email, setEmail] = useState('');
    const [states, setStates] = useState<any>([{ key: '', value: 'State' }]);
    const [countries, setCountries] = useState<any>([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const router = useRouter();

    const handleCountryChange = (e: any) => {
        const countryCode = e.target.value;
        setSelectedCountry(countryCode);
        const _state = State.getStatesOfCountry(countryCode).map(s => {
            return {
                key: s.isoCode,
                value: s.name
            }
        });
        setStates([{ key: '', value: 'State' }, ..._state]);
    };

    const handleNext = () => {
        if (userRole === 'artist') {
            setModalPage('artist-2');
        } else {
            router.push('/auth/signup');
        }
    }

    useEffect(() => {
        setEmail(localStorage.getItem('email') ?? '');

        const _countries = Country.getAllCountries().map(c => {
            return {
                key: c.isoCode,
                value: c.name
            }
        });

        setCountries([{ key: '', value: 'Country' }, ..._countries]);
    }, [])

    return (
        <>
            <div className="flex justify-center w-full">
                <div className='w-[49px] h-[49px] border border-[#A9A9A9] flex justify-center items-center text-[20px] hover:bg-[#141414] rounded-full cursor-pointer'>+</div>
            </div>
            <h1 className="text-center mt-[5px] text-[36px] sm:text-[56px] font-extrabold text-[#ffffff]">Let's get you started</h1>
            <div className="w-full overflow-auto max-w-[405px] rounded-[30px] py-[10px] px-[10px] mt-[30px] text-center">
                <div className="flex flex-col justify-center gap-[15px]">
                    <BasicInPut value={email} placeholder="Name@gmail.com" disabled={true} _class="mt-0" />
                    {
                        userRole === 'artist' && <>
                            <BasicInPut placeholder="Artist name" />
                            <BasicInPut placeholder="Genre" />
                            <BasicInPut placeholder="Age" />
                        </>
                    }
                    {
                        userRole === 'manager' && <>
                            <BasicInPut placeholder="Name" />
                            <BasicInPut placeholder="Instagram" />
                            <BasicSelect _class='w-full' list={artistNumberList} />
                            <BasicInPut placeholder="Linkedin" />
                        </>
                    }
                    {
                        userRole === 'record_label' && <>
                            <BasicInPut placeholder="Company Name" />
                            <BasicInPut placeholder="Your Name" />
                            <BasicSelect _class='w-full' list={artistNumberList} />
                            <BasicInPut placeholder="Website" />
                        </>
                    }
                    {
                        userRole === 'music_expert' && <>
                            <BasicInPut placeholder="Name" />
                            <BasicInPut placeholder="Instagram or Website" />
                            <BasicInPut placeholder="Company (optional)" />
                        </>
                    }

                    <div className='flex justify-between items-end gap-[21px]'>
                        <BasicInPut placeholder="City" _class="w-full" />
                        <BasicSelect _class='w-full' list={states} />
                    </div>
                    <BasicSelect value={selectedCountry} onChange={handleCountryChange} list={countries} />
                </div>
                <SignBtn _class="mt-[15px] mb-[0]" action={handleNext}>{userRole === 'artist' ? 'Next' : 'Finish'}</SignBtn>
            </div>
        </>
    )
}

export default UserInfoModal;