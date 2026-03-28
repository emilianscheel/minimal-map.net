import { store as commandsStore } from '@wordpress/commands';
import { dispatch } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import { __, sprintf } from '@wordpress/i18n';
import { page } from '@wordpress/icons';
import type { AdminCommandSection, AdminCommandsConfig } from '../types';

const DEFAULT_CONFIG: AdminCommandsConfig = {
	sections: [],
};

function registerSectionCommand( section: AdminCommandSection ): void {
	dispatch( commandsStore ).registerCommand( {
		name: `minimal-map/go-to-${ section.view }`,
		label: sprintf( __( 'Minimal Map: %s', 'minimal-map' ), section.title ),
		icon: page,
		category: 'view',
		keywords: section.keywords,
		callback: ( { close }: { close: () => void } ) => {
			window.location.assign( section.url );
			close();
		},
	} );
}

function mount(): void {
	const config = window.MinimalMapAdminCommandsConfig ?? DEFAULT_CONFIG;

	config.sections.forEach( registerSectionCommand );
}

domReady( mount );
