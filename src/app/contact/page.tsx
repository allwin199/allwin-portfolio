import React from "react";
import MediaLinks from "@/components/Home/MediaLinks";

const Contact = () => {
    return (
        <div className="py-16 px-8">
            <div className="mt-24 max-w-[1000px] mx-auto">
                <p className="uppercase text-xl text-primary mb-6">Contact</p>
                <p className="text-4xl">Prince Allwin</p>
                <p className="text-xl mb-8">Smart Contract Engineer</p>
                <p className="text-base">
                    I&apos;m open to both full-time and remote opportunities.
                </p>
                <p>Contact me and let&apos;s talk.</p>
                <p className="py-2 text-primary mt-8">
                    princeallwin199@gmail.com
                </p>
                <div className="mt-4">
                    <MediaLinks />
                </div>
            </div>
        </div>
    );
};

export default Contact;
