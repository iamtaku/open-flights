const { environment } = require("@rails/webpacker");

const path = require("path");

module.exports = (env) => {
  let prod = env !== undefined && env.production === true;

  return {
    devtool: prod ? "source-map" : "eval-cheap-module-source-map",

    context: path.resolve(__dirname, "../../app/javascript/packs"),
    entry: {
      application: "application.js",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },

    output: {
      path: path.resolve(__dirname, "../../dist/"),
      filename: prod ? "[name].bundle.js" : "[name].js",
    },

    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
};

module.exports = environment;
