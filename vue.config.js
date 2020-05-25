/*
 * @Descripttion:
 * @Author: voanit
 * @Date: 2019-10-12 15:25:52
 * @LastEditors: voanit
 * @LastEditTime: 2020-04-03 09:28:13
 */
const name = "ts";
const IS_PROD = ["production", "test"].includes(process.env.NODE_ENV);
const path = require("path");

const filenameHashing = true;
const productionSourceMap = !IS_PROD;
const assetsDir = "";

function resolve(dir) {
  return path.join(__dirname, dir);
}

function getAssetPath(assetsDir, filePath) {
  return assetsDir ? path.posix.join(assetsDir, filePath) : filePath;
}
module.exports = {
  transpileDependencies: ["pxjy-fulltime"],
  publicPath: process.env.NODE_ENV !== "development" ? "/erp" : "/", // 部署应用包的基本URL
  lintOnSave: false, // process.env.NODE_ENV === 'development',
  pwa: {
    name: name
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "src/styles/_variables.scss"),
        path.resolve(__dirname, "src/styles/_mixins.scss")
      ]
    }
  },
  chainWebpack(config) {
    config.set("name", name);
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@module_pxjy", resolve("node_modules/pxjy-fulltime/src"));
    // 制定环境打包js路径
    if (IS_PROD) {
      const isLegacyBundle =
        process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD;

      const filename = getAssetPath(
        assetsDir,
        `js/[name]${isLegacyBundle ? `-legacy` : ``}${
          filenameHashing ? ".[contenthash:8]" : ""
        }.js`
      );
      // config
      // 	.mode('production')
      // 	.devtool(productionSourceMap ? 'source-map' : false)
      // 	.output.filename(filename)
      // 	.chunkFilename(filename)

      config.when(IS_PROD, config => {
        config
          .devtool(productionSourceMap ? "source-map" : false)
          .output.filename(filename)
          .chunkFilename(filename);
      });
    }
  },
  devServer: {
    disableHostCheck: true,
    port: 8083,
    proxy: {
      // 设置代理
      "/feapi": {
        target: "http://fulltime.test.pxjy.com/api/", // https://leehe.imdo.co/api/、http://fulltime.test.pxjy.com/api/
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          "^/feapi": "/" // 修改接口路径
        }
      },
      "/uc": {
        target: "http://fulltime.test.pxjy.com/uc/",
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          "^/uc": "/"
        }
      }
    }
  },

  css: {
    sourceMap: true // 设置为true，方便css调试
  },

  configureWebpack: config => {
    if (!IS_PROD) {
      // 开发环境配置
      config.devtool = "source-map";
    }
  }
};