# nodebb-theme-r

R 彩带飘带风格 NodeBB 主题。

- **配色**：取自 R logo 彩带渐变 —— 粉 `#ff2d78` → 紫 `#8b5cf6` → 蓝 `#2d7ff9` → 青 `#00c8f0` → 橙 `#ff9500`
- **背景**：浅色 `#f6f7fc`，突出彩带渐变
- **圆角**：卡片 16px、按钮 12px、徽章/面包屑胶囊形
- **字体**：MiSans / HarmonyOS Sans SC / PingFang SC / Microsoft YaHei…
- **基座**：`nodebb-theme-harmony` 子主题 —— 模板、功能、小部件区全部继承，只做视觉覆盖，不破坏任何功能
- **移动端**：自适应，顶栏紧凑、图片不溢出、面包屑可横滑

主题自带 R logo：`static/images/r-logo.jpg`（安装后访问路径
`/plugins/nodebb-theme-r/images/r-logo.jpg`）。

## 安装

### 从 npm 安装（推荐，支持在线更新）

```bash
npm install nodebb-theme-r
./nodebb build
```

然后在后台启用并切换主题：

1. ACP → 扩展 → 插件 → 启用 `nodebb-theme-r`（如未自动启用）
2. ACP → 外观 → 主题 → 选择 **R Ribbon** → 应用并重建

### 从 GitHub 安装

在 ACP → 扩展 → 插件 → 从 URL 安装，填：
`https://github.com/sunboss/nodebb-theme-r`

## 换上 R logo（可选）

1. ACP → 设置 → 通用 → 站点 Logo
2. 填 `/plugins/nodebb-theme-r/images/r-logo.jpg`
3. 保存。顶栏 logo 会自动带圆角阴影（主题已内置样式）。

## 升级

npm 安装的：在 ACP → 扩展 → 插件 找到主题点升级，或 `npm update nodebb-theme-r` 后重建。

## 版本

见 [CHANGELOG.md](CHANGELOG.md)。当前 `1.0.0`。

## License

MIT
