import React, { useEffect, useState } from 'react';
import Cards from 'react-credit-cards-2';
import * as validator from "card-validator";
import { useGlobalContext } from '@/context';


import SettingInput from '../inputs/settingInput';
import BillingBox from '../boxs/billingBox';
import BillingBtn from '../buttons/billingBtn';

import 'react-credit-cards-2/dist/es/styles-compiled.css';

import { formatCardNumber, formatCVC, formatExpiryDate, unformatCardInfo } from '@/utils/common';
import TeamSelectBtn from '../buttons/teamSelectBtn';
import GradientBox from '../boxs/gradientBox';
import GradientBorder from '../boxs/gradientBox';

const BillingSetting = () => {

    const { state, dispatch } = useGlobalContext();

    // const [state, setState] = useState<any>({
    //     number: '',
    //     expiry: '',
    //     cvc: '',
    //     name: '',
    // });

    const [errorState, setErrorState] = useState<any>({
        number: 0,
        expiry: 0,
        cvc: 0,
    })

    const updateErrorState = (key: string, validation: any) => {
        if (!validation.isValid && !validation.isPotentiallyValid) {
            setErrorState((prev: any) => ({ ...prev, [key]: 1 }));
        } else if (!validation.isValid && validation.isPotentiallyValid) {
            setErrorState((prev: any) => ({ ...prev, [key]: 0 }));
        } else {
            setErrorState((prev: any) => ({ ...prev, [key]: 2 }));
        }
    }

    const handleInputChange = (evt: any) => {
        const { name, value } = evt.target;
        if (name === 'b_CardNumber') {
            const cardValidation = validator.number(value);
            updateErrorState('b_CardNumber', cardValidation);         
        } else if (name === 'b_ExpDate') {
            const expiryValidation = validator.expirationDate(unformatCardInfo(value));
            updateErrorState('b_ExpDate', expiryValidation);
        } else if (name === 'b_Cvv') {
            const cvvValidation = validator.cvv(unformatCardInfo(value));
            updateErrorState('b_Cvv', cvvValidation);
        }
        dispatch({ type: name, payload: value });
    }

    return (
        <div>
            <div className='flex justify-start items-center gap-[15px]'>
                <GradientBorder _class="p-[3px] rounded-[20px] w-[262px] bg-gradient-to-r from-[#2a7765] via-[#53c1a7] to-[#88DECA]" bgColor="white">
                    <BillingBox tag='Free Trial' name='Limited' link='#' price={0} color='#88DECA'  >
                        <BillingBtn _class="bg-[#88DECA] text-[black] text-[13px] font-[500]" >Current Plan</BillingBtn>
                    </BillingBox>
                </GradientBorder>
                <GradientBorder _class="p-[3px] rounded-[20px] w-[262px] bg-gradient-to-r from-[#61772c] via-[#88a348] to-[#CEF96B]" bgColor="white">
                    <BillingBox tag='Growth' name='Max' link='#' price={11.99} color='#CEF96B' >
                        <BillingBtn _class="bg-[#CEF96B] text-[black] text-[13px] font-[500]" >Subscribe</BillingBtn>
                    </BillingBox>
                </GradientBorder>
                <GradientBorder _class="p-[3px] rounded-[20px] w-[262px] bg-gradient-to-r from-[#a18084] via-[#c79399] to-[#FFD2D7]" bgColor="white">
                    <BillingBox tag='Discovered' name='Pro' link='#' price={29.99} color='#FFD2D7' >
                        <BillingBtn _class="bg-[#FFD2D7] text-[black] text-[13px] font-[500]" >Subscribe</BillingBtn>
                    </BillingBox>
                </GradientBorder>
                <GradientBorder _class="p-[3px] rounded-[20px] w-[262px] bg-gradient-to-r from-[#bf984c] via-[#dfb157] to-[#ffca62]" bgColor="white">
                    <BillingBox tag='For Teams' name='Team' link='#' price={49.99} color='#FEC961' isBorder={false} _class="bg-gradient-to-r from-[#bf984c] via-[#dfb157] to-[#ffca62]">
                        <TeamSelectBtn _class="bg-[#FEC961] text-[black] text-[13px] font-[500]" >Subscribe</TeamSelectBtn>
                    </BillingBox>
                </GradientBorder>
            </div>
            <hr className='w-full h-[1px] text-[#C3C5C5] bg-[#C3C5C5] mt-[32px]' />
            <div className='mt-[20px]'>
                <h2>Card Details</h2>
                <p style={{ color: "#A2A2A2", }} className='text-[12px] mb-[20px]' >Update your card details</p>
                <SettingInput name='b_CardName' label='Name on card' _class='!w-[100%] max-w-[420px]' value={state.b_CardName} action={handleInputChange}/>
                <div className='flex justify-start items-end gap-[10px] mt-[20px]'>
                    <div className='relative'>
                        <SettingInput name='b_CardNumber' label='Card number' placeholder="0000 0000 0000 0000" value={state.b_CardNumber} action={handleInputChange} _class='!w-[230px] pl-[50px]' style={{ color: `${errorState.number === 0 ? 'black' : errorState.number === 1 ? 'red' : 'green'}` }} />
                        <div className='absolute bottom-[8px] left-[7px] scale-[0.13] origin-bottom-left'>
                            <Cards
                                number={state.b_CardNumber}
                                expiry={state.b_ExpDate}
                                cvc={state.b_Cvv}
                                name={state.b_CardName}
                            />
                        </div>
                    </div>
                    <SettingInput name='b_ExpDate' label='Exp Date' placeholder="00/00" value={state.b_ExpDate} action={handleInputChange} _class='w-[70px]' style={{ color: `${errorState.expiry === 0 ? 'black' : errorState.expiry === 1 ? 'red' : 'green'}` }} />
                    <SettingInput name='b_Cvv' type='number' label='CVV' placeholder="***" value={state.b_Cvv} action={handleInputChange} _class='!w-[100px]' style={{ color: `${errorState.cvc === 0 ? 'black' : errorState.cvc === 1 ? 'red' : 'green'}` }} />
                </div>
            </div>
        </div>
    );
}

export default BillingSetting;