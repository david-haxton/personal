/** @type {import('next').NextConfig} */
const nextConfig = {
  /* The free lessons are standalone HTML in public/try/, served as they are:
     no site layout, no iframe. These give them clean URLs. */
  async rewrites() {
    return [
      { source: "/try/not-magic", destination: "/try/not-magic.html" },
      { source: "/try/ide", destination: "/try/ide.html" },
      { source: "/try/lexical-analysis", destination: "/try/lexical-analysis.html" },
    ];
  },
};

export default nextConfig;
