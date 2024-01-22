import Project from "./Project";

type Props = {
    params: { id: string };
};

const page = async (params: Props) => {
    return (
        <div className="py-16 px-8">
            <div className="mt-24 max-w-[1000px] mx-auto">
                <Project params={params.params} />
            </div>
        </div>
    );
};

export default page;
