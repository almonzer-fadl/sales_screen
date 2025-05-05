/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable production optimizations
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  
  // Configure images
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_DOMAIN],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Configure headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  
  // Configure redirects for subdomains
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'admin.:domain'
          }
        ],
        destination: '/admin',
        permanent: true
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'supplier.:domain'
          }
        ],
        destination: '/supplier',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
