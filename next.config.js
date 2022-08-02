/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [ "images.pexels.com", "scontent.ffru2-1.fna.fbcdn.net"],
  },
}
