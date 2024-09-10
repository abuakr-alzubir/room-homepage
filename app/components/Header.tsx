"use client";
import React from "react";
import Links from "./Links";
import Logo from "./Logo";
import Image from "next/image";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <header
                className={`absolute z-20 top-10 left-10 flex items-center justify-between w-[30rem] lg:w-[50rem]`}
            >
                {/* desktop nav bar */}
                <div className=" items-center justify-between w-full hidden lg:flex">
                    <Logo />
                    <nav>
                        <Links />
                    </nav>
                </div>

                {/* mobile nav bar */}
                <div className="flex items-center justify-between w-full">
                    <button
                        className="lg:hidden"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? (
                            <Image
                                src="/images/icon-hamburger.svg"
                                alt="burger icon"
                                width={50}
                                height={50}
                            />
                        ) : (
                            <Image
                                src="/images/icon-close.svg"
                                alt="burger icon"
                                width={50}
                                height={50}
                            />
                        )}
                    </button>
                    <Logo className="lg:hidden"/>
                    {isOpen && (
                        <nav>
                            <Links />
                        </nav>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
