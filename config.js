const moduleName = require('./package.json').name

module.exports = {
  port: 3100, // 监听端口
  
  cssLoaderOptions: { // css-loader配置, ps: 我只配置了less文件的支持
    modules: true,
    localIdentName: `${moduleName}__[local]--[hash:base64:5]`
  },

  // 白名单, 默认node-modules目录下的包都不会打包到代码中, 如果配置了该白名单, 就会打包了
  whitelist: [ /* /^antd/, /^lodash/, 'tf-party'... */],
}