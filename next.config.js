/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => {
  return {
    reactStrictMode: false,
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "path": false,
          "os": false,
        }
      }
      return config
    },
  }
}


