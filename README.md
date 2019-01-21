# Webpack4配置说明

# 处理CSS：
style-loader、css-loader

# 处理图片
file-loader|优化image-webpack-loader 和 url-loader
file-loader与url-loader区别：即当配置limit上限值，此时url-loader依赖file-loader 

# 处理数据
csv-loader 和 xml-loader

# html模版处理
html-webpack-plugin

# 清理数据
clean-webpack-plugin

# 离线缓存
WebpackManifestPlugin

# hot
webpack's Watch Mode: 缺点需要手动刷新浏览器
webpack-dev-server
webpack-dev-middleware

# 代码分离
1、最简单方式 入口起点：使用 entry 配置手动地分离代码 缺点：1、包含重复的模块 2、不够灵活、不能将核心应用程序逻辑进行动态拆分代码
2、new webpack.optimize.CommonsChunkPlugin 公共模块抽离4.0已经废弃，使用splitChunks代替

# Webpack打包分析
webpack-chart: webpack 数据交互饼图。
webpack-visualizer: 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
webpack-bundle-analyzer: 一款分析 bundle 内容的插件及 CLI 工具，以便捷的、交互式、可缩放的树状图形式展现给用户。