/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["replicate.delivery.com", "replicate.com", "replicate.delivery"],

  },
}

module.exports = nextConfig