---
title: 常见问题
editLink: true
---

# 常见问题 (FAQ)

## 安装部署

### Q: 安装时提示“数据库连接失败”怎么办？
A: 请检查以下几点：
1. 数据库地址、用户名、密码是否正确。
2. 数据库服务是否已启动。
3. 如果是云服务器，请检查安全组端口（默认 3306）是否开放。

### Q: 安装后报错403 Forbidden怎么解决？
A: 系统基于ThinkPHP框架，默认配置下，需要确保 `public` 目录下的 `.htaccess` 文件（或 `nginx.conf` 中的伪静态配置）正确。

### Q: 伪静态如何配置？
A: 
- **Nginx**:
  ```nginx
  location / {
      if (!-e $request_filename){
          rewrite  ^(.*)$  /index.php?s=$1  last;   break;
      }
  }
  ```
- **Apache**:
  使用默认提供的 `.htaccess` 文件即可。

## BUG反馈

### Q: 发现了一个 BUG 或功能建议？
A: 为方便管理和实时监控BUG，请你在 [后端管理仓库](https://gitee.com/tyopen/zenchynadmin) [前端 UniApp 仓库](https://gitee.com/tyopen/zenchynuniapp) 提交 Issue，其他渠道不支持反馈，谢谢合作。
B：如果是功能建议，欢迎在对应仓库提交 Pull Request 参与贡献。
