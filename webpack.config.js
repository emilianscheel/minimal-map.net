const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const path = require( 'path' );

const defaultSplitChunks = defaultConfig.optimization?.splitChunks ?? {};
const defaultCacheGroups = defaultSplitChunks.cacheGroups ?? {};
const plugins = ( defaultConfig.plugins ?? [] ).map( ( plugin ) => {
	if ( plugin instanceof MiniCssExtractPlugin ) {
		return new MiniCssExtractPlugin( {
			...plugin.options,
			chunkFilename: '[name].css',
			ignoreOrder: true,
		} );
	}

	return plugin;
} );

module.exports = {
	...defaultConfig,
	cache: {
		type: 'filesystem',
		buildDependencies: {
			config: [ __filename ],
		},
	},
	entry: {
		index: path.resolve( process.cwd(), 'src/block/index.tsx' ),
		frontend: path.resolve( process.cwd(), 'src/frontend/index.ts' ),
		admin: path.resolve( process.cwd(), 'src/admin/index.tsx' ),
	},
	plugins,
	output: {
		...defaultConfig.output,
		chunkFilename: '[name].js',
	},
	optimization: {
		...defaultConfig.optimization,
		splitChunks: {
			...defaultSplitChunks,
			cacheGroups: {
				...defaultCacheGroups,
				default: false,
				defaultVendors: false,
				mapRuntimeVendor: {
					test: /[\\/]node_modules[\\/](maplibre-gl|lucide-react|@wordpress[\\/]icons)[\\/]/,
					name: 'map-runtime-vendor',
					chunks: ( chunk ) => chunk.name === 'map-runtime',
					enforce: true,
					priority: 40,
				},
				adminDataviews: {
					test: /[\\/]node_modules[\\/]@wordpress[\\/]dataviews[\\/]/,
					name: 'admin-dataviews',
					chunks: 'async',
					enforce: true,
					priority: 30,
				},
				sharedVendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'shared-vendor',
					chunks: 'async',
					minChunks: 2,
					priority: 10,
					reuseExistingChunk: true,
				},
			},
		},
	},
	performance: false,
};
