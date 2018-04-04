const path = require('path');

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'rui-men.js',
		path: resolve('lib')
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
					loaders: {
						css: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
							},
						],
						less: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                            },
                            {
                                loader: 'less-loader',
                            },
                        ],
					}
				}
			},
			{
				test: /\.js$/,
        		loader: 'babel-loader',
        		include: [resolve('src')]
			},
			{
                test: /\.less$/,
				loader: 'less-loader',
				include: [resolve('src')],
				options: {
					limit: 10000,
					name: 'css/[name].[ext]'
				}
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
	}
};