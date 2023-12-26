// 从中你可以看到，Tailwind CSS 的编译能力是通过 Postcs 插件实现的
// 而 Vite 本身内置了 PostCsS，因此可以通过 PostCSS 配置接入 Tailwind CSS
// 注意: Vite 配置文件中如果有 PostCSS 配置的情况下会覆盖掉 post.config.is 的内容!

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  },
}