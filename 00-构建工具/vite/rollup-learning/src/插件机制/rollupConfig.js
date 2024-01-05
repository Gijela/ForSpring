import { rollup } from "rollup";
import util from "util";

async function build() {
  const bundle = await rollup({
    // 路径要以 src 开头，否则终端执行 pnpm pluginLife 时读取到这里的 input 入口文件是基于 rollup-learning 文件夹
    input: ["src/插件机制/index.js"],
  });

  // 查看 build 阶段产物
  // console.log("信息: ", util.inspect(bundle));
  // console.log("信息: ", util.inspect(bundle, { depth: 4 })); // 打印到第4层深度，方便在终端查看

  // 查看 output 阶段产物
  const result = await bundle.generate({ format: 'es' })
  console.log('output 阶段信息: ', result)
}

build();

