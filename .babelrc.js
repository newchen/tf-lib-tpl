// https://babeljs.io/docs/en/configuration

module.exports = {
  presets: [
    "@babel/preset-env", 
    "@babel/preset-react",
    '@babel/preset-typescript',
  ],

  plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      "@babel/plugin-proposal-object-rest-spread", 
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-transform-object-assign",
      // https://babeljs.io/docs/en/babel-runtime-corejs2
      // http://www.cnblogs.com/sea-breeze/p/10490672.html
      ["@babel/plugin-transform-runtime", { "corejs": 2 }],

      // style为'css'时引入css文件, 为true时引入less文件, 所以如果在项目中更改了主题样式, 这里style一定要是true
      ["import", { "libraryName": "antd", "style": true}], 
  ]
}

// 其它插件
// "@babel/plugin-syntax-dynamic-import" // import('xxx').then()语法
// -----------------------------------------------

// "@babel/plugin-proposal-function-bind"  //obj::func --> func.bind(obj)
// -----------------------------------------------

// "@babel/plugin-proposal-do-expressions", // do表达式
// -----------------------------------------------

// "@babel/plugin-proposal-nullish-coalescing-operator", //var foo = object.foo ?? "default";
// -----------------------------------------------

//["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }] // 管道操作
// -----------------------------------------------

// "@babel/plugin-proposal-optional-chaining", //const baz = obj?.foo?.bar?.baz;
// -----------------------------------------------

// "@babel/plugin-proposal-logical-assignment-operators", // a ||= b; a &&= b;
// -----------------------------------------------

// @babel/plugin-proposal-export-default-from // export v from 'mod';
// -----------------------------------------------

// "@babel/plugin-proposal-throw-expressions" 
// function test(param = throw new Error('required!')) {
//   const test = param === true || throw new Error('Falsey!');
// }
// -----------------------------------------------

// "@babel/plugin-proposal-export-namespace-from", //export * as ns from 'mod';
// -----------------------------------------------

// "@babel/plugin-proposal-function-sent",
// function* generator() {
//   console.log("Sent", function.sent);
//   console.log("Yield", yield);
// }

// const iterator = generator();
// iterator.next(1); // Logs "Sent 1"
// iterator.next(2); // Logs "Yield 2"
// -----------------------------------------------

// "@babel/plugin-proposal-decorators"
// -----------------------------------------------
