// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   reactStrictMode: true,
//     images: {
//     domains: ['res.cloudinary.com'],
//   },
// };

// export default nextConfig;

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}
export default nextConfig;
