/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Required for Docker deployment
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.googleapis.com" },
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"],
  },
};

module.exports = nextConfig;
