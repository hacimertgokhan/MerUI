import React from 'react';

const UnderlinedText = ({style, className, text, underlineColor,underlineHeight}) => {
    return (
        <div style={style} className={`text-[#D5D5D6] ${className}`}>
            {text}
            <div style={{background: underlineColor == null ? "#151515" : underlineColor, height: underlineHeight == null ? "1px" : underlineHeight}} className={"w-full mt-1 rounded-sm"}></div>
        </div>
    );
};

export default UnderlinedText;