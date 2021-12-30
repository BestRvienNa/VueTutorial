module.exports = {
    pages: {
      index: {
        //入口
        entry: 'src/main.js',
      },
    },
    //关闭语法检查
    lintOnSave:false,
    //开启代理服务器(方式一)
    // devServer: {
    //   proxy: 'http://localhost:5000'//告诉代理服务器把请求发给谁
    // }
    //方式配置多个代理
    devServer: {
      proxy: {
        '/api': {//api代表请求前缀
          target:'http://localhost:5000',
          pathRewrite:{'^/api':''},
          ws: true,//用于支持websocket
          changeOrigin: true//是否隐藏自己的ip和端口号（用于请求头中的host值）
        },
        '/car': {//api代表请求前缀
          target:'http://localhost:5001',
          pathRewrite:{'^/car':''},
          ws: true,//用于支持websocket
          changeOrigin: true//是否隐藏自己的ip和端口号（用于请求头中的host值）
        },
      }
    }
  }