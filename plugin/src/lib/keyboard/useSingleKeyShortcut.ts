import { useEffect } from '@wordpress/element';

function isEditableShortcutTarget(target: EventTarget | null): boolean {
	if (!(target instanceof HTMLElement)) {
		return false;
	}

	return Boolean(
		target.closest(
			'input, textarea, select, [contenteditable=""], [contenteditable="true"], [role="textbox"]'
		)
	);
}

function isMatchingKey(event: KeyboardEvent, key: string): boolean {
	const normalizedKey = key.toLowerCase();
	const normalizedEventKey = event.key.toLowerCase();

	if (normalizedEventKey === normalizedKey) {
		return true;
	}

	if (normalizedKey.length === 1) {
		return event.code === `Key${normalizedKey.toUpperCase()}`;
	}

	return false;
}

export function useSingleKeyShortcut({
	active,
	blocked = false,
	key,
	onTrigger,
}: {
	active: boolean;
	blocked?: boolean;
	key: string;
	onTrigger: () => void;
}) {
	useEffect(() => {
		if (!active || typeof document === 'undefined') {
			return undefined;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (
				event.defaultPrevented ||
				event.repeat ||
				blocked ||
				event.metaKey ||
				event.ctrlKey ||
				event.altKey ||
				event.shiftKey ||
				isEditableShortcutTarget(event.target) ||
				!isMatchingKey(event, key)
			) {
				return;
			}

			if (event.cancelable) {
				event.preventDefault();
			}

			event.stopImmediatePropagation();
			event.stopPropagation();
			onTrigger();
		};

		document.addEventListener('keydown', handleKeyDown, true);

		return () => {
			document.removeEventListener('keydown', handleKeyDown, true);
		};
	}, [active, blocked, key, onTrigger]);
}
