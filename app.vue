<template>
  <div class="layout" :class="currentTheme">
    <header class="header">
      <div class="header-content">
        <NuxtLink :to="localePath('/')" class="logo">
          {{ $t('title') }}
        </NuxtLink>
        <nav class="nav">
          <NuxtLink :to="localePath('/')" class="nav-link">
            {{ $t('nav.home') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/articles')" class="nav-link">
            {{ $t('nav.articles') }}
          </NuxtLink>
          <div class="controls">
            <button @click="toggleLanguage" class="lang-btn" style="display: none;">
              {{ currentLocale === 'zh' ? '中文' : 'English' }}
            </button>
            <button @click="toggleTheme" class="theme-btn">
              {{ currentTheme === 'dark' ? '☀️' : '🌙' }}
            </button>
          </div>
        </nav>
      </div>
    </header>
    
    <main class="main-content">
      <NuxtPage />
    </main>
    
    <footer class="footer">
      <p>&copy; 2025 Password Generator. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const currentLocale = computed(() => locale.value)

// 主题状态
const currentTheme = ref('light')

const toggleLanguage = () => {
  const newLocale = locale.value === 'zh' ? 'en' : 'zh'
  setLocale(newLocale)
}

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  // 保存主题到localStorage
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', currentTheme.value)
  }
}

// 页面加载时恢复主题
onMounted(() => {
  if (typeof localStorage !== 'undefined') {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      currentTheme.value = savedTheme
    }
  }
})
</script>

<style>
</style>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Light Theme (Default) */
.layout.light {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --bg-light: #ffffff;
  --bg-dark: #1a1a1a;
  background-color: var(--bg-light, #ffffff);
  color: #333333;
}

/* Dark Theme */
.layout.dark {
  --primary-color: #2c1b47;
  --secondary-color: #1a1a2e;
  --bg-light: #ffffff;
  --bg-dark: #1a1a1a;
  background-color: var(--bg-dark, #1a1a1a);
  color: #ffffff;
}

.header {
  background: var(--primary-color, #667eea);
  padding: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Dark Theme Header */
.layout.dark .header {
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5em;
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.logo:hover {
  opacity: 0.8;
}

.nav {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.3);
}

.controls {
  display: flex;
  gap: 10px;
  align-items: center;
}

.lang-btn, .theme-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.lang-btn:hover, .theme-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.main-content {
  flex: 1;
}

.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: auto;
}

/* Dark Theme Footer */
.layout.dark .footer {
  background: #0d1b2a;
}

.footer p {
  margin: 0;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 15px;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
