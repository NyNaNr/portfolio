/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["www.google.com"],
  },
  productionBrowserSourceMaps: true,
  webpack(config, { isServer }) {
    // Import videos, models, hdrs, and fonts
    config.module.rules.push({
      test: /\.(mp4|hdr|glb|woff|woff2)$/i,
      type: "asset/resource",
    })

    // Import `.glsl` shaders
    config.module.rules.push({
      test: /\.glsl$/,
      type: "asset/source",
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}
