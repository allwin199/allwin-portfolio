import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import SiteNav from "./SiteNav";

export default function Header() {
    return (
        <header className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
                <Link href="../">
                    <Image
                        src={Logo}
                        alt="logo"
                        unoptimized={false}
                        width={140}
                        height={140}
                    />
                </Link>
                <SiteNav />
            </div>
        </header>
    );
}
