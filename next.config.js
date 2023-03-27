/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPH_API: "https://api-ap-northeast-1.hygraph.com/v2/clfneim5g09a401t848w36ena/master",
    DOMAIN_NAME: "sitename",
    SITE_NAME: "sitename",
    
  },
};

module.exports = nextConfig;
