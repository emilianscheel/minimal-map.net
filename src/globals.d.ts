declare module '*.scss';
declare module '*.css';

import type { AdminAppConfig, MapRuntimeConfig } from './types';

declare global {
	interface Window {
		MinimalMapAdminConfig?: AdminAppConfig;
		MinimalMapBlockConfig?: MapRuntimeConfig;
		MinimalMapFrontConfig?: MapRuntimeConfig;
	}
}

export {};
