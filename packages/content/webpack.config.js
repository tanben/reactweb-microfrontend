const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  externals: {
    Config: JSON.stringify({
      clientSideID: process.env.CONTENT_CLIENT_ID,
    }),
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
      name: "content",
      filename: "remoteEntry.js",
      remotes: {
        components: "components@http://localhost:3001/remoteEntry.js",
      },
      exposes: {
        "./Body": "./src/Body.jsx",
        "./BodyLDInit": "./src/BodyLDInit.jsx",
        "./Loading": "./src/Loading.jsx",
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
