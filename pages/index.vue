<template>
  <div class="password-generator">
    <div class="container">
      <h1 class="page-title">{{ $t('title') }}</h1>
      
      <div class="password-display">
        <input 
          type="text" 
          :value="generatedPassword" 
          readonly 
          class="password-output"
          :placeholder="$t('generator.placeholder')"
        />
        <button @click="copyPassword" class="copy-btn" :disabled="!generatedPassword">
          {{ copied ? $t('generator.copied') : $t('generator.copy') }}
        </button>
      </div>

      <!-- 将生成按钮移到这里，方便用户快速重新生成密码 -->
      <div class="button-group-top">
        <button @click="generatePassword" class="generate-btn">
          {{ $t('generator.generate') }}
        </button>
      </div>

      <div class="options">
        <div class="option-group">
          <label class="option-label">
            {{ $t('options.length') }}: <span class="length-value">{{ passwordLength }}</span>
          </label>
          <input 
            type="range" 
            v-model.number="passwordLength" 
            min="4" 
            max="128" 
            class="slider"
          />
        </div>

        <div class="option-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="includeUppercase" />
            <span>{{ $t('options.uppercase') }}</span>
          </label>
        </div>

        <div class="option-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="includeLowercase" />
            <span>{{ $t('options.lowercase') }}</span>
          </label>
        </div>

        <div class="option-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="includeNumbers" />
            <span>{{ $t('options.numbers') }}</span>
          </label>
        </div>

        <div class="option-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="includeSymbols" />
            <span>{{ $t('options.symbols') }}</span>
          </label>
        </div>

        <div class="option-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="excludeSimilar" />
            <span>{{ $t('options.excludeSimilar') }}</span>
          </label>
        </div>

        <div class="option-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="excludeAmbiguous" />
            <span>{{ $t('options.excludeAmbiguous') }}</span>
          </label>
        </div>
      </div>

      <div class="strength-meter" v-if="generatedPassword">
        <div class="strength-label">{{ $t('strength.label') }}</div>
        <div class="strength-bar">
          <div 
            class="strength-fill" 
            :class="strengthClass"
            :style="{ width: strengthPercentage + '%' }"
          ></div>
        </div>
        <div class="strength-text" :class="strengthClass">{{ strengthText }}</div>
      </div>

      <!-- 移除原来的按钮组 -->

      <div class="info-section">
        <h3>{{ $t('tips.title') }}</h3>
        <ul>
          <li>{{ $t('tips.tip1') }}</li>
          <li>{{ $t('tips.tip2') }}</li>
          <li>{{ $t('tips.tip3') }}</li>
          <li>{{ $t('tips.tip4') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()

const generatedPassword = ref('')
const copied = ref(false)
const passwordLength = ref(16)
const includeUppercase = ref(true)
const includeLowercase = ref(true)
const includeNumbers = ref(true)
const includeSymbols = ref(true)
const excludeSimilar = ref(false)
const excludeAmbiguous = ref(false)

const generatePassword = async () => {
  if (!includeUppercase.value && !includeLowercase.value && !includeNumbers.value && !includeSymbols.value) {
    alert(t('alerts.selectType'))
    return
  }

  let charset = ''
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let numbers = '0123456789'
  let symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

  if (excludeSimilar.value) {
    uppercase = uppercase.replace(/[IOL]/g, '')
    lowercase = lowercase.replace(/[iol]/g, '')
    numbers = numbers.replace(/[01]/g, '')
  }

  if (excludeAmbiguous.value) {
    symbols = symbols.replace(/[{}[\]()/\\'"`~,;:.<>]/g, '')
  }

  if (includeUppercase.value) charset += uppercase
  if (includeLowercase.value) charset += lowercase
  if (includeNumbers.value) charset += numbers
  if (includeSymbols.value) charset += symbols

  let password = ''

  const array = new Uint32Array(passwordLength.value)
  crypto.getRandomValues(array)
  
  for (let i = 0; i < passwordLength.value; i++) {
    password += charset[array[i] % charset.length]
  }

  generatedPassword.value = password
  copied.value = false
}

const copyPassword = async () => {
  if (!generatedPassword.value) return
  
  try {
    await navigator.clipboard.writeText(generatedPassword.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    alert(t('alerts.copyFailed'))
  }
}

const calculateStrength = computed(() => {
  const password = generatedPassword.value
  if (!password) return 0

  let strength = 0
  
  if (password.length >= 8) strength += 20
  if (password.length >= 12) strength += 20
  if (password.length >= 16) strength += 10
  
  if (/[a-z]/.test(password)) strength += 15
  if (/[A-Z]/.test(password)) strength += 15
  if (/[0-9]/.test(password)) strength += 15
  if (/[^a-zA-Z0-9]/.test(password)) strength += 15

  return Math.min(strength, 100)
})

const strengthPercentage = computed(() => calculateStrength.value)

const strengthClass = computed(() => {
  const strength = calculateStrength.value
  if (strength < 40) return 'weak'
  if (strength < 70) return 'medium'
  return 'strong'
})

const strengthText = computed(() => {
  const strength = calculateStrength.value
  if (strength < 40) return t('strength.weak')
  if (strength < 70) return t('strength.medium')
  return t('strength.strong')
})

onMounted(() => {
  generatePassword()
})

// SEO优化
// SEO优化
useHead(() => {
  const currentLocale = locale.value
  return {
    title: currentLocale === 'zh' ? '🔐 密码生成器 - 安全密码生成工具' : '🔐 Password Generator - Secure Password Tool',
    meta: [
      {
        name: 'description',
        content: currentLocale === 'zh' 
          ? '免费在线密码生成器，支持自定义长度、字符类型选择，创建安全的强密码保护您的账户。'
          : 'Free online password generator with customizable length and character types to create secure strong passwords to protect your accounts.'
      },
      {
        property: 'og:title',
        content: currentLocale === 'zh' ? '🔐 密码生成器 - 安全密码生成工具' : '🔐 Password Generator - Secure Password Tool'
      },
      {
        property: 'og:description',
        content: currentLocale === 'zh' 
          ? '免费在线密码生成器，支持自定义长度、字符类型选择，创建安全的强密码保护您的账户。'
          : 'Free online password generator with customizable length and character types to create secure strong passwords to protect your accounts.'
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
.password-generator {
  min-height: calc(100vh - 160px);
  background: var(--primary-color, #667eea);
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Dark Theme */
:global(.dark) .password-generator {
  background: var(--secondary-color, #2c1b47);
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* Dark Theme */
:global(.dark) .container {
  background: #2d2d2d;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
}

.page-title {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2em;
  font-weight: 700;
  white-space: nowrap;
  padding: 0 10px;
}

/* Dark Theme */
:global(.dark) .page-title {
  color: #ffffff;
}

.password-display {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
}

.password-output {
  flex: 1;
  padding: 15px 12px;
  font-size: 18px;
  font-family: 'Courier New', monospace;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  background: #f8f9fa;
  transition: border-color 0.3s;
  min-width: 0; /* 允许元素收缩以适应容器 */
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Dark Theme */
:global(.dark) .password-output {
  background: #404040;
  border-color: #555;
  color: #ffffff;
}

.password-output:focus {
  outline: none;
  border-color: #667eea;
}

.copy-btn {
  padding: 15px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
  white-space: nowrap;
  flex-shrink: 0; /* 防止按钮被压缩 */
}

.copy-btn:hover:not(:disabled) {
  background: #5568d3;
  transform: translateY(-2px);
}

.copy-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* 新增的顶部按钮组样式 */
.button-group-top {
  margin-bottom: 30px;
}

.button-group-top .generate-btn {
  width: 100%;
  padding: 18px;
  background: var(--primary-color, #667eea);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.button-group-top .generate-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
}

.button-group-top .generate-btn:active {
  transform: translateY(0);
}

.options {
  margin-bottom: 30px;
}

.option-group {
  margin-bottom: 20px;
}

.option-label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #333;
  font-size: 16px;
}

/* Dark Theme */
:global(.dark) .option-label {
  color: #ffffff;
}

.length-value {
  color: #667eea;
  font-size: 18px;
  margin-left: 10px;
}

.slider {
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background: #e0e0e0;
  outline: none;
  -webkit-appearance: none;
}

/* Dark Theme */
:global(.dark) .slider {
  background: #555;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #667eea;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #667eea;
  cursor: pointer;
  border: none;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #555;
  user-select: none;
}

/* Dark Theme */
:global(.dark) .checkbox-label {
  color: #cccccc;
}

.checkbox-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  cursor: pointer;
  accent-color: #667eea;
}

.checkbox-label span {
  flex: 1;
}

.strength-meter {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

/* Dark Theme */
:global(.dark) .strength-meter {
  background: #404040;
}

.strength-label {
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

/* Dark Theme */
:global(.dark) .strength-label {
  color: #ffffff;
}

.strength-bar {
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
}

/* Dark Theme */
:global(.dark) .strength-bar {
  background: #555;
}

.strength-fill {
  height: 100%;
  transition: all 0.3s;
  border-radius: 5px;
}

.strength-fill.weak {
  background: #f44336;
}

.strength-fill.medium {
  background: #ff9800;
}

.strength-fill.strong {
  background: #4caf50;
}

.strength-text {
  font-weight: 700;
  font-size: 16px;
}

.strength-text.weak {
  color: #f44336;
}

.strength-text.medium {
  color: #ff9800;
}

.strength-text.strong {
  color: #4caf50;
}

.info-section {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

/* Dark Theme */
:global(.dark) .info-section {
  background: #404040;
  border-left-color: #8a9dff;
}

.info-section h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  font-size: 18px;
}

/* Dark Theme */
:global(.dark) .info-section h3 {
  color: #ffffff;
}

.info-section li {
  margin-bottom: 8px;
  color: #555;
  line-height: 1.6;
}

/* Dark Theme */
:global(.dark) .info-section li {
  color: #cccccc;
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .page-title {
    font-size: 1.5em;
    white-space: nowrap;
    padding: 0 5px;
  }

  .password-output {
    font-size: 16px;
    padding: 12px 10px;
  }

  .button-group-top .generate-btn {
    padding: 15px;
    font-size: 16px;
  }

  .copy-btn {
    padding: 12px 12px;
    font-size: 14px;
    min-width: 80px;
  }
}
</style>
