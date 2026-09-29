# 宠智灵 APP 3.0 · 爬宠摄像头原型

交互原型，沿用 APP 3.0 蓝白 UI 和五个全局栏目。摄像头包含视频直播与智能养护；“我的”为静态展示页。双击根目录 `index.html` 即可离线体验。

## 文件结构

```text
index.html                  # 构建后的单文件入口，需与源码一起提交
script.js                   # 页面、状态及交互逻辑
styles.css                  # 页面样式
assets/                     # 图片素材（包含历史参考素材）
prototype/
  shell.html                # 外层 HTML 模板
  original-camera.json      # 复用的行为与健康详情模板
  build.py                  # 将源码与图片内嵌到 index.html
scripts/deploy_pages.py     # 发布 gh-pages 分支
tests/flows.cjs             # 交互回归检查
docs/                      # UI、开发及验收说明
references/                # 原 APP 截图和历史摄像头设计板
outputs/                   # 本机交付物及备份，不提交到 Git
```

`script.js`、`styles.css` 保留根目录路径，避免破坏现有维护和构建方式。请修改源码后构建，不要只修改生成的 HTML。

## 开发与验证

环境：Node.js 22.12+（或 24+）、npm、Python 3。

```sh
npm ci
npm run build
npm test
```

构建无第三方 Python 依赖，输出内嵌样式、脚本及图片的 `index.html`（约 3 MB）。运行页面不需要 Node.js，也不需要联网。测试依赖由 `package-lock.json` 锁定。

## 主要演示路径

- 首页设备卡片 → 视频直播 → 全屏、截图、录像、画质选择。
- 本地／云回放 → 日期切换 → 有录像、无录像与加载失败状态。
- 智能养护 → 饮食、活动、蜕皮详情及健康报告；事件缩略图打开居中播放器。
- 添加设备 → 配网演示 → 命名 → 关联或稍后关联宠物。
- 右侧场景面板切换正常多设备、离线、未订阅、数据不足等状态。

切换场景会重置演示数据。普通操作通过 localStorage 保存在本机，刷新回到首页；删除 `czl-app3-camera-v1` 可清除本机数据。

## 模拟边界

日期固定为 2026-09-23；视频、AI、支付和配网均为本机演示，不连接硬件或生产接口。截图和录像仅生成模拟记录，不输出真实视频。AI 评分、风险及物种内容为原型样例，不代表算法能力。未订阅的智能养护以示例结果展示，不授予云录像权益。

不包含环境监测、设备控制、声音或对讲。摄像头内无分享／邀请流程；家庭管理由 APP 3.0 承接。“我的”页面功能卡片不跳转。

## 文档与参考

- [UI 交接说明](docs/UI交接说明.md)
- [开发交接说明](docs/开发交接说明.md)
- [验收记录](docs/验收记录.md)
- [参考资料](references/README.md)

文档中部分早期验收记录用于保留演进历史，以当前原型及文档末尾最新修订为准。真实 SDK、接口、硬件能力及真机适配需后续联调。

本仓库现为公开仓库，用于原型协作与 GitHub Pages 部署，不添加额外许可。原有本机备份、排期表及交付压缩包保留在 `outputs/`，不推送到代码仓库。

## GitHub Pages 部署

站点域名：`https://petapp.aidenzhao.site/`。GitHub Pages 从 `gh-pages` 分支根目录发布，仅包含 `index.html`、`.nojekyll` 和 `CNAME`。主域名的个人博客不变。

更新页面后执行：

```sh
npm run build
npm test
# 提交并推送 main 的源码修改后：
npm run deploy
```

部署命令需要本机 GitHub Git 推送权限，会在临时目录同步 `gh-pages`，正常快进推送，不强制覆盖；GitHub 随后异步构建页面。部署脚本不改变 DNS。阿里云解析需保留 `petapp` 的 CNAME 指向 `Zhao-Huazhou.github.io`，GitHub Pages 设置中绑定该域名，待证书签发后开启 Enforce HTTPS。
