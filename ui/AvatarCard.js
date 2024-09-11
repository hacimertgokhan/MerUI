import React from 'react';
import Image from "next/image";

const AvatarCard = ({title, subtitle, image, alt, height, width, style, ...props}) => {
    return (
        <div className={"flex flex-row items-center justify-center gap-6"}>
            <Image height={height == null ? 60 : height} width={width == null ? 60 : width} className={"rounded-full drop-shadow-3xl"} src={image} style={style} alt={alt} {...props}/>
            <div className={"w-fit h-fit"}>
                <h1 className={"text-[#D5D5D6] font-bold font-sans text-xl"}>{title}</h1>
                <p className={"text-[#696970]"}>{subtitle}</p>
            </div>
        </div>
    );
};

export default AvatarCard;