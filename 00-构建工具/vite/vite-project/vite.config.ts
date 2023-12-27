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
  }
})
