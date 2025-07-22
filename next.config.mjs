/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["jajalenpas.pasuruankab.com"],
  },
};

export default nextConfig;
