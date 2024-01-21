/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ["github-readme-stats.vercel.app"],
    //     dangerouslyAllowSVG: true,
    // },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
        ],
    },
};

module.exports = nextConfig;
