import zhMessages from '../locales/zh.json'
import enMessages from '../locales/en.json'

export default defineNuxtPlugin(() => {
  const { $i18n } = useNuxtApp()
  
  if ($i18n) {
    // 从JSON文件加载翻译
    $i18n.mergeLocaleMessage('zh', zhMessages)
    $i18n.mergeLocaleMessage('en', enMessages)
  }
})
