let envPlugin = {
  name: "env",
  setup(build) {
    build.onResolve({ filter: /^env$/ }, (args) => ({
      path: args.path,
      namespace: "env-ns",
    }));
    build.onLoad({ filter: /.*/, namespace: "env-ns" }, () => ({
      contents: JSON.stringify(process.env),
      loader: "json",
    }));
  },
};

require("esbuild")
  .build({
    entryPoints: ["src/index.jsx"],
    bundle: true,
    outfile: "out.js",
    // 应用插件
    plugins: [envPlugin],
  })
  .catch(() => process.exit(1));


// 应用了 env 插件后，构建时将会被替换成 process.env 对象
// import { PATH } from 'env'
// console.log(`PATH is ${PATH}`)
