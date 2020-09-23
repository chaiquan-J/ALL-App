const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
	publicPath: './',
	outputDir: 'dist',
	assetsDir: 'static',
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					// autoprefixer(),
					pxtorem({
						// 1倍图
						// rootValue: 37.5,
						// minPixelValue:1,
						// 2倍图
						rootValue: 75,
						minPixelValue: 2,
						propList: ['*']
					})
				]
			}
		}
	}
}
