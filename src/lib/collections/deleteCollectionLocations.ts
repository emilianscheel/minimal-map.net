import type { CollectionRecord } from '../../types';

export interface DeleteCollectionLocationPlan {
	deletedLocationIds: number[];
	sharedLocationIds: number[];
}

export interface CollectionLocationCleanupRecord {
	id: number;
	title: string;
	location_ids: number[];
}

function getUniquePositiveIds(locationIds: number[]): number[] {
	return Array.from(
		new Set(locationIds.filter((locationId) => Number.isInteger(locationId) && locationId > 0))
	);
}

export function getDeleteCollectionLocationPlan(
	collection: CollectionRecord,
	collections: CollectionRecord[],
	skipSharedLocations: boolean
): DeleteCollectionLocationPlan {
	const assignedLocationIds = getUniquePositiveIds(collection.location_ids);

	if (assignedLocationIds.length === 0) {
		return {
			deletedLocationIds: [],
			sharedLocationIds: [],
		};
	}

	const sharedLocationIds = assignedLocationIds.filter((locationId) =>
		collections.some(
			(otherCollection) =>
				otherCollection.id !== collection.id &&
				otherCollection.location_ids.includes(locationId)
		)
	);

	return {
		deletedLocationIds: skipSharedLocations
			? assignedLocationIds.filter((locationId) => !sharedLocationIds.includes(locationId))
			: assignedLocationIds,
		sharedLocationIds,
	};
}

export function getCollectionsWithoutDeletedLocationIds(
	collections: CollectionRecord[],
	deletedLocationIds: number[],
	deletedCollectionId: number
): CollectionLocationCleanupRecord[] {
	const deletedLocationIdSet = new Set(getUniquePositiveIds(deletedLocationIds));

	if (deletedLocationIdSet.size === 0) {
		return [];
	}

	return collections.reduce<CollectionLocationCleanupRecord[]>((updates, collection) => {
		if (collection.id === deletedCollectionId) {
			return updates;
		}

		const nextLocationIds = collection.location_ids.filter(
			(locationId) => !deletedLocationIdSet.has(locationId)
		);

		if (nextLocationIds.length === collection.location_ids.length) {
			return updates;
		}

		updates.push({
			id: collection.id,
			title: collection.title,
			location_ids: nextLocationIds,
		});

		return updates;
	}, []);
}
