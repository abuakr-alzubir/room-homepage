import React from "react";
import Image from "next/image";

const Logo = ({className}:{className?:string}) => {
    return (
        <div className={`${className}`}>
            <Image src="/images/logo.svg" alt="logo" width={80} height={80} />
        </div>
    );
};

export default Logo;
