import React from 'react';

const Navigation = ({left, right, center, className, style}) => {
    return (
        <div className={`w-screen relative top-0 text-white items-center flex justify-evenly p-6 h-fit ${className}`} style={style}>
            <div>
                {left}
            </div>
            <div>
                {center}
            </div>
            <div>
                {right}
            </div>
        </div>
    );
};

export default Navigation;