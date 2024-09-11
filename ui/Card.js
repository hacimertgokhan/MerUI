import React from 'react';

const Card = ({style, className, round, children}) => {

    return (
        <div style={style} className={` ${className} bg-[#09090B] w-fit h-fit p-8 rounded-xl border-[1.8px] border-[#151515]`}>
            {children}
        </div>
    );
};

export default Card;