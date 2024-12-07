import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPickerModal = () => {

    const [hex, setHex] = useState("#4F46E5");

    return(
        <div className='.color-picker w-[250px] h-auto border border-[#DADADA] rounded-[6px] bg-[white]'>
            <SketchPicker 
                width='250px'
                color={hex}
                onChange={(color) => {
                    setHex(color.hex);
                }}
            />
        </div>
    )
}

export default ColorPickerModal;