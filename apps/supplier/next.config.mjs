/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3001']
    }
  },
  transpilePackages: [
    '@daqaiq/ui',
    '@daqaiq/auth',
    '@daqaiq/db',
    '@daqaiq/utils',
  ],
}

export default nextConfig 