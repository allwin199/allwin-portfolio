import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const siteRoutes = [
    {
        href: "https://github.com/allwin199",
        icon: <FaGithub />,
    },
    {
        href: "https://linkedin.com/in/prince-allwin-7a83b5284",
        icon: <FaLinkedinIn />,
    },
];

const MediaLinks = () => {
    return (
        <div className="flex">
            {siteRoutes.map((siteRoute) => (
                <a
                    href={siteRoute.href}
                    target="_blank"
                    rel="noreferrer"
                    key={siteRoute.href}
                    className="mr-8"
                >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        {siteRoute.icon}
                    </div>
                </a>
            ))}
        </div>
    );
};

export default MediaLinks;
