const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'My Hobby Site',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'A site to showcase my hobbies',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
   themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' }, 
      { text: 'Blog', link: '/blog/' }, 
      { text: 'Contact', link: '/contact/' } ,
      { text: 'Hobby', link: '/hobby/' } 
    ],
    sidebar: {
      '/about/': [
        {
          title: 'About Me ',
          collapsable: false,
          children: [
            '',
            'more-info',
          ]
        }
      ],
    },
    
  },
  
  
  

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
