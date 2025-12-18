<template>
  <div class="article-detail-page">
    <div class="container">
      <NuxtLink :to="localePath('/articles')" class="back-link">
        ← {{ $t('articles.backToList') }}
      </NuxtLink>

      <article v-if="article" class="article-content">
        <header class="article-header">
          <h1 class="article-title">{{ article.title }}</h1>
          <div class="article-meta">
            <span class="author">{{ article.author }}</span>
            <span class="separator">•</span>
            <span class="date">{{ formatDate(article.date) }}</span>
          </div>
          <div class="tags">
            <span v-for="tag in article.tags" :key="tag" class="tag">
              #{{ tag }}
            </span>
          </div>
        </header>

        <div class="article-body" v-html="renderedContent"></div>

        <footer class="article-footer">
          <div class="related-articles">
            <h3>{{ $t('articles.relatedArticles') }}</h3>
            <div class="related-grid">
              <NuxtLink 
                v-for="related in relatedArticles" 
                :key="related.id"
                :to="localePath(`/articles/${related.slug}`)"
                class="related-card"
              >
                <h4>{{ related.title }}</h4>
                <p>{{ related.description }}</p>
              </NuxtLink>
            </div>
          </div>
        </footer>
      </article>

      <div v-else class="not-found">
        <h2>Article Not Found</h2>
        <NuxtLink :to="localePath('/articles')">Back to Articles</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { articles } from '~/data/articles'
import { marked } from 'marked'

const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()

const slug = route.params.slug

const currentArticles = computed(() => {
  return articles[locale.value] || articles.zh
})

const article = computed(() => {
  return currentArticles.value.find(a => a.slug === slug)
})

const renderedContent = computed(() => {
  if (!article.value) return ''
  return marked(article.value.content)
})

const relatedArticles = computed(() => {
  if (!article.value) return []
  return currentArticles.value
    .filter(a => a.id !== article.value.id)
    .slice(0, 2)
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
    title: article.value ? 
      (currentLocale === 'zh' ? 
        `${article.value.title} - 密码生成器` : 
        `${article.value.title} - Password Generator`) : 
      (currentLocale === 'zh' ? '文章 - 密码生成器' : 'Article - Password Generator'),
    meta: [
      {
        name: 'description',
        content: article.value?.description || ''
      },
      {
        property: 'og:title',
        content: article.value?.title || ''
      },
      {
        property: 'og:description',
        content: article.value?.description || ''
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
.article-detail-page {
  min-height: calc(100vh - 160px);
  background: #f5f7fa;
  padding: 40px 20px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
  transition: opacity 0.3s;
}

.back-link:hover {
  opacity: 0.7;
}

.article-content {
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.article-header {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid #f0f0f0;
}

.article-title {
  font-size: 2.5em;
  color: #333;
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 1.2;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #999;
  font-size: 0.95em;
  margin-bottom: 15px;
}

.separator {
  color: #ddd;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: #f0f0f0;
  color: #667eea;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

.article-body {
  color: #333;
  line-height: 1.8;
  font-size: 1.1em;
}

.article-body :deep(h1) {
  font-size: 2em;
  margin: 40px 0 20px;
  color: #333;
  font-weight: 700;
}

.article-body :deep(h2) {
  font-size: 1.6em;
  margin: 35px 0 18px;
  color: #444;
  font-weight: 700;
}

.article-body :deep(h3) {
  font-size: 1.3em;
  margin: 30px 0 15px;
  color: #555;
  font-weight: 600;
}

.article-body :deep(p) {
  margin-bottom: 18px;
}

.article-body :deep(ul),
.article-body :deep(ol) {
  margin: 20px 0;
  padding-left: 30px;
}

.article-body :deep(li) {
  margin-bottom: 10px;
}

.article-body :deep(code) {
  background: #f5f7fa;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: #e83e8c;
}

.article-body :deep(pre) {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 20px 0;
}

.article-body :deep(pre code) {
  background: none;
  color: inherit;
  padding: 0;
}

.article-body :deep(blockquote) {
  border-left: 4px solid #667eea;
  padding-left: 20px;
  margin: 20px 0;
  color: #666;
  font-style: italic;
}

.article-footer {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 2px solid #f0f0f0;
}

.related-articles h3 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.related-card {
  display: block;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}

.related-card:hover {
  background: #667eea;
  color: white;
  transform: translateY(-3px);
}

.related-card h4 {
  margin: 0 0 10px 0;
  font-size: 1.1em;
}

.related-card p {
  margin: 0;
  font-size: 0.9em;
  opacity: 0.9;
}

.not-found {
  text-align: center;
  padding: 100px 20px;
  background: white;
  border-radius: 20px;
}

.not-found h2 {
  margin-bottom: 20px;
}

.not-found a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 768px) {
  .article-content {
    padding: 30px 20px;
  }

  .article-title {
    font-size: 2em;
  }

  .article-body {
    font-size: 1em;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
