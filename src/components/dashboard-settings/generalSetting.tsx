import React, { useEffect, useRef, useState } from 'react';
import { Country, State, City, ICountry } from 'country-state-city';
import { useGlobalContext } from '@/context';

import SettingInput from '../inputs/settingInput';
import SelectBtn from '../buttons/selectBtn';

const GeneralSetting = () => {

    const { state, dispatch } = useGlobalContext();

    const accountTypes = [
        {
            key: 'artist',
            value: 'Artist'
        }, {
            key: 'manager',
            value: 'Manager / A&R'
        }, {
            key: 'record_label',
            value: 'Record Label'
        }, {
            key: 'music_expert',
            value: 'Music Expert'
        }
    ];

    const prioritizedCountries = [
        "United States",
        "United Kingdom",
        "Brazil",
        "Korea",
        "Japan",
        "Germany",
        "France",
        "China",
        "Canada",
        "Australia",
        "India",
        "Sweden",
    ];

    const [cities, setCities] = useState<any>([])
    const [states, setStates] = useState<any>([]);
    const [countries, setCountries] = useState<any>([]);
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

     // Get prioritized countries
     const getPrioritizedCountries = () => {
        const allCountries = Country.getAllCountries();
      
        // Map prioritizedCountries to objects in the exact order
        const priorityList = prioritizedCountries
          .map((priorityName) =>
            allCountries.find((country) => country.name === priorityName)
          )
          .filter(Boolean) // Remove undefined values if any prioritized country is missing
      
          .map((country: any) => ({
            key: country.isoCode,
            value: country.name,
          }));
      
        // Filter out the priority countries to get the remaining list
        const others = allCountries
          .filter((country) => !prioritizedCountries.includes(country.name))
          .map((country) => ({
            key: country.isoCode,
            value: country.name,
          }));
      
        return [...priorityList, ...others];
      };
    const handleCountryChange = (countryData: any) => {
        const { key, value } = countryData;
        dispatch({ type: 'g_Country', payload: { key: key, value: value } });

        const _state = State.getStatesOfCountry(countryData.key).map(s => {
            return {
                key: s.isoCode,
                value: s.name
            }
        });
        setStates(_state);
        setSelectedCountry(countryData)
    };

    const handleStateChange = (stateData: any) => {
        dispatch({ type: 'g_State', payload: { key: stateData.key, value: stateData.value } });

        
        if (selectedCountry) {
            const _city = City.getCitiesOfState(selectedCountry.key, stateData.key).map(city => {
                return {
                    key: city.stateCode,
                    value: city.name
                }
            });
            
            setCities(_city);
        }
    }

    const handleCityChange = (cityData: any) => {

        dispatch({ type: 'g_City', payload: { key: cityData.key, value: cityData.value } });
    }

    // useEffect(() => {
    //     const _countries = Country.getAllCountries().map(c => {
    //         return {
    //             key: c.isoCode,
    //             value: c.name
    //         }
    //     });

    //     setCountries(_countries);
    // }, []);

    useEffect(() => {
        setCountries(getPrioritizedCountries());
      }, []);

    const handleAccount = (accountTypes: any) => {
        const { key, value } = accountTypes;
        dispatch({ type: 'g_AccountType', payload: { key: key, value: value } });
    }

    const handleChange = (e: any) => {
        if (e.target.files[0]) {
            if (state.g_UserPhoto) {
                 // Clean up old URL
                 
            }
            const newFile = URL.createObjectURL(e.target.files[0]);
            dispatch({ type: 'g_UserPhoto', payload: newFile });
            
        } else {
            console.error("+");
        }
    };

    const handleUploadClick = () => {
        
        if (fileInputRef.current) {
            fileInputRef.current.click(); 
        }
    };

    const handleInputChange = (evt: any) => {
        const { name, value } = evt.target;
        dispatch({ type: name, payload: value });
    }

    return (
        <div>
            <div className='flex justify-start items-center gap-[18px]'>
                <div className='w-[67px] h-[67px] flex justify-center items-center rounded-full border border-[#CBCBCB] text-[24px] text-[#CBCBCB] hover:text-[white] overflow-hidden hover:bg-slate-200 cursor-pointer' onClick={handleUploadClick} >
                    <input ref={fileInputRef} className='hidden' type="file" onChange={handleChange} />
                    {state.g_UserPhoto ? <img src={state.g_UserPhoto} alt="Preview" /> : '+'}
                </div>
                <p className='text-[14px] text-[#000]'>Update your profile and how people can contact you generally</p>
            </div>
            <div className='flex justify-start items-end gap-[15px] mt-[26px]'>
                <SettingInput label='Company Name (optional)' name="g_CompanyName" value={state.g_CompanyName} action={handleInputChange}/>
                <SettingInput label='Artist Name (optional)'  name="g_ArtistName" value={state.g_ArtistName} action={handleInputChange}/>
            </div>
            <div className='flex justify-start items-end gap-[15px] mt-[16px]'>
                <SettingInput label='First name' name="g_FirstName"  value={state.g_FirstName} action={handleInputChange}/>
                <SettingInput label='Last name' name="g_LastName"  value={state.g_LastName} action={handleInputChange}/>
            </div>
            <div className='flex justify-start items-end gap-[15px] mt-[44px]'>
                <SettingInput label='Email address' type='email' name="g_Email"  value={state.g_Email} action={handleInputChange}/>
                <SelectBtn label='Account Type' value={state.g_AccountType}  list={accountTypes} onChange={handleAccount} _class="w-[267px]" />
            </div>
            <div className='flex justify-start items-end gap-[15px] mt-[20px]'>
                <SelectBtn label='Country' value={state.g_Country} list={countries} onChange={handleCountryChange} _class="mr-[10px] w-[200px]" />
                <SelectBtn label='State' value={state.g_State} list={states} onChange={handleStateChange} _class="w-[160px]" />
                <SelectBtn label='City' value={state.g_City} list={cities} onChange={handleCityChange} _class="w-[150px]" />
            </div>
        </div>
    );
}

export default GeneralSetting;