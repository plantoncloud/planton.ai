// next.config.mjs
import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/docs',
})

export default withNextra({
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/install.sh',
        headers: [
          { key: 'Cache-Control', value: 'no-cache' },
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
        ],
      },
    ]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },

  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         as: '*.js',
  //         loaders: ['@svgr/webpack'],
  //       },
  //     },
  //   },
  // },
})
