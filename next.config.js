/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPH_API: "https://api-ap-northeast-1.hygraph.com/v2/clg3k6teu1bxx01t0auqrbzdg/master",
    DOMAIN_NAME: "vistaclubservice.ru",
    SITE_NAME: "sitename",
    SMTP_NAME: "wearedev-studio@yandex.ru",
    SMTP_PASS: "vfcwsdxqgyqxiclv",
    EMAIL_RECIPIENT: "avtoserg79@gmail.com"
  },
};

module.exports = nextConfig;
