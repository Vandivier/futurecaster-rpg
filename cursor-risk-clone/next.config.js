// next.config.js

module.exports = {
  reactStrictMode: true,
  env: {
    // You can put your environment variables here
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    // Example: enable typescript's paths to work
    config.resolve.modules.push(__dirname)

    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  },
}
