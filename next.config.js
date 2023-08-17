/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'wembleypark.com', 'images.pexels.com', 'drive.google.com', 'lh3.googleusercontent.com', 'hydeparkwinterwonderland.com', "blogger.googleusercontent.com"],
  },
};

module.exports = nextConfig;
