import Link from "next/link";

const About = () => {
    return (
        <div className="py-16 px-8">
            <div className="mt-24 max-w-[1000px] mx-auto">
                <p className="uppercase text-xl text-primary mb-4">About</p>
                <p className="py-2 text-gray-600">
                    As a smart contract engineer, I began working on smart
                    contracts due to their immutable and transparent nature. My
                    primary focus is to construct secure and efficient smart
                    contracts, with security being my top priority. I utilize
                    <span className="text-primary"> Foundry</span> for building
                    these contracts, appreciating its speed and extensive array
                    of cheat codes. Testing smart contracts within Foundry is
                    straightforward and efficient.
                </p>
                <p className="py-2 text-gray-600">
                    As an active contributor in the web3 space, I have made
                    contributions to both the{" "}
                    <span className="text-primary">OpenZeppelin</span> library
                    and the <span className="text-primary">Foundry</span>{" "}
                    framework. Collaborating with fellow developers has been
                    instrumental in my learning journey. Furthermore, I actively
                    participate in the Foundry course led by{" "}
                    <span className="text-primary">Patrick Collins</span>, where
                    I engage in answering queries and assisting others.
                </p>
                <p className="pt-2 text-gray-600 mb-6">
                    Beyond my involvement in the web3 domain, I also specialize
                    in developing comprehensive full-stack applications. These
                    applications facilitate seamless interaction with smart
                    contracts. I leverage NextJs, React Js, and Typescript in
                    the development process.
                </p>
                <button className="mr-2">
                    <Link href="/contributions">Contributions</Link>
                </button>
                <button className="ml-2">
                    <Link href="/projects">Projects</Link>
                </button>
            </div>
        </div>
    );
};

export default About;
