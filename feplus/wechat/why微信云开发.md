通常，实现一个非静态的应用，服务端需要做以下事情：

+ 购买一个域名，完成备案；
+ 购买一个 SSL 证书，完成和域名的配置；
+ 购买一个服务器，配置好服务器的开发环境，并处理域名到路由的相关配置；
+ 购买一个数据库，并完成配置；
+ 实现服务端业务逻辑
  + 设计数据表，实现增删改查
  + 用户登录验证、授权（微信小程序get access token）
  + 配置各种日志监控等

### 通过小程序云开发

+ 客户端请求服务端通过云函数，无需域名
+ 硬件资源云开发提供，有一定免费[配额]([https://developers.weixin.qq.com/community/develop/doc/0008a2e3c34af8201f98e40d451001?blockType=1](https://developers.weixin.qq.com/community/develop/doc/0008a2e3c34af8201f98e40d451001?blockType=1)
)
+ 可视化环境配置，一键发布部署
+ 日志、自测
+ 可视化运维监控
+ 数据表索引等可视化设计配置
+ 云开发天然鉴权

> [官方介绍](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

### == JS+NodeJS+MongoDB
