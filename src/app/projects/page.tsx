import { Suspense } from "react";
import Project from "./Project";

const page = () => {
    return (
        <div className="py-16 px-8">
            <div className="mt-24 max-w-[1000px] mx-auto">
                <p className="uppercase text-xl text-primary mb-2">Projects</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                    <Suspense fallback="Loading Projects...">
                        <Project />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default page;
