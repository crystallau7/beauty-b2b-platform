# 全球美妆B2B平台 - Global Beauty B2B Platform

## 🚀 网站最新更新内容

### 最新修改 (2024年最新版本)
- **关于我们板块** - 更新为"关于我们"标题，优化文案内容
- **品牌展示优化** - 移除品牌卡片点击效果，改为纯展示模式
- **导航栏调整** - 供应链板块移至品牌后面
- **文案内容更新** - 突出韩国总部核心地位和全球布局优势

### 新增功能
- **韩国爆品推荐** - Korean Hot Products section
- **临期产品特惠** - Clearance Products section  
- **客户群体展示** - 海外分销商/批发商服务介绍
- **默认英文界面** - English as default language

### 主要特性
- 多语言支持 (中文/英文/韩文)
- 响应式设计
- EmailJS询价表单
- 品牌矩阵展示 (静态展示，无点击效果)
- 供应链优势介绍
- 企业简介与客户群体展示

## 📁 文件结构
```
beauty-website-deploy/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 交互脚本
├── images/             # 图片资源
├── deploy.bat          # 部署脚本
└── README.md           # 说明文档
```

## 🏗️ 网站结构说明

### 主要板块
1. **首页 (Hero Section)** - B2B美妆供应链主题图片
2. **关于我们 (About Us)** - 企业简介，韩国仓库图片
3. **可洽谈合作品牌 (Brands)** - 美妆品牌 + 潮牌分类展示
4. **供应链 (Supply Chain)** - 供应链优势介绍
5. **我们的客户群体 (Customer Groups)** - 海外分销商服务
6. **韩国爆品 (Korean Hot Products)** - 韩国热门产品
7. **临期产品 (Clearance Products)** - 特惠产品展示
8. **联系我们 (Contact)** - 询价表单

### 品牌展示
- **美妆品牌**: Kiehl's, Chanel, Diptyque, Helena Rubinstein, Givenchy, Aveda, Hourglass, Pola
- **潮牌**: Adidas, Nike, Wass Up, Puma, MLB, Off-White, Essentials, Supreme
- **展示方式**: 静态卡片展示，无点击效果

## 📝 详细修改记录

### 关于我们板块修改
- **标题**: "企业简介" → "关于我们"
- **文案内容**: 更新为突出韩国总部核心地位和全球布局优势
- **布局**: 图片在左，文字在右，标题在图片上方
- **样式**: 增加行间距和段落间距，提升阅读体验

### 品牌展示优化
- **移除点击效果**: 所有品牌卡片从 `<a>` 标签改为 `<div>` 标签
- **静态展示**: 移除hover动画、鼠标指针变化、页面跳转
- **保持样式**: 外观和布局完全保持不变

### 导航栏调整
- **顺序优化**: 供应链板块移至品牌后面
- **逻辑顺序**: 首页 → 企业简介 → 品牌 → 供应链 → 其他板块

### 文案内容更新
- 突出韩国总部作为核心的优势
- 强调香港、深圳、扬州的分支网络
- 明确覆盖东南亚、中东、欧美等主要市场
- 强调新品试水、区域独家合作等专业服务

## 🔧 GitHub Pages 部署步骤

### 方法1：更新现有仓库
1. 进入您的GitHub仓库目录
2. 替换以下文件：
   - index.html` → 新的HTML文件
   - `styles.css` → 新的CSS文件
   - `script.js` → 新的JavaScript文件
3. 提交更改：
   ```bash
   git add .
   git commit -m "Update website: add Korean Hot Products and Clearance sections, set English as default language"
   git push origin main
   ```

### 方法2：创建新仓库
1. 在GitHub上创建新仓库
2. 克隆到本地：
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
3. 复制所有文件到仓库目录
4. 提交并推送：
   ```bash
   git add .
   git commit -m "Initial commit: Global Beauty B2B Platform"
   git push origin main
   ```
5. 启用GitHub Pages

## 🌐 访问地址
部署完成后，您的网站将在以下地址可用：
- `https://yourusername.github.io/your-repo-name/`

## 📧 询价表单配置
网站使用EmailJS发送询价表单，请确保：
- Service ID: `service_y2ur8xo`
- Template ID: `template_cygz6pq`
- Public Key: `pQawzAYPpaHYW27ZS`

## 🎨 自定义修改
如需修改网站内容：
1. 编辑 `index.html` 中的文本内容
2. 修改 `styles.css` 中的样式
3. 调整 `script.js` 中的交互逻辑

## 📱 响应式支持
网站支持各种设备：
- 桌面电脑
- 平板电脑
- 移动手机

## 🔍 浏览器兼容性
- Chrome (推荐)
- Firefox
- Safari
- Edge














