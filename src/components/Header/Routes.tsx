"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const siteRoutes = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/about",
        label: "About",
    },
    {
        href: "/contributions",
        label: "Contributions",
    },
    {
        href: "/projects",
        label: "Projects",
    },
    {
        href: "/contact",
        label: "Contact",
    },
];

type RouteProps = {
    mobile: boolean;
};

const Routes = ({ mobile }: RouteProps) => {
    const pathname = usePathname();
    return (
        <>
            {siteRoutes.map((siteRoute) => (
                <li
                    key={siteRoute.href}
                    className={mobile ? "py-4 text-sm" : ""}
                >
                    <Link
                        href={siteRoute.href}
                        className={`transition hover:text-primary ${
                            pathname === siteRoute.href
                                ? "text-primary"
                                : "text-zinc-400"
                        }`}
                    >
                        {siteRoute.label}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default Routes;
