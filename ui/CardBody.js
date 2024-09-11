import React from 'react';
import Card from "@/ui/Card";

const CardBody = ({children,style,className}) => {
    return (
        <Card style={style} className={`${className} w-full mt-2 mb-2`}>
            {children}
        </Card>
    );
};

export default CardBody;