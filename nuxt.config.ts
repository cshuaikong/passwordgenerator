// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],
  site: {
    url: 'https://passwordgenerator.antelopes.workers.dev'
  },
  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', name: '中文' },
      { code: 'en', iso: 'en-US', name: 'English' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },
  sitemap: {
    sources: [
      '/api/sitemap'
    ],
    // 启用自动i18n支持
    autoI18n: true,
    // 自定义站点地图路径前缀（可选）
    sitemapsPathPrefix: '/sitemap',
    // 确保包含所有必要的页面
    include: [
      '/**'
    ]
  },
  app: {
    head: {
      title: '密码生成器 - Password Generator',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '免费在线密码生成器，支持关键字生成、自定义长度、字符类型选择。Free online password generator with keyword support.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'google-site-verification', content: 'iKa-kc5KxRLpokOkBeDMVs6fnROGVi5xOyw_9GhkPNI' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})