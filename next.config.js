/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config, { isServer }) {
    // Import `svg` files as React components
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: [{ loader: "@svgr/webpack", options: { svgo: false } }],
    })

    // Import `.glsl` shaders
    config.module.rules.push({
      test: /\.glsl$/,
      type: "asset/source",
    })

    return config
  },
}
