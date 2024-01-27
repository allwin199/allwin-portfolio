import { getProject } from "@/utils/sanity/sanity-utils";
import { MdArrowRight } from "react-icons/md";
import { PortableText } from "@portabletext/react";
import Back from "./Back";

type Props = {
    params: { id: string };
};

const Project = async ({ params }: Props) => {
    const slug = params.id;
    const project = await getProject(slug);

    return (
        <div key={project._id}>
            <Back />
            <p className="text-2xl">{project.project_name}</p>
            <p className="mt-4">{project.project_desc}</p>
            <div className="mt-1 text-sm">
                <a
                    href={project.github_url}
                    className="text-sm text-primary"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
            </div>
            <div className="mt-1 text-sm">
                <a
                    href={project.contract_url}
                    className="text-sm text-primary"
                    target="_blank"
                    rel="noreferrer"
                >
                    Contract
                </a>{" "}
                {project.network ? (
                    <span className="text-sm text-gray-500">
                        ({project.network})
                    </span>
                ) : null}
            </div>
            {project.url ? (
                <div className="mt-1 text-sm">
                    <a
                        href={project.url}
                        className="text-sm text-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Demo
                    </a>
                </div>
            ) : null}
            <div className="mt-4 text-sm text-gray-600">
                <ul className="m-0">
                    <li className="py-1 flex hover:cursor-auto">
                        <MdArrowRight size={20} className="text-gray-600" />{" "}
                        {project.content1}
                    </li>
                    <li className="py-1 flex hover:cursor-auto">
                        <MdArrowRight size={20} className="text-gray-600" />{" "}
                        {project.content2}
                    </li>
                    <li className="py-1 flex hover:cursor-auto">
                        <MdArrowRight size={20} className="text-gray-600" />{" "}
                        {project.content3}
                    </li>
                </ul>
            </div>
            <div className="my-10">
                <p className="text-2xl mb-4">Description</p>
                {project.content4 ? (
                    <div className="text-sm text-gray-600">
                        <p>{project.content4}</p>
                    </div>
                ) : null}
                {project.content5 ? (
                    <div className="text-sm text-gray-600 my-6">
                        <p>{project.content5}</p>
                    </div>
                ) : null}
                {project.content6 ? (
                    <div className="text-sm text-gray-600">
                        <p>{project.content6}</p>
                    </div>
                ) : null}
                {project.content ? (
                    <div className="text-sm text-gray-600">
                        <PortableText value={project.content} />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Project;
