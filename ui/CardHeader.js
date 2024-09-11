import React from 'react';
import Card from "@/ui/Card";

const CardHeader = ({children,style,className}) => {
    return (
        <Card style={style} className={`${className} w-full h-fit mt-2 mb-2`}>
            {children}
        </Card>
    );
};

export default CardHeader;