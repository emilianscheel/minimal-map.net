export function normalizeWebsiteValue(value: string): string {
	const trimmed = value.trim();

	if (!trimmed) {
		return '';
	}

	const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

	try {
		return new URL(normalized).toString();
	} catch {
		return trimmed;
	}
}
