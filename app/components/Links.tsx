import Link from "next/link";
import React from "react";

const Links = ({ isVertical = false }: { isVertical?: boolean }) => {
    return (
        <>
            <ul className={`flex uppercase text-slate-200 text-lg gap-4`}>
                {links.map((link) => (
                    <li
                        key={link.name}
                        className={`hover:cursor-pointer ${
                            link.href === "/"
                                ? "border-b border-slate-200 pb-1"
                                : ""
                        }`}
                    >
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Links;

const links = [
    {
        name: "home",
        href: "/",
    },
    {
        name: "shop",
        href: "#",
    },
    {
        name: "about",
        href: "#",
    },
    {
        name: "contact",
        href: "#",
    },
];
