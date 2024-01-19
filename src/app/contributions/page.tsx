import React from "react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

const Contributions = () => {
    return (
        <div className="py-16 px-8">
            <div className="mt-24 max-w-[1000px] mx-auto">
                <p className="uppercase text-xl text-primary mb-6">
                    Contributions
                </p>
                <div className="mt-10">
                    <p className="text-2xl">Openzeppelin</p>
                    <div>
                        <p className="mt-6">
                            Add internal functions inside modifiers
                        </p>
                        <p className="mt-1 text-sm">
                            Id :{" "}
                            <Link
                                href="https://github.com/OpenZeppelin/openzeppelin-contracts/pull/4472"
                                className="text-sm text-primary"
                                target="_blank"
                            >
                                #4472
                            </Link>
                        </p>
                        <div className="mt-4 text-sm text-gray-600">
                            <ul className="m-0">
                                <li className="py-1 flex">
                                    <MdArrowRight
                                        size={20}
                                        className="text-gray-600"
                                    />{" "}
                                    The integration of internal functions within
                                    modifiers contributes to improved
                                    readability.
                                </li>
                                <li className="py-1 flex">
                                    <MdArrowRight
                                        size={20}
                                        className="text-gray-600"
                                    />{" "}
                                    This approach not only reduces gas
                                    consumption but also improves
                                    maintainability.
                                </li>
                                <li className="py-1 flex">
                                    <MdArrowRight
                                        size={20}
                                        className="text-gray-600"
                                    />{" "}
                                    Furthermore, it enhances the overall
                                    structure and organization of your code.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contributions;
