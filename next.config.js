/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === 'development'
  },
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = {
  images: {
    domains: [ "images.pexels.com", "scontent.ffru2-1.fna.fbcdn.net"],
  },
}
