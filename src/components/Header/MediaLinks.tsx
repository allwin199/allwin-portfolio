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
        <div className="pt-4">
            {/* <p className="text-primary pb-2">princeallwin199@gmail.com</p> */}
            <div className="flex items-center my-4 w-full sm:w-[80%]">
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
        </div>
    );
};

export default MediaLinks;
