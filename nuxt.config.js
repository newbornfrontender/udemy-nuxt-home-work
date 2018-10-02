export default {
  head: {
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content:
          'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes',
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans',
      },
    ],
  },

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact',
  },

  build: {
    postcss: {
      preset: {
        stage: 0,

        autoprefixer: {
          grid: process.env.NODE_ENV === 'development' ? false : true,
        },
      },
    },

    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(jsx?|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        });
      }
    },
  },

  loading: {
    color: 'green',
  },
};
