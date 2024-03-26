/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sujeitoprogramador.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
