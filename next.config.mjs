/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true, // 글로벌 설정
  },
};

export default nextConfig;
