/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Optimize images for Netlify
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: false, // Netlify supports Next.js Image optimization
  },
  
  // Output configuration for Netlify
  output: 'standalone',
  trailingSlash: false,
  
  // Optimize for static deployment
  generateEtags: false,
  
  // Compression is handled by Netlify
  compress: false,
};

module.exports = nextConfig;