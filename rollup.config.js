import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { swc } from "@rollup/plugin-swc";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs", // CommonJS
      sourcemap: true,
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES Modules
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    swc({ configFile: ".swcrc" }),
  ],
  external: ["react", "react-dom"],
};
