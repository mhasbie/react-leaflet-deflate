/* eslint-disable */
const path = require('path');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'react-leaflet-deflate.min.js',
		library: {
			root: 'ReactLeafletDeflate',
			amd: 'react-leaflet-deflate',
			commonjs: 'react-leaflet-deflate'
		},
		libraryExport: 'default',
		libraryTarget: 'umd',
		globalObject: 'this'
	},
	externals: {
		debug: 'debug',
		leaflet: {
			commonjs: 'leaflet',
			commonjs2: 'leaflet',
			root: 'L'
		},
		'react-leaflet': {
			commonjs: 'react-leaflet',
			commonjs2: 'react-leaflet',
			root: 'ReactLeaflet'
		},
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React'
		}
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
						'@babel/plugin-transform-class-properties'
					]
                }
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'], // Allow importing .js and .jsx without extension
	},
};

