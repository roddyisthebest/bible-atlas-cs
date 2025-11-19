/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/report',
        destination: 'https://bible-atlas-server.xyz/report',
      },
    ];
  },
};

module.exports = nextConfig;