import React from 'react';
import Link from "next/link";

const IconLink = ({link, icon, text, style, className}) => {
    const iconProps = {iconBadge: icon.badge, iconStyle: icon.style, iconClassname: icon.className,}
    const textProps = {text: text.text, textStyle: text.style, textClassname: text.className,}
    return (
        <Link href={link} style={style} className={`${className} flex flex-row gap-1 items-center justify-center`}>
            <span className={`${iconProps.iconClassname} text-indigo-300`} style={iconProps.iconStyle}>
                {iconProps.iconBadge}
            </span>
            {textProps.text == null ? "" : (
                <span className={`${textProps.iconClassname} font-normal text-indigo-200`} style={textProps.iconStyle}>
                    {textProps.text}
                </span>
            )}
        </Link>
    );
};

export default IconLink;