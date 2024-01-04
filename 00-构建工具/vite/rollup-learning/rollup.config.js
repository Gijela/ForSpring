// 以下注释是为了能使用 VSCode 的类型提示
/**
 * @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  // 单个入口
  // input: ["src/index.js"],
  // 单种格式产物
  // output: {
  //   // 产物输出目录
  //   dir: "dist/es",
  //   // 产物格式
  //   format: "esm",
  // },

  // 多个入口
  // input: ['src/index.js', 'src/util.js'],
  input: {
    index: 'src/index.js',
    util: 'src/util.js',
  },
  // 多种格式产物
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
};

export default buildOptions;
