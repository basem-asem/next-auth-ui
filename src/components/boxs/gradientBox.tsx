import Link from 'next/link';
import React from 'react';

const GradientBorder = ({ bgColor, _class, children }: any) => {
    return (
        <div className={`${_class}`}>
            <div className={`bg-[${bgColor}] rounded-[17px]`}>
                {children}
            </div>
        </div>
    )
}

export default GradientBorder;