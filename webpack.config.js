var path = require('path');
const CSSLOADER = {
	loader: "css-loader",
	options: {
		modules: true,
		sourceMap: true,
		context: '/',
		localIdentName: "[local]___[hash:base64:5]"
	}
}

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					CSSLOADER, // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			}
		],
	},
	externals: {
		'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
	},
};
