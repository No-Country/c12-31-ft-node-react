import path from "path";
import { Configuration } from "webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: Configuration = {
  mode: "development",
  entry: "./src/app.ts",
  target: ["node"],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.build.json"
            }
          },
          {
            loader: "swc-loader"
          }
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
    // modules: [
    //   path.resolve(__dirname, "node_modules"),
    //   path.resolve(__dirname, "../node_modules/"),
    // ],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
};

export default config;
