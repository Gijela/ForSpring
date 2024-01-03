import Server from "react-dom/server";
let Greet = () => <h1>Hello, juejin!</h1>;
console.log(Server.renderToString(<Greet />));

// 应用了 env 插件后，构建时将会被替换成 process.env 对象
// import { PATH } from 'env'
// console.log(`PATH is ${PATH}`)