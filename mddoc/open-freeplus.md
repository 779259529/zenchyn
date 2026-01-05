---
title: FreePlus 开源版
description: 免费、开源、可二开的社区版
---

# FreePlus 开源版

FreePlus 是禅境系统（ZenChyn）的**完全开源版本**，自发布以来累计下载 **2W+**，深受社区喜爱。你可以**零成本**搭建属于自己的软件分享社区，也可以基于源码进行二次开发，实现个性化需求。

::: info
开源版主打“自由二开 + 多端适配”，适合个人与团队快速起步与试水。
:::

## 核心功能

- ✅ **软件市场**：发布、下载、评分、评论
- ✅ **论坛社区**：板块管理、置顶、加精、点赞
- ✅ **积分体系**：签到、任务、兑换、商城
- ✅ **多端适配**：H5、微信小程序、QQ 小程序
- ✅ **开源无加密**：源码公开，可自由修改、商用
- ✅ **一键部署**：提供完整安装包与文档，5 分钟上线

## 技术栈

| 端 | 技术 | 说明 |
| -- | ---- | ---- |
| 后端 | ThinkPHP 6 | 高效、稳定、易扩展 |
| 前端 | UNIAPP + Vue3 | 编译到多端的统一框架 |
| 数据库 | MySQL 5.7+ | 支持 MariaDB |
| 缓存 | Redis（可选） | 提升并发性能 |
| 部署 | Linux / Windows | 支持虚拟主机、Docker |

## 快速开始

### 1. 获取源码

- GitHub：[https://github.com/779259529/FreePlus](https://github.com/779259529/FreePlus)
- Gitee：[https://gitee.com/zenchyn/FreePlus](https://gitee.com/zenchyn/FreePlus)

### 2. 环境要求

- PHP ≥ 7.4
- MySQL ≥ 5.7
- Nginx / Apache（伪静态支持）
- 文件读写权限 755

### 3. 安装步骤

::: details 安装步骤（展开查看）
1. 上传源码到网站根目录
2. 导入 `database.sql` 到 MySQL
3. 修改 `.env` 中的数据库信息
4. 设置运行目录为 `public`，开启伪静态
5. 访问域名，按向导完成安装
:::

详细安装文档请参考 [FreePlus 文档站](https://freeplus.zenchyn.com)。

## 开源协议

FreePlus 采用 **MIT 协议** 发布，你可以：

- ✅ 免费下载、使用、修改
- ✅ 用于个人或商业项目
- ✅ 二次开发后闭源发布
- ❌ 禁止删除原作者版权信息

## 社区支持

- 💬 交流群：795287852（QQ）
- 🐛 提交 Issue：[GitHub Issues](https://github.com/779259529/FreePlus/issues)
- 📖 安装教程：[Bilibili 视频](https://space.bilibili.com/123456)

## 常见问题

**Q: 开源版与禅境系统（ZenChyn）有什么区别？**

A: 开源版功能完整但无官方一对一技术支持、无付费插件市场；禅境系统提供商业授权、专属插件、技术托管等增值服务。

**Q: 是否可以商用？**

A: 可以，MIT 协议允许商用，但请保留原作者版权信息。

**Q: 如何升级？**

A: 关注 GitHub Releases，下载对应补丁包，按升级文档覆盖即可。

## 下一步

- [下载源码](https://github.com/779259529/FreePlus/releases)
- [查看安装文档](https://freeplus.zenchyn.com)
- [加入交流群](https://qm.qq.com/cgi-bin/qm/qr?k=123456)

> 如果开源版无法满足你的需求，欢迎了解 [禅境系统授权版](/zenchyn)，享受更多高级功能与官方支持！
