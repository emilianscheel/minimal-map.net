import type { FieldErrors } from '../../types';

export function hasFieldErrors(errors: FieldErrors): boolean {
	return Object.values(errors).some(Boolean);
}
