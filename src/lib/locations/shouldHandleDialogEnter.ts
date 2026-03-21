import type { KeyboardEvent } from 'react';

export function shouldHandleDialogEnter(event: KeyboardEvent<HTMLDivElement>): boolean {
	const target = event.target;

	if (!(target instanceof HTMLElement)) {
		return false;
	}

	const tagName = target.tagName.toLowerCase();

	if (tagName === 'button' || tagName === 'textarea') {
		return false;
	}

	if (target.getAttribute('role') === 'button') {
		return false;
	}

	return event.key === 'Enter' && !event.shiftKey;
}
