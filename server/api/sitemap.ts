import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
  // 返回静态路由，支持i18n自动转换
  return [
    {
      loc: '/',
      // 启用自动i18n转换，会自动生成各语言版本
      _i18nTransform: true
    },
    {
      loc: '/articles',
      // 启用自动i18n转换，会自动生成各语言版本
      _i18nTransform: true
    }
  ]
})