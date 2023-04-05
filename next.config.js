/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPH_API: "https://api-ap-northeast-1.hygraph.com/v2/clg3k6teu1bxx01t0auqrbzdg/master",
    DOMAIN_NAME: "vistaclubservice.ru",
    SITE_NAME: "sitename",
    SMTP_NAME: "avtoserg79@gmail.com",
    SMTP_PASS: "limfxfpjpnqbpkmc"
  },
};

module.exports = nextConfig;
