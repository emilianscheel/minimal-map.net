const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve( process.cwd(), 'src/block/index.tsx' ),
		frontend: path.resolve( process.cwd(), 'src/frontend/index.ts' ),
		admin: path.resolve( process.cwd(), 'src/admin/index.tsx' ),
	},
};
