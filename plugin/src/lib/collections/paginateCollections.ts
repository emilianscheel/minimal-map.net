import type { CollectionRecord } from '../../types';
import type { ViewGrid, ViewTable } from '@wordpress/dataviews';

export function paginateCollections(
	collections: CollectionRecord[],
	view: (ViewGrid | ViewTable) & { search?: string }
): {
	collections: CollectionRecord[];
	totalPages: number;
} {
	const search = view.search?.toLowerCase() || '';
	const filteredCollections = search
		? collections.filter((collection) => {
				return collection.title.toLowerCase().includes(search);
		  })
		: collections;

	const page = view.page ?? 1;
	const perPage = view.perPage ?? 10;
	const totalPages = Math.max(1, Math.ceil(filteredCollections.length / perPage));
	const startIndex = (page - 1) * perPage;

	return {
		collections: filteredCollections.slice(startIndex, startIndex + perPage),
		totalPages,
	};
}
