import { getProject } from "@/utils/sanity/sanity-utils";
import { MdArrowRight } from "react-icons/md";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { id: string };
};

const page = async ({ params }: Props) => {
    const slug = params.id;
    const project = await getProject(slug);

    return (
        <div className="py-16 px-8">
            <div className="mt-24 max-w-[1000px] mx-auto">
                <div key={project._id}>
                    <p className="text-2xl">{project.project_name}</p>
                    <p className="mt-4">{project.project_desc}</p>
                    <p className="mt-1 text-sm">
                        <a
                            href={project.github_url}
                            className="text-sm text-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </p>
                    <div className="mt-1 text-sm">
                        <a
                            href={project.contract_url}
                            className="text-sm text-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Contract
                        </a>{" "}
                        <span className="text-sm text-gray-500">(Sepolia)</span>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                        <ul className="m-0">
                            <li className="py-1 flex hover:cursor-auto">
                                <MdArrowRight
                                    size={20}
                                    className="text-gray-600"
                                />{" "}
                                {project.content1}
                            </li>
                            <li className="py-1 flex hover:cursor-auto">
                                <MdArrowRight
                                    size={20}
                                    className="text-gray-600"
                                />{" "}
                                {project.content2}
                            </li>
                            <li className="py-1 flex hover:cursor-auto">
                                <MdArrowRight
                                    size={20}
                                    className="text-gray-600"
                                />{" "}
                                {project.content3}
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm text-gray-600 mt-10">
                        <PortableText value={project.content} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
