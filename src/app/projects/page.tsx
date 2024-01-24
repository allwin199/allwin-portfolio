import { Suspense } from "react";
import Project from "../../components/projects/Project";

const page = () => {
    return (
        <div className="py-16 px-8">
            <div className="mt-24 max-w-[1000px] mx-auto">
                <p className="uppercase text-xl text-primary mb-2">Projects</p>
                <Suspense fallback="Loading Projects...">
                    <Project />
                </Suspense>
            </div>
        </div>
    );
};

export default page;
