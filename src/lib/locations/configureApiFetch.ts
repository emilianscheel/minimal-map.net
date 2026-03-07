import apiFetch from '@wordpress/api-fetch';

let hasApiFetchNonce = false;

export function configureApiFetch(nonce: string): void {
	if (!nonce || hasApiFetchNonce) {
		return;
	}

	apiFetch.use(apiFetch.createNonceMiddleware(nonce));
	hasApiFetchNonce = true;
}
