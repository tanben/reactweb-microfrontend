const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  cache: false,
  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "components",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header": "./src/Header.jsx",
        "./HeaderNew": "./src/HeaderNew.jsx",
        "./Footer": "./src/Footer.jsx",
        "./FlagStatus": "./src/FlagStatus.jsx",
        "./FlagBoolEval": "./src/FlagBoolEval.jsx",
        "./FlagConditionalRender": "./src/FlagConditionalRender.jsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "launchdarkly-react-client-sdk": {
          singleton: true,
          requiredVersion: deps["launchdarkly-react-client-sdk"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
