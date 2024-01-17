import Link from "next/link";
import React from "react";
import MediaLinks from "@/components/Home/MediaLinks";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        LET&#39;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&#39;m{" "}
                        <span className="text-primary"> Prince Allwin</span>
                    </h1>
                    <h1 className="py-2 text-gray-700">
                        Smart Contract Engineer
                    </h1>
                    <p className="text-sm py-4 text-gray-500 sm:max-w-[70%] m-auto">
                        My primary focus is on creating secure and efficient
                        Smart Contracts. <br /> Prioritizing security is crucial
                        to me.
                        <br /> Additionally, I develop full-stack applications
                        to facilitate communication with these Smart Contracts.
                    </p>
                    <div className="flex items-center justify-center max-w-[330px] mx-auto pt-4">
                        <MediaLinks />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
