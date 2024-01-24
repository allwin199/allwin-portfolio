import { MdArrowRight } from "react-icons/md";
import { getContributions } from "@/utils/sanity/sanity-utils";

const Contribution = async () => {
    const contributions = await getContributions();

    return (
        <div>
            {contributions.map((contribution) => (
                <div key={contribution._id} className="mt-10">
                    <p className="text-2xl">{contribution.organization}</p>
                    <div>
                        <p className="mt-4">{contribution.issue}</p>
                        <div className="mt-1 mb-2 text-sm">
                            Id :{" "}
                            <a
                                href={contribution.url}
                                className="text-sm text-primary"
                                target="_blank"
                            >
                                #{contribution.issue_id}
                            </a>
                        </div>
                        <div className="mt-4 text-sm text-gray-600">
                            <ul className="m-0">
                                {contribution.content1 ? (
                                    <li className="py-1 flex hover:cursor-auto">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        {contribution.content1}
                                    </li>
                                ) : null}
                                {contribution.content2 ? (
                                    <li className="py-1 flex hover:cursor-auto">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        {contribution.content2}
                                    </li>
                                ) : null}
                                {contribution.content3 ? (
                                    <li className="py-1 flex hover:cursor-auto">
                                        <MdArrowRight
                                            size={20}
                                            className="text-gray-600"
                                        />{" "}
                                        {contribution.content3}
                                    </li>
                                ) : null}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contribution;
