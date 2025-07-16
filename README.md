# 学术个人主页

一个现代化、响应式的学术个人主页模板，使用纯HTML、CSS和JavaScript构建。

## 特色功能

### 🎨 现代化设计
- 渐变背景和毛玻璃效果
- 平滑动画和过渡效果
- 响应式设计，适配各种设备
- 深色和浅色主题元素

### 📱 完全响应式
- 移动端友好的导航菜单
- 自适应网格布局
- 触摸友好的交互设计

### ⚡ 性能优化
- 延迟加载动画
- 节流优化的滚动事件
- 预加载关键资源
- 轻量级代码结构

### 🎪 酷炫效果
- 打字机动画效果
- 悬停时的卡片变换
- 平滑滚动导航
- 渐入式元素显示

## 文件结构

```
├── index.html      # 主页面文件
├── style.css       # 样式文件
├── script.js       # 交互脚本
└── README.md       # 说明文档
```

## 快速开始

1. 下载所有文件到您的网站目录
2. 用浏览器打开 `index.html`
3. 开始自定义您的内容！

## 自定义指南

### 1. 基本信息修改

在 `index.html` 中修改以下内容：

- **姓名**: 搜索 "张三" 并替换为您的姓名
- **标题**: 修改 `<title>` 标签
- **职业描述**: 更新 "计算机科学博士候选人"
- **个人简介**: 更新 hero 部分的描述文字

### 2. 个人照片

替换占位符图片：
```html
<img src="您的照片URL" alt="您的姓名">
```

### 3. 联系信息

更新联系方式部分：
- 邮箱地址
- 电话号码
- 办公地址
- 社交媒体链接

### 4. 研究领域

在研究领域部分，您可以：
- 修改研究方向描述
- 更换图标（使用 Font Awesome 图标）
- 添加或删除研究卡片

### 5. 发表论文

更新 publications 部分：
- 论文标题
- 作者列表
- 发表期刊/会议
- 年份
- 链接（PDF、代码、引用）

### 6. 教育经历

修改教育背景：
- 学位名称
- 学校名称
- 时间范围

## 颜色主题自定义

在 `style.css` 的 `:root` 部分修改颜色变量：

```css
:root {
    --primary-color: #4F46E5;    /* 主色调 */
    --secondary-color: #7C3AED;  /* 辅助色 */
    --accent-color: #06B6D4;     /* 强调色 */
    --text-dark: #1F2937;        /* 深色文字 */
    --text-light: #6B7280;       /* 浅色文字 */
}
```

## 添加新内容块

### 添加新的研究卡片：

```html
<div class="research-card">
    <div class="research-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>研究方向标题</h3>
    <p>研究方向描述</p>
</div>
```

### 添加新的论文条目：

```html
<div class="publication-item">
    <div class="publication-year">2024</div>
    <div class="publication-content">
        <h3>"论文标题"</h3>
        <p class="authors"><strong>您的姓名</strong>, 其他作者</p>
        <p class="venue">期刊/会议名称</p>
        <div class="publication-links">
            <a href="#" class="pub-link">PDF</a>
            <a href="#" class="pub-link">Code</a>
            <a href="#" class="pub-link">Cite</a>
        </div>
    </div>
</div>
```

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 技术栈

- **HTML5**: 语义化标记
- **CSS3**: 现代CSS特性，CSS Grid，Flexbox
- **JavaScript ES6+**: 现代JavaScript特性
- **Font Awesome**: 图标库
- **Google Fonts**: 字体库（Inter）

## 性能建议

1. **图片优化**: 使用适当格式和尺寸的图片
2. **字体加载**: 考虑使用 `font-display: swap`
3. **CDN**: 使用CDN加速外部资源加载
4. **压缩**: 上线前压缩CSS和JavaScript文件

## 部署指南

### GitHub Pages
1. 将文件上传到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源

### Netlify
1. 将文件拖拽到Netlify部署页面
2. 或连接GitHub仓库自动部署

### 其他平台
适用于任何支持静态文件的托管平台。

## 常见问题

**Q: 如何修改动画效果？**
A: 在 `style.css` 中查找 `@keyframes` 规则和 `transition` 属性进行修改。

**Q: 如何添加更多页面？**
A: 创建新的HTML文件，并在导航菜单中添加链接。

**Q: 移动端菜单不工作？**
A: 确保 `script.js` 文件正确加载，检查控制台是否有错误。

## 许可证

MIT License - 您可以自由使用、修改和分发此模板。

## 支持

如果您在使用过程中遇到问题，请检查：
1. 所有文件是否在同一目录
2. 文件路径是否正确
3. 浏览器控制台是否有错误信息

---

祝您建站愉快！🎉 