"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "./SiteNav";

export default function Header() {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed w-full h-20 z-[100] ${
                isScrolling ? "shadow-xl bg-[#ffffff]" : ""
            }`}
        >
            <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
                <Link href="../">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        priority={true}
                        width={140}
                        height={140}
                    />
                </Link>
                <SiteNav />
            </div>
        </header>
    );
}
