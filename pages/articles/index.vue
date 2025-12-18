<template>
  <div class="articles-page">
    <div class="container">
      <h1 class="page-title">{{ $t('articles.title') }}</h1>
      
      <div class="articles-grid">
        <article 
          v-for="article in currentArticles" 
          :key="article.id"
          class="article-card"
        >
          <NuxtLink :to="localePath(`/articles/${article.slug}`)" class="article-link">
            <div class="article-header">
              <h2 class="article-title">{{ article.title }}</h2>
              <p class="article-date">{{ formatDate(article.date) }}</p>
            </div>
            <p class="article-description">{{ article.description }}</p>
            <div class="article-footer">
              <div class="tags">
                <span v-for="tag in article.tags" :key="tag" class="tag">
                  #{{ tag }}
                </span>
              </div>
              <span class="read-more">{{ $t('articles.readMore') }} →</span>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { articles } from '~/data/articles'

const { locale } = useI18n()
const localePath = useLocalePath()

const currentArticles = computed(() => {
  return articles[locale.value] || articles.zh
})

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString(locale.value === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO优化
useHead(() => {
  const currentLocale = locale.value
  return {
    title: currentLocale === 'zh' ? '密码安全知识 - 密码生成器' : 'Security Tips - Password Generator',
    meta: [
      {
        name: 'description',
        content: currentLocale === 'zh' 
          ? '学习密码安全知识，了解如何创建和管理强密码，保护你的在线账户安全。'
          : 'Learn password security knowledge, create and manage strong passwords to protect your online accounts.'
      },
      {
        property: 'og:title',
        content: currentLocale === 'zh' ? '密码安全知识 - 密码生成器' : 'Security Tips - Password Generator'
      },
      {
        property: 'og:description',
        content: currentLocale === 'zh' 
          ? '学习密码安全知识，了解如何创建和管理强密码，保护你的在线账户安全。'
          : 'Learn password security knowledge, create and manage strong passwords to protect your online accounts.'
      },
      {
        property: 'og:locale',
        content: currentLocale === 'zh' ? 'zh_CN' : 'en_US'
      }
    ],
    htmlAttrs: {
      lang: currentLocale === 'zh' ? 'zh-CN' : 'en-US'
    }
  }
})
</script>

<style scoped>
.articles-page {
  min-height: calc(100vh - 160px);
  background: var(--primary-color, #667eea);
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  color: white;
  margin-bottom: 40px;
  font-size: 2.5em;
  font-weight: 700;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.article-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.article-link {
  display: block;
  padding: 30px;
  text-decoration: none;
  color: inherit;
}

.article-header {
  margin-bottom: 15px;
}

.article-title {
  font-size: 1.5em;
  color: #333;
  margin: 0 0 10px 0;
  font-weight: 700;
}

.article-date {
  color: #999;
  font-size: 0.9em;
  margin: 0;
}

.article-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #f0f0f0;
  color: #667eea;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85em;
  font-weight: 500;
}

.read-more {
  color: #667eea;
  font-weight: 600;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2em;
  }
}
</style>
