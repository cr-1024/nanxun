
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nxweb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
    ]
  },
  css:[{src:'~/assets/css/reset.scss',lang:'scss'},
    'element-ui/lib/theme-chalk/index.css'],

  plugins:[{src:'~plugins/element-ui',ssr:true}],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#0470B8' },
  /*
  ** Build configuration
  */
  build: {
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
  },
 
}
