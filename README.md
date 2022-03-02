# Nuxt.js script setup demo

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## todo

- [x] 添加 composition api
- [x] script setup
- [x] TypeScript
- [x] svg 自动化引入
- [x] Element UI 按需引入

## 报错问题

如果提示 `Modules should be only specified once: unplugin-vue2-script-setup/nuxt` 可以删除 nuxt 中的以下配置

```js
// nuxt.config.js
export default {
  buildModules: [
    ...
    'unplugin-vue2-script-setup/nuxt'
  ]
}
```

