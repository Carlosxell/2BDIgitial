const fs = require('fs');

module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '2BDigital - Teste';
      return args;
    });
  },
  devServer: {
    https: {
      key: fs.readFileSync('./localhost+1-key.pem'),
      cert: fs.readFileSync('./localhost+1.pem'),
    },
  },
};
