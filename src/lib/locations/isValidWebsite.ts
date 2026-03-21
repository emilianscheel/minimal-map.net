import { normalizeWebsiteValue } from './normalizeWebsiteValue';

export function isValidWebsite(website: string): boolean {
	try {
		new URL(normalizeWebsiteValue(website));
		return true;
	} catch {
		return false;
	}
}
