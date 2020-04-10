module.exports = {
  port: 3100, // 监听端口
  
  cssModules: true, // 是否支持css modules

  // 白名单, 默认node-modules目录下的包都不会打包到代码中, 如果配置了该白名单, 就会打包了
  whitelist: [ /* /^antd/, /^lodash/, 'tf-party'... */],
}