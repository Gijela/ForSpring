import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // plugins 数组中默认配置了官方的 react 插件，来提供 react 项目编译和热更新的功能
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  // 预构建自定义配置
  optimizeDeps: {
    // 入口文件。值为一个字符串数组，支持各种格式入口，比如 html, js, jsx, ts, tsx
    entries: ['js', 'jsx', 'ts', 'tsx', 'html'],
    // note: vite 会根据入口文件(entries)自动搜集依赖，然后进行预构建，然而 vite 默认的扫描行为并不完全可靠，
    // 这就需要联合配置 include 来达到完美的预构建配置效果。
    // 强制执行预构建的依赖项。值为一个数组字符串。
    // include: ['lodash-es', 'vue'], // 将 lodash-es 和 vue 两个包强制进行预构建
    include: [],
    // 自定义 Esbuild 行为
    esbuildOptions: {
      plugins: [] // 加入的一些插件，通常用来处理第三方包代码问题
    }
  }
})
