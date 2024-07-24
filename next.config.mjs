/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "websitedemos.net",
      },
    ],
  },
};

export default nextConfig;
