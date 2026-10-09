# nodebb-theme-iptv

R 彩带飘带风格 NodeBB 主题，对标 `iptv.1234r.com`（R电视宣传站）的设计语言。

- **配色**：取自 R logo 彩带渐变 —— 粉 `#ff2d78` → 紫 `#8b5cf6` → 蓝 `#2d7ff9` → 青 `#00c8f0` → 橙 `#ff9500`
- **背景**：浅色 `#f6f7fc`，突出彩带渐变
- **圆角**：卡片 16px、按钮 12px、徽章/面包屑胶囊形
- **字体**：与 iptv 站一致（MiSans / HarmonyOS Sans SC / PingFang SC / Microsoft YaHei…）
- **基座**：`nodebb-theme-harmony` 子主题 —— 模板、功能、小部件区全部继承，只做视觉覆盖，不破坏任何功能
- **移动端**：自适应，顶栏紧凑、图片不溢出、面包屑可横滑

主题自带 R logo：`static/images/r-logo.jpg`（安装后访问路径
`/plugins/nodebb-theme-iptv/images/r-logo.jpg`）。

## 安装

以 meta.1234r.com（Docker 部署，容器 `nodebb-nodebb-1`）为例：

```bash
# 1. 传源码到服务器持久化目录
mkdir -p /data/sunboss/nodebb/theme-src
tar -xzf nodebb-theme-iptv-1.0.0.tar.gz -C /data/sunboss/nodebb/theme-src/

# 2. 拷进容器并修正属主（容器内 NodeBB 以 uid 1001 运行）
docker cp /data/sunboss/nodebb/theme-src/nodebb-theme-iptv/. \
  nodebb-nodebb-1:/usr/src/app/plugin-src/nodebb-theme-iptv/
docker exec -u root nodebb-nodebb-1 chown -R 1001:1001 /usr/src/app/plugin-src/nodebb-theme-iptv

# 3. 用 npm 本地安装（自动写入 package.json 依赖）
docker exec nodebb-nodebb-1 sh -c "cd /usr/src/app && npm install ./plugin-src/nodebb-theme-iptv"

# 4. 构建前端资源（主题 SCSS 生效必需）
docker exec nodebb-nodebb-1 sh -c "cd /usr/src/app && ./nodebb build"

# 5. 重启 NodeBB
docker restart nodebb-nodebb-1
```

然后在后台启用并切换主题：

1. ACP → 扩展 → 插件 → 启用 `nodebb-theme-iptv`（如未自动启用）
2. ACP → 外观 → 主题 → 选择 **IPTV Ribbon** → 应用并重建

## 换上 R logo（可选）

1. ACP → 设置 → 通用 → 站点 Logo
2. 填 `/plugins/nodebb-theme-iptv/images/r-logo.jpg`
3. 保存。顶栏 logo 会自动带圆角阴影（主题已内置样式）。

## 升级

1. 用新版 tar.gz 覆盖 `/data/sunboss/nodebb/theme-src/nodebb-theme-iptv/`
2. 重复上面步骤 2–5
3. ACP → 外观 → 主题 → 重新应用

## 版本

见 [CHANGELOG.md](CHANGELOG.md)。当前 `1.0.0`。

## License

MIT
