/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "www.notion.so"],
  },
};

module.exports = nextConfig;
