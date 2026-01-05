---
title: 快速开始
editLink: true
---

# 快速开始

## 源码下载

- 后端管理仓库：[https://gitee.com/tyopen/zenchynadmin](https://gitee.com/tyopen/zenchynadmin)
- 前端 UniApp 仓库：[https://gitee.com/tyopen/zenchynuniapp](https://gitee.com/tyopen/zenchynuniapp)

::: info
欢迎点亮 Star 支持项目；遇到问题可在对应仓库提交 Issue，优化建议或代码贡献欢迎通过 Pull Request 参与维护。
:::

::: tip 许可与声明
本项目采用 GPL 开源协议。二开衍生版本需保留原版权信息且强制开源。
:::

## 准备工作

在开始部署之前，请确认以下环境：

- 操作系统：Linux（推荐 CentOS 7.x / Ubuntu 20.04+）
- Web 服务器：Nginx 1.18+ / Apache 2.4+
- PHP：7.4（必需，不支持 8.0+）
- 数据库：MySQL 5.7+
- Redis：5.0+（可选，用于高性能缓存）

::: warning PHP 扩展要求
需安装 IonCube 扩展，否则无法正常运行。
:::

## 后端安装步骤

1. **获取源码**
   - 从 [Gitee](https://gitee.com/tyopen/zenchynadmin) 克隆或下载最新版本源码。

2. **上传与解压**
   - 将源码上传至服务器站点根目录并解压。

3. **配置环境**
   - 设置网站运行目录为 `/public`。
   - 配置伪静态规则（ThinkPHP）。

4. **安装向导**
   - 访问您的域名 `http://your-domain.com/install`。
   - 按照页面提示输入数据库信息和管理员账号。

5. **完成安装**
   - 安装完成后，请务必删除 `/install` 目录以确保安全。

## 前端安装步骤（UNIAPP）

### 1. 准备工具
- 安装 HBuilderX（推荐），启用 uni-app 相关插件
- 安装 Node.js LTS（可选，用于命令行开发与打包）

### 2. 获取源码
- 前端仓库：<https://gitee.com/tyopen/zenchynuniapp>
- HBuilderX 直接导入，或在命令行执行：

```bash
git clone https://gitee.com/tyopen/zenchynuniapp.git
```

### 3. 安装依赖（命令行方式）
进入项目目录后执行：

::: code-group
```bash [npm]
npm install
```
```bash [pnpm]
pnpm install
```
:::

### 4. 配置后端接口域名
- 在前端项目的配置文件中设置 API 域名（如 `common/config.js`、`utils/request.js` 或环境配置）
- 将域名修改为你的服务器地址，确保与后台站点域名一致

::: warning 小程序 HTTPS 要求
小程序端需使用 HTTPS，且需在对应平台后台完成合法域名配置。
:::

### 5. 开发调试
- HBuilderX：运行到浏览器/小程序/APP 调试
- 命令行（H5）：

::: code-group
```bash [npm]
npm run dev:h5
```
```bash [pnpm]
pnpm run dev:h5
```
:::

### 6. 打包发布
- H5 构建：

::: code-group
```bash [npm]
npm run build:h5
```
```bash [pnpm]
pnpm run build:h5
```
:::

将生成的 `dist` 目录部署到你的 Web 服务器

- APP 打包：使用 HBuilderX 进行本地/云打包生成 Android/iOS 安装包
- 小程序：在 HBuilderX 中选择对应平台构建，并在平台后台完成域名与业务配置

## 常见问题

如果在安装过程中遇到问题，请查阅 [常见问题](/faq) 或加入官方交流群寻求帮助。
