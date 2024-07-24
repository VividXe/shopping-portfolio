/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif", "image/jpeg", "image/png"],

    remotePatterns: [
      {
        hostname: "websitedemos.net",
      },
    ],
  },
};

export default nextConfig;
