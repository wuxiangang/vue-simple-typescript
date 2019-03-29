# webpack 4 and babel 7 typescript

``` bash
# 支持async，await

# 支持vue-property-decorator写法

# 支持eslint

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
```

# 遇到问题：
``` bash
# 主要是e2e, unit升级问题，babel版本要与插件版本对应起来；

# webpack4废弃插件以及如何代替

# vue-loader向版本15迁移
```
