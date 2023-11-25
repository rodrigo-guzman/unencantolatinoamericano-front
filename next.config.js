/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
        unoptimized: true,
    },
    output: 'export', // Use this line to specify the export option
    // Your configuration options
};

module.exports = nextConfig;
