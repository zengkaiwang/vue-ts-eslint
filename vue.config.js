const path = require('path');
const Mocks = require('./mock.config');
const CompressionPlugin = require('compression-webpack-plugin');
const resolve = dir => {
  return path.join(__dirname, dir);
};

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/';

module.exports = {
  baseUrl: BASE_URL,
  outputDir: 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'));
  },
  css: {
    modules: false, // 启用 CSS modules
    extract: true, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {} // css预设器配置项
  },
  devServer: {
    before: Mocks
    // proxy: {
    //   '/api': {
    //     target: `http://${testMachine}.suanshubang.com`,
    //     // target: 'http://yapi.afpai.com/mock/115/',
    //     changeOrigin: true,
    //     pathRewrite: { '/api': '' },
    //   },
    // }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.ts$|\.html$|.\css|.\scss/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false // 不删除源文件
          })
        ]
      };
    }
  }
};
