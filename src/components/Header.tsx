import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import SiteNav from "./SiteNav";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 px-7 border-b">
            <Link href="../">
                <Image
                    src={Logo}
                    alt="logo"
                    unoptimized={true}
                    width={140}
                    height={140}
                />
            </Link>

            <SiteNav />
        </header>
    );
}
