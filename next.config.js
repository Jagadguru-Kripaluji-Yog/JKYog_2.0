/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jipl-strapi-aws-s3-images-bucket.s3.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
