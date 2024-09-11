import React from 'react';

const IconPackage = ({className, children}) => {
    return (
        <div className={`${className} w-full gap-2`}>
            {children}
        </div>
    );
};

export default IconPackage;