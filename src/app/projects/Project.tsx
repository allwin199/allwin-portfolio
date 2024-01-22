import { MdArrowRight } from "react-icons/md";
import { getProjects } from "@/utils/sanity/sanity-utils";
import Link from "next/link";

const Project = async () => {
    const projects = await getProjects();
    return (
        <div className="mt-10">
            {projects.map((project) => (
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
                            <li className="py-1 flex">
                                <MdArrowRight
                                    size={20}
                                    className="text-gray-600"
                                />{" "}
                                {project.content1}
                            </li>
                            <li className="py-1 flex">
                                <MdArrowRight
                                    size={20}
                                    className="text-gray-600"
                                />{" "}
                                {project.content2}
                            </li>
                            <li className="py-1 flex">
                                <MdArrowRight
                                    size={20}
                                    className="text-gray-600"
                                />{" "}
                                {project.content3}
                            </li>
                        </ul>
                        <button className="mt-4">
                            <Link href={`/projects/${project.slug}`}>More</Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;
