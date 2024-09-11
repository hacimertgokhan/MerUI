import React from 'react';
const IconItem = ({icon, isLast}) => {
    return (
        <div className={"w-fit text-white text-2xl p-1 h-fit relative  items-center justify-center flex flex-row gap-4 drop-shadow-3xl"}>

                <>
                    <span className={"cursor-pointer text-white"}>{icon}</span>
                    {isLast === true ? <></> : <div className={"w-[1px] h-[35px] m-auto bg-[#151515]"}></div>}
                </>
        </div>
    );
};

export default IconItem;