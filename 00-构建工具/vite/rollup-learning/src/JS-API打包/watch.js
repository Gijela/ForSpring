import { watch } from "rollup";

// 解决输入代码中第三方库 lodash 是 cjs 格式的问题，
// 解决方法是使用 @rollup/plugin-node-resolve 插件来允许我们加载第三方依赖，
// 使用 @rollup/plugin-commonjs 插件将 cjs 格式的三方库转换为 esm 产物
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const watcher = watch({
  // 和 rollup 配置文件中的属性基本一致，只不过多了`watch`配置
  input: "./src/index.js",
  output: [
    {
      dir: "dist/es",
      format: "esm",
    },
    {
      dir: "dist/cjs",
      format: "cjs",
    },
  ],
  plugins: [resolve(), commonjs()],
  watch: {
    exclude: ["node_modules/**"],
    include: ["src/**"],
  },
});

// 监听 watch 各种事件
watcher.on("restart", () => {
  console.log("重新构建...");
});
watcher.on("change", (id) => {
  console.log("发生变动的模块id: ", id);
});
watcher.on("event", (e) => {
  if (e.code === "BUNDLE_END") {
    console.log('打包成功~')
    console.log("打包信息:", e);
  }
});
