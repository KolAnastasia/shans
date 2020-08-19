module.exports = {
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'https://serene-hypatia-a3aebe.netlify.com' : 'http://localhost:3000')
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Shans',
    htmlArrrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Shans project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#78BE20' },
  css: [
    '@/themes/main.sass'
  ],
  /*
  ** Build configuration
  */
  modules: [
    'nuxt-sass-resources-loader',
    '@nuxtjs/axios',
  ],
  axios: {
    proxyHeaders: false
  },
  plugins: [ 
    { src: '~/plugins/main.js'},
    { src: '~plugins/mainslider.js', ssr: false }
  ],
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

