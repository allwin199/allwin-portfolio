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
                    Foundry for building these contracts, appreciating its speed
                    and extensive array of cheat codes. Testing smart contracts
                    within Foundry is straightforward and efficient.
                </p>
                <p className="py-2 text-gray-600">
                    As an active contributor in the web3 space, I have made
                    contributions to both the OpenZeppelin library and the
                    Foundry framework. Furthermore, I actively participate in
                    the Foundry course taught by Patrick Collins. More about my
                    contributions in contributions page.
                </p>
                <p className="py-2 text-gray-600">
                    In addition to my contributions to the web3 space, I also
                    develop full-stack applications to streamline communication
                    with these smart contracts. My projects encompass a wide
                    range of functionalities.
                </p>
                <ul>
                    <li className="text-primary">- CrowdFunding</li>
                    <li className="text-primary">- Raffle</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
