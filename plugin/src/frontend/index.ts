import './style.scss';
import { bootstrapFrontendMaps } from '../map/bootstrap';
import type { MapRuntimeConfig } from '../types';

function initialize(): void {
	const runtimeConfig: MapRuntimeConfig = window.MinimalMapFrontConfig ?? {};
	bootstrapFrontendMaps(runtimeConfig);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initialize, { once: true });
} else {
	initialize();
}
