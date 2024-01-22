import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import { getProjects } from "@/utils/sanity/sanity-utils";

const page = async () => {
    const projects = await getProjects();
    return (
        <div className="py-16 px-8">
            {/* {projects.map((project) => (
                <div key={project._id}>
                    <p>{project.name}</p>
                </div>
            ))} */}

            <div className="mt-24 max-w-[1000px] mx-auto">
                <p className="uppercase text-xl text-primary mb-2">Projects</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="mt-10">
                        <p className="text-2xl">Crowd Funding</p>
                        <div>
                            <p className="mt-4">
                                Users can contribute to a project using their
                                USD.
                            </p>
                            <p className="mt-1 text-sm">
                                <a
                                    href="https://github.com/allwin199/fund-me-foundry"
                                    className="text-sm text-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </p>
                            <div className="mt-1 text-sm">
                                <a
                                    href="https://sepolia.etherscan.io/address/0x10abe3c914d43b30b42112f98bc680a91d8f389d#code"
                                    className="text-sm text-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Contract
                                </a>{" "}
                                <span className="text-sm text-gray-500">
                                    (Sepolia)
                                </span>
                            </div>
                            <div className="mt-4 text-sm text-gray-600">
                                <ul className="m-0">
                                    <li className="py-1 flex">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        User can create / fund a campaign.
                                    </li>
                                    <li className="py-1 flex">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        USD is converted to ETH using Chainlink
                                        PriceFeeds.
                                    </li>
                                    <li className="py-1 flex">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        Implemented robust security measures to
                                        protect user funds.
                                    </li>
                                </ul>
                                <button className="mt-4">
                                    <Link href="/">More</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl">Raffle</p>
                        <div>
                            <p className="mt-4">
                                Participants can enter the raffle by paying in
                                ETH.
                            </p>
                            <p className="mt-1 text-sm">
                                <a
                                    href="https://github.com/allwin199/raffle-foundry"
                                    className="text-sm text-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </p>
                            <div className="mt-1 text-sm">
                                <a
                                    href="https://sepolia.etherscan.io/address/0xed051837356181f59fc48b0affdd241d4082829f#code"
                                    className="text-sm text-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Contract
                                </a>{" "}
                                <span className="text-sm text-gray-500">
                                    (Sepolia)
                                </span>
                            </div>
                            <div className="mt-4 text-sm text-gray-600">
                                <ul className="m-0">
                                    <li className="py-1 flex">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        Random winner will be picked by
                                        chainlink nodes.
                                    </li>
                                    <li className="py-1 flex">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        Random number generated by Chainlink VRF
                                    </li>
                                    <li className="py-1 flex">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        Raffle draw triggered by Chainlink
                                        Automation
                                    </li>
                                </ul>
                                <button className="mt-4">
                                    <Link href="/">More</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
