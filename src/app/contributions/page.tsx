import { Suspense } from "react";
// import Image from "next/Image";
import Contribution from "./Contribution";

const Contributions = () => {
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
                <Suspense fallback="Loading Contributions...">
                    <Contribution />
                </Suspense>
            </div>
        </div>
    );
};

export default Contributions;
