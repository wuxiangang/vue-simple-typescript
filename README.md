# webpack 4 and babel 7 Typescript

``` bash
# 支持jsx ts

# 支持async，await

# 支持vue-property-decorator写法

# 支持vuex-class装饰器

# 支持tslint

# 支持dll

# 支持externals

# 支持单元测试
```

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# 如有dll预打包
npm run dll

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

```

# 注意点：

``` bash
# dll 打包 vue， vendor里写成vue/dist/vue.js

# 了解一些webpack4的mode

# ts import的支持率不高 declare声明模块

# ts declare Vue原型（prototype）声明

# vuex modules的使用了解一下
```

# 遇到问题：
``` bash
# 主要是e2e, unit升级问题，babel版本要与插件版本对应起来；

# webpack4废弃插件以及如何代替

# vue-loader向版本15迁移

# vuex-class引入actions, mutations等 内部变量格式声明调用时无效
 同理prototype绑定原型属性到vue，内部同样无效 或将模块之间导入组件 
 import modules from modules
 modules.func 内部检测可用
 或者 在d.ts中声明属性格式 vuex则在调用的组件中声明格式
```
