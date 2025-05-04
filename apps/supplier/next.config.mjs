/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/constants"],
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig; 