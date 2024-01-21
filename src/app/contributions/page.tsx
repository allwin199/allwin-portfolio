import React from "react";
// import Image from "next/Image";
import { MdArrowRight } from "react-icons/md";
import { getContributions } from "@/utils/sanity/sanity-utils";

const Contributions = async () => {
    const contributions = await getContributions();

    return (
        <div className="py-16 px-8">
            <div className="mt-24 max-w-[1000px] mx-auto">
                <p className="uppercase text-xl text-primary mb-6">
                    Contributions
                </p>
                {/* <a
                    href="https://github.com/allwin199"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        alt="Prince Allwin's GitHub Stats"
                        src="https://github-readme-stats.vercel.app/api?username=allwin199&hide=stars&bg_color=ecf0f3"
                        width={350}
                        height={350}
                    />
                </a> */}
                {contributions.map((contribution) => (
                    <div key={contribution._id} className="mt-10">
                        <p className="text-2xl">{contribution.organization}</p>
                        <div>
                            <p className="mt-4">{contribution.issue}</p>
                            <p className="mt-1 mb-2 text-sm">
                                Id :{" "}
                                <a
                                    href={contribution.url}
                                    className="text-sm text-primary"
                                    target="_blank"
                                >
                                    #{contribution.issue_id}
                                </a>
                            </p>
                            <div className="mt-4 text-sm text-gray-600">
                                <ul className="m-0">
                                    <li className="py-1 flex">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        {contribution.content1}
                                    </li>
                                    <li className="py-1 flex">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        {contribution.content2}
                                    </li>
                                    <li className="py-1 flex">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        {contribution.content3}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contributions;
