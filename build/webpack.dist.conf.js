const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const lessParse = require('./less-parse.js')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].js',
		path: resolve('lib'),
		library: 'rui-men',  
		libraryTarget: 'umd', 
		umdNamedDefine: true 
	},
	resolve: {
		extensions: ['.js','.vue'],
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: true
				}
			},
			{
				test: /\.js$/,
        		loader: 'babel-loader',
        		include: [resolve('src')]
			},
			{
				test: /\.less$/,
        		use: ['style-loader','css-loader','less-loader',{
                    loader: 'sass-resources-loader',
                    options: { resources: [
                        resolve('src/style/rui-base.less'),
                    ]}
                }],
				include: [resolve('src')]
			},
			{
				test: /\.css$/,
        		loader: 'css-loader',
				include: [resolve('src')]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('main.css')
	],
	externals: {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue'
		}
	}
};

if (typeof window !== 'undefined' && window.Vue) { 
	window.Vue.use(rui-men); 
}