/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7,
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
