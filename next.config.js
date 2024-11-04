// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        // You can also specify a pathname pattern if needed:
        // pathname: "/images/**",
      },
    ],
  },
};
