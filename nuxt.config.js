export default {
  head: {
    meta: [{
      charset: 'utf-8',
    }, {
      name: 'viewport',
      content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes',
    }, {
      'http-equiv': 'x-ua-compatible',
      content: 'ie=edge',
    }],
  },

  router: {
    linkActiveClass: 'route-link--active',
    linkExactActiveClass: 'route-link--active-exact',
  },

  loaders: {
    vue: {
      shadowMode: true,
    },
  },

  build: {
    postcss: {
      preset: {
        stage: 0,

        browsers: 'last 2 versions',

        autoprefixer: {
          // grid: process.env.NODE_ENV === 'production' ? true : false,
          grid: false,
        },
      },
    },
  },

  loading: {
    color: 'green',
  },
};
