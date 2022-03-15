# Nuxt.js script setup demo

使用 Nuxt2 搭建的 script setup 标签 + TypeScript 项目模板

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

## 关于 `.nuxtignore`

`.nuxtignore` 配置是惰性的，只有文件发生改变，它的配置才会生效

示例：排除 pages 中 components 目录中所有的 .vue 文件

```sh
pages/**/components/*.vue
```