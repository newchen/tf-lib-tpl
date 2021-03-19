## 组件开发模板(typescript)

> 提供了一个cli工具, 可以非常方便的初始化, 使用见: https://www.npmjs.com/package/tf-lib-cli

### 说明

> 1. 如果是github直接下载的代码, 请更改package.json文件中的: name, description, main字段内容
> 2. 默认node-modules目录下的包都不会打包到最终代码中, 如果配置了config.js whitelist(白名单), 就会打包了
> 3. 不支持sass, 因为node-sass有几率下载失败
> 4. 已配置好antd的按需加载, 只需安装antd即可: npm i antd -D (待确认: 请将依赖安装到devDependencies, 因为实际是要用业务中的antd版本, 如果安装到dependencies, 可能会造成版本冲突, ps: 貌似又不会 ???)
> 5. 如果项目中安装组件后报错, 类似于: "Cannot find module '@babel/runtime/core-js/object/keys'", 需在项目中安装`npm install @babel/runtime-corejs2`


### 目录和文件说明

- .babelrc.js     &nbsp;&nbsp;---> babel配置文件
- tsconfig.json  &nbsp;&nbsp;---> typescript配置
- typings      &nbsp;&nbsp;---> .d.ts声明文件目录
- .gitignore
- config.js    &nbsp;&nbsp;---> 自定义的配置文件
- package.json
- readme.md    &nbsp;&nbsp;---> 文档说明
- src
    + app.css  &nbsp;&nbsp;---> 开发时的demo示例
    + app.tsx  &nbsp;&nbsp;---> 开发时的demo示例
    + component
        - import  &nbsp;&nbsp;---> 该目录及下面的文件, 是适配babel-plugin-import插件的, 不用更改
            + css.js   
            + index.js
        - index.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---> 这里写组件代码
        - index.less &nbsp;&nbsp;---> 组件样式, 支持less变量, 然后使用时可配置变量主题
    + index.html  &nbsp;&nbsp;---> 模板html, 不用更改
    + index.tsx   &nbsp;&nbsp;---> 模板入口js, 不用更改
- webpack.config.bundle.js &nbsp;&nbsp;---> webpack配置, 不用更改
- webpack.config.js  &nbsp;&nbsp;---> webpack配置, 不用更改


---
### 1. API文档

| 字段名称 | 字段含义 | 默认值 |
| -------- | -------- | ---- |
|   x       |    x      |   x   |
|   x      |     x     |    x  |
|   x       |    x      |   x   |



### 2. 使用示例

```
xxx
```



### 3. 命令

```
npm start // 运行测试
npm run build // 构建生产
npm run pub // 发布
```



### 4. 版本更新说明

```
  0.1.2:
    将react和react-dom依赖放到devDependencies中, 解决业务中版本不一致问题

  0.1.0:
    初始版本
    
```
