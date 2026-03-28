declare module '*.scss';
declare module '*.css';

import type { AdminAppConfig, MapRuntimeConfig } from './types';
import type { AdminCommandsConfig } from './types';

declare global {
	interface Window {
		MinimalMapAdminConfig?: AdminAppConfig;
		MinimalMapAdminCommandsConfig?: AdminCommandsConfig;
		MinimalMapBlockConfig?: MapRuntimeConfig;
		MinimalMapFrontConfig?: MapRuntimeConfig;
	}
}

export {};
