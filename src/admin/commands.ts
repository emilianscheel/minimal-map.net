import { store as commandsStore } from '@wordpress/commands';
import { dispatch } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import { __, sprintf } from '@wordpress/i18n';
import { download, page } from '@wordpress/icons';
import { exportLocationsFile } from '../lib/locations/exportLocationsFile';
import type {
	AdminCommandAction,
	AdminCommandActionKey,
	AdminCommandSection,
	AdminCommandsConfig,
} from '../types';

const DEFAULT_CONFIG: AdminCommandsConfig = {
	sections: [],
	actions: [],
	locationsExportConfig: null,
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

const ACTION_HANDLERS: Record<
	AdminCommandActionKey,
	(config: AdminCommandsConfig) => Promise<void>
> = {
	'export-locations-csv': async (config) => {
		if (!config.locationsExportConfig) {
			return;
		}

		await exportLocationsFile('csv', config.locationsExportConfig);
	},
	'export-locations-excel': async (config) => {
		if (!config.locationsExportConfig) {
			return;
		}

		await exportLocationsFile('xlsx', config.locationsExportConfig);
	},
};

function getLocationsExportErrorMessage(error: unknown): string {
	return error instanceof Error
		? error.message
		: __('Locations could not be exported.', 'minimal-map');
}

function registerActionCommand(action: AdminCommandAction, config: AdminCommandsConfig): void {
	const handler = ACTION_HANDLERS[action.key];

	if (!handler) {
		return;
	}

	dispatch(commandsStore).registerCommand({
		name: `minimal-map/${action.key}`,
		label: action.label,
		icon: download,
		category: 'command',
		keywords: action.keywords,
		callback: ({ close }: { close: () => void }) => {
			close();

			void handler(config).catch((error) => {
				window.alert(getLocationsExportErrorMessage(error));
			});
		},
	});
}

function mount(): void {
	const config = window.MinimalMapAdminCommandsConfig ?? DEFAULT_CONFIG;

	config.sections.forEach(registerSectionCommand);
	config.actions.forEach((action) => registerActionCommand(action, config));
}

domReady( mount );
