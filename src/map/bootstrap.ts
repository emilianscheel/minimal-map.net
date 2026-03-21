import type { MapRuntimeConfig, MinimalMapInstance, RawMapConfig } from '../types';

type MapRuntimeModule = typeof import('./runtime');

let mapRuntimePromise: Promise<MapRuntimeModule> | null = null;

export function loadMapRuntime(): Promise<MapRuntimeModule> {
	if (!mapRuntimePromise) {
		mapRuntimePromise = import(
			/* webpackChunkName: "map-runtime" */
			'./runtime'
		);
	}

	return mapRuntimePromise;
}

export function createMinimalMap(
	host: HTMLElement,
	initialConfig: RawMapConfig = {},
	runtimeConfig: MapRuntimeConfig = {}
): MinimalMapInstance {
	let latestConfig = initialConfig;
	let runtimeInstance: MinimalMapInstance | null = null;
	let isDestroyed = false;

	const runtimeReady = loadMapRuntime()
		.then((runtime) => {
			if (isDestroyed) {
				return null;
			}

			runtimeInstance = runtime.createMinimalMap(host, latestConfig, runtimeConfig);
			return runtimeInstance;
		})
		.catch((error) => {
			console.error('Failed to load the Minimal Map runtime.', error);
			return null;
		});

	return {
		destroy: () => {
			isDestroyed = true;

			if (runtimeInstance) {
				runtimeInstance.destroy();
				runtimeInstance = null;
				return;
			}

			void runtimeReady.then((instance) => {
				instance?.destroy();
			});
		},
		update: (nextConfig: RawMapConfig = {}) => {
			if (isDestroyed) {
				return;
			}

			latestConfig = nextConfig;
			runtimeInstance?.update(nextConfig);
		},
	};
}

export function bootstrapFrontendMaps(
	runtimeConfig: MapRuntimeConfig = window.MinimalMapFrontConfig ?? {}
): void {
	const nodes = document.querySelectorAll<HTMLElement>('[data-minimal-map-config]');

	if (nodes.length === 0) {
		return;
	}

	void loadMapRuntime()
		.then((runtime) => {
			runtime.bootstrapFrontendMaps(runtimeConfig);
		})
		.catch((error) => {
			console.error('Failed to bootstrap Minimal Map frontend maps.', error);
		});
}
