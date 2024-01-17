import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import SiteNav from "./SiteNav";

export default function Header() {
    return (
        <header className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
                <Link href="../">
                    <h1 className="text-primary">Allwin</h1>
                </Link>
                <SiteNav />
            </div>

            {/* <Image
                    src={Logo}
                    alt="logo"
                    unoptimized={true}
                    width={140}
                    height={140}
                /> */}
        </header>
    );
}
