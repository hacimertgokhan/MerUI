import React from 'react';

const ModernText = ({mode, title, subtitle, icon, style, className, children}) => {
    switch (mode) {
        case "only-text":
            return (
                <div className={`${className}`} style={style}>
                    {children}
                </div>
            )
        case "title":
            return (
                <div className={`${className}`} style={style}>
                    <h1 className={"text-[#D5D5D6] font-bold font-sans text-xl"}>{title}</h1>
                    <p className={"text-[#696970]"}>{subtitle}</p>
                </div>
            )
    }
};

export default ModernText;