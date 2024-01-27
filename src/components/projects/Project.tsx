import { MdArrowRight } from "react-icons/md";
import { getProjects } from "@/utils/sanity/sanity-utils";
import Link from "next/link";

const Project = async () => {
    const projects = await getProjects();
    return (
        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
                <div key={project._id} className="mb-10">
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

                        <Link href={`/projects/${project.slug}`}>
                            <button className="mt-4">More</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;
