"use client";

import { useState } from "react";
import Link from "next/link";
import Routes from "./Routes";
import MediaLinks from "./MediaLinks";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function SiteNav() {
    const [mobileNav, setMobileNav] = useState(false);

    const handleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

    return (
        <nav>
            <ul className="hidden md:flex gap-x-5 text-[14px]">
                <Routes mobile={false} />
            </ul>

            {/* Hamburger Icon */}
            <div
                // style={{ color: `${linkColor}` }}
                onClick={handleMobileNav}
                className="md:hidden"
            >
                <AiOutlineMenu
                    size={25}
                    className="text-primary cursor-pointer"
                />
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    mobileNav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                        : ""
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        mobileNav
                            ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div className="flex w-full items-center justify-between pb-5">
                        <Link href="/">
                            <h1 className="text-md text-primary">Allwin</h1>
                        </Link>
                        <div
                            onClick={handleMobileNav}
                            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                        >
                            <AiOutlineClose />
                        </div>
                    </div>
                    <ul className="py-4 flex flex-col">
                        <Routes mobile={true} />
                    </ul>
                    <MediaLinks />
                </div>
            </div>
        </nav>
    );
}
