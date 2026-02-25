/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/tr",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
