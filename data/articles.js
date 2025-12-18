export const articles = {
  zh: [
    {
      id: 'password-security-basics',
      title: '密码安全基础知识',
      slug: 'password-security-basics',
      description: '了解创建和管理强密码的基本原则，保护你的在线账户安全。',
      content: `
# 密码安全基础知识

## 为什么密码安全很重要？

在数字时代，密码是保护我们个人信息和在线账户的第一道防线。一个强大的密码可以有效防止黑客入侵、身份盗用和数据泄露。

## 创建强密码的原则

### 1. 长度很重要
- 密码应至少包含12个字符
- 更长的密码更难破解
- 建议使用16个或更多字符

### 2. 字符多样性
- 混合使用大写字母（A-Z）
- 混合使用小写字母（a-z）
- 包含数字（0-9）
- 添加特殊符号（!@#$%^&*）

### 3. 避免常见错误
- 不要使用生日、姓名等个人信息
- 避免使用常见单词或短语
- 不要使用键盘序列（如qwerty、123456）
- 避免重复使用相同密码

## 密码管理最佳实践

### 使用密码管理器
密码管理器可以帮助你：
- 生成强大的随机密码
- 安全存储所有密码
- 自动填充登录信息
- 跨设备同步密码

### 定期更新密码
- 每3-6个月更换重要账户的密码
- 发现数据泄露后立即更改密码
- 不要在多个网站使用相同密码

### 启用双因素认证（2FA）
- 为重要账户启用2FA
- 使用认证应用而非短信验证
- 保存备份代码

## 识别和应对威胁

### 钓鱼攻击
- 警惕可疑的电子邮件和链接
- 始终检查网站URL
- 不要在不安全的网站输入密码

### 暴力破解
- 使用复杂且长的密码
- 启用账户锁定功能
- 监控异常登录活动

## 使用我们的密码生成器

我们的密码生成器提供：
- 完全随机的强密码生成
- 基于关键字的可记忆密码
- 自定义字符类型和长度
- 实时密码强度评估

立即生成你的安全密码，保护你的数字生活！
      `,
      date: '2025-12-16',
      author: 'Security Expert',
      tags: ['密码安全', '网络安全', '隐私保护']
    },
    {
      id: 'keyword-password-generation',
      title: '如何使用关键字生成易记的强密码',
      slug: 'keyword-password-generation',
      description: '学习使用关键字生成既安全又容易记忆的密码，平衡安全性与便利性。',
      content: `
# 如何使用关键字生成易记的强密码

## 关键字密码生成的优势

传统的随机密码虽然安全，但很难记忆。关键字密码生成方法可以帮助你创建既安全又容易记住的密码。

## 什么是基于关键字的密码？

基于关键字的密码是使用一个你容易记住的词或短语作为种子，通过加密算法生成一个复杂的密码。

### 工作原理

1. **选择关键字**：选择一个对你有意义但他人难以猜测的词
2. **加密转换**：系统使用SHA-256等加密算法处理关键字
3. **生成密码**：基于加密结果生成符合要求的密码

## 选择好的关键字

### 推荐做法 ✅
- 使用多个单词的组合（如"BlueSky2024"）
- 添加网站名称（如"gmail-primary"）
- 包含特殊含义的数字（如纪念日）
- 使用拼音或缩写

### 避免做法 ❌
- 不要使用单个常见单词
- 避免纯数字或纯字母
- 不要使用公开的个人信息
- 避免过于简单的组合

## 实际应用示例

### 示例1：工作邮箱
关键字：work-email-2024
生成的密码：W#k9mL$3xP2q

### 示例2：银行账户
关键字：mybank-secure-123
生成的密码：B@7kN&5vR9tY

### 示例3：社交媒体
关键字：social-blue-bird
生成的密码：S#2cL!8pB4dK

## 为不同网站使用不同关键字

通过在基础关键字后添加网站标识，可以为每个网站生成唯一密码：

- Gmail：mybase-gmail
- Facebook：mybase-facebook
- Amazon：mybase-amazon

这样既保证了每个网站密码的独特性，又便于记忆。

## 安全提示

1. **不要共享关键字**：你的关键字应该只有你知道
2. **定期更换**：可以在关键字中添加时间元素定期更新
3. **记录提示**：可以记录关键字的提示（不是关键字本身）
4. **结合密码管理器**：使用密码管理器存储生成的密码

## 开始使用

访问我们的密码生成器：
1. 勾选"使用关键字生成"选项
2. 输入你选择的关键字
3. 调整密码长度和字符类型
4. 点击生成按钮
5. 复制并保存你的密码

记住：好的密码是安全和便利的平衡！
      `,
      date: '2025-12-15',
      author: 'Tech Writer',
      tags: ['密码生成', '技巧', '安全']
    },
    {
      id: 'common-password-mistakes',
      title: '10个最常见的密码错误及如何避免',
      slug: 'common-password-mistakes',
      description: '了解人们在创建和管理密码时最常犯的错误，以及如何避免这些错误。',
      content: `
# 10个最常见的密码错误及如何避免

## 前言

尽管网络安全威胁日益严重，许多人仍在使用弱密码。让我们了解最常见的密码错误，并学习如何避免它们。

## 1. 使用过于简单的密码

### 错误示例
- "123456"
- "password"
- "qwerty"

### 正确做法
使用至少12个字符，混合大小写字母、数字和符号。

## 2. 在多个网站重复使用同一密码

### 为什么危险？
如果一个网站被攻破，黑客会尝试在其他网站使用相同的密码。

### 解决方案
- 为每个网站使用唯一密码
- 使用密码管理器管理多个密码
- 使用关键字+网站名的组合

## 3. 使用个人信息作为密码

### 避免使用
- 生日
- 姓名
- 电话号码
- 家庭成员姓名

### 替代方案
使用随机生成的密码或无关联的关键字组合。

## 4. 不定期更换密码

### 推荐频率
- 重要账户：每3个月
- 一般账户：每6个月
- 发现异常后：立即更换

## 5. 将密码写在纸上或明文存储

### 安全存储方法
- 使用加密的密码管理器
- 启用主密码保护
- 开启生物识别认证

## 6. 忽略密码强度提示

### 重视强度指标
- 弱密码：立即更改
- 中等密码：尝试加强
- 强密码：保持并定期更新

## 7. 不启用双因素认证

### 2FA的重要性
即使密码泄露，没有第二因素仍无法登录。

### 推荐方式
- 使用认证应用（Google Authenticator、Authy）
- 硬件密钥
- 生物识别

## 8. 点击可疑链接输入密码

### 防范钓鱼
- 检查URL是否正确
- 查看HTTPS证书
- 不点击邮件中的可疑链接

## 9. 在公共WiFi下输入密码

### 安全措施
- 使用VPN
- 避免登录敏感账户
- 使用移动数据

## 10. 分享密码给他人

### 安全共享
如必须共享：
- 使用密码管理器的共享功能
- 事后立即更改密码
- 限制共享范围和时间

## 总结

避免这些常见错误，可以大大提升你的账户安全性。记住：
- ✅ 使用强密码生成器
- ✅ 启用双因素认证
- ✅ 定期更新密码
- ✅ 使用密码管理器
- ✅ 保持警惕

立即使用我们的密码生成器创建安全的密码吧！
      `,
      date: '2025-12-14',
      author: 'Security Analyst',
      tags: ['安全提示', '密码错误', '最佳实践']
    }
  ],
  en: [
    {
      id: 'password-security-basics',
      title: 'Password Security Basics',
      slug: 'password-security-basics',
      description: 'Learn the fundamental principles of creating and managing strong passwords to protect your online accounts.',
      content: `
# Password Security Basics

## Why Password Security Matters

In the digital age, passwords are the first line of defense protecting our personal information and online accounts. A strong password can effectively prevent hacking, identity theft, and data breaches.

## Principles of Creating Strong Passwords

### 1. Length Matters
- Passwords should contain at least 12 characters
- Longer passwords are harder to crack
- 16 or more characters recommended

### 2. Character Diversity
- Mix uppercase letters (A-Z)
- Mix lowercase letters (a-z)
- Include numbers (0-9)
- Add special symbols (!@#$%^&*)

### 3. Avoid Common Mistakes
- Don't use personal info like birthdays or names
- Avoid common words or phrases
- Don't use keyboard sequences (like qwerty, 123456)
- Avoid reusing the same password

## Password Management Best Practices

### Use a Password Manager
Password managers help you:
- Generate strong random passwords
- Securely store all passwords
- Auto-fill login credentials
- Sync passwords across devices

### Regular Password Updates
- Change important account passwords every 3-6 months
- Update immediately after data breach discovery
- Don't reuse passwords across websites

### Enable Two-Factor Authentication (2FA)
- Enable 2FA for important accounts
- Use authenticator apps instead of SMS
- Save backup codes

## Identifying and Responding to Threats

### Phishing Attacks
- Be wary of suspicious emails and links
- Always verify website URLs
- Don't enter passwords on unsecured sites

### Brute Force Attacks
- Use complex and long passwords
- Enable account lockout features
- Monitor unusual login activities

## Use Our Password Generator

Our password generator provides:
- Completely random strong password generation
- Keyword-based memorable passwords
- Customizable character types and length
- Real-time password strength assessment

Generate your secure password now and protect your digital life!
      `,
      date: '2025-12-16',
      author: 'Security Expert',
      tags: ['password security', 'cybersecurity', 'privacy']
    },
    {
      id: 'keyword-password-generation',
      title: 'How to Generate Memorable Strong Passwords with Keywords',
      slug: 'keyword-password-generation',
      description: 'Learn to use keywords to generate passwords that are both secure and easy to remember, balancing security with convenience.',
      content: `
# How to Generate Memorable Strong Passwords with Keywords

## Advantages of Keyword Password Generation

While traditional random passwords are secure, they're hard to remember. Keyword password generation helps you create passwords that are both secure and memorable.

## What is a Keyword-Based Password?

A keyword-based password uses a word or phrase that's easy for you to remember as a seed, generating a complex password through encryption algorithms.

### How It Works

1. **Choose a Keyword**: Select a word meaningful to you but hard for others to guess
2. **Encryption Transform**: System processes keyword using algorithms like SHA-256
3. **Generate Password**: Creates a password based on encryption results

## Choosing Good Keywords

### Recommended Practices ✅
- Use multi-word combinations (like "BlueSky2024")
- Add website names (like "gmail-primary")
- Include numbers with special meaning
- Use phonetics or abbreviations

### Avoid These ❌
- Don't use single common words
- Avoid pure numbers or letters
- Don't use public personal information
- Avoid overly simple combinations

## Practical Examples

### Example 1: Work Email
Keyword: work-email-2024
Generated: W#k9mL$3xP2q

### Example 2: Bank Account
Keyword: mybank-secure-123
Generated: B@7kN&5vR9tY

### Example 3: Social Media
Keyword: social-blue-bird
Generated: S#2cL!8pB4dK

## Different Keywords for Different Sites

Add site identifiers to your base keyword to generate unique passwords:

- Gmail: \`mybase-gmail\`
- Facebook: \`mybase-facebook\`
- Amazon: \`mybase-amazon\`

This ensures uniqueness while remaining memorable.

## Security Tips

1. **Don't Share Keywords**: Keep your keyword private
2. **Regular Updates**: Add time elements to keywords for periodic updates
3. **Record Hints**: Save hints (not the keyword itself)
4. **Use with Password Manager**: Store generated passwords securely

## Get Started

Visit our password generator:
1. Check "Use Keyword Generation" option
2. Enter your chosen keyword
3. Adjust password length and character types
4. Click generate button
5. Copy and save your password

Remember: A good password balances security and convenience!
      `,
      date: '2025-12-15',
      author: 'Tech Writer',
      tags: ['password generation', 'tips', 'security']
    },
    {
      id: 'common-password-mistakes',
      title: '10 Most Common Password Mistakes and How to Avoid Them',
      slug: 'common-password-mistakes',
      description: 'Learn about the most common mistakes people make when creating and managing passwords, and how to avoid them.',
      content: `
# 10 Most Common Password Mistakes and How to Avoid Them

## Introduction

Despite increasing cybersecurity threats, many people still use weak passwords. Let's understand the most common password mistakes and learn how to avoid them.

## 1. Using Too Simple Passwords

### Wrong Examples
- "123456"
- "password"
- "qwerty"

### Correct Approach
Use at least 12 characters, mixing uppercase, lowercase, numbers, and symbols.

## 2. Reusing Same Password Across Sites

### Why Dangerous?
If one site is breached, hackers will try the same password elsewhere.

### Solution
- Use unique passwords for each site
- Use a password manager
- Use keyword + site name combinations

## 3. Using Personal Information

### Avoid Using
- Birthdays
- Names
- Phone numbers
- Family member names

### Alternative
Use randomly generated passwords or unrelated keyword combinations.

## 4. Not Changing Passwords Regularly

### Recommended Frequency
- Important accounts: Every 3 months
- General accounts: Every 6 months
- After anomalies: Immediately

## 5. Writing Passwords on Paper or Plain Text

### Secure Storage Methods
- Use encrypted password managers
- Enable master password protection
- Turn on biometric authentication

## 6. Ignoring Password Strength Indicators

### Value Strength Metrics
- Weak password: Change immediately
- Medium password: Try to strengthen
- Strong password: Maintain and update regularly

## 7. Not Enabling Two-Factor Authentication

### Importance of 2FA
Even if password leaks, login is impossible without second factor.

### Recommended Methods
- Authenticator apps (Google Authenticator, Authy)
- Hardware keys
- Biometric authentication

## 8. Entering Passwords on Suspicious Links

### Prevent Phishing
- Verify URL correctness
- Check HTTPS certificate
- Don't click suspicious email links

## 9. Entering Passwords on Public WiFi

### Security Measures
- Use VPN
- Avoid logging into sensitive accounts
- Use mobile data

## 10. Sharing Passwords with Others

### Secure Sharing
If necessary:
- Use password manager's sharing feature
- Change password immediately after
- Limit sharing scope and duration

## Summary

Avoiding these common mistakes greatly improves your account security. Remember:
- ✅ Use strong password generator
- ✅ Enable two-factor authentication
- ✅ Update passwords regularly
- ✅ Use password manager
- ✅ Stay vigilant

Use our password generator to create secure passwords now!
      `,
      date: '2025-12-14',
      author: 'Security Analyst',
      tags: ['security tips', 'password mistakes', 'best practices']
    }
  ]
}
