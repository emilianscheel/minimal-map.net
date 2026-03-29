import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import DeleteAllTagsModal from './DeleteAllTagsModal';
import DeleteTagModal from './DeleteTagModal';
import TagsEmptyState from './TagsEmptyState';
import TagsGrid from './TagsGrid';
import TagModal from './TagModal';
import type { TagsController } from './types';

export default function TagsView({ controller }: { controller: TagsController }) {
	return (
		<div className="minimal-map-admin__tags-view">
			{controller.actionNotice ? (
				<Notice
					className="minimal-map-admin__locations-notice"
					status={controller.actionNotice.status}
					onDismiss={controller.dismissActionNotice}
				>
					{controller.actionNotice.message}
				</Notice>
			) : null}

			{controller.loadError ? (
				<Notice className="minimal-map-admin__locations-notice" status="error" isDismissible={false}>
					{controller.loadError}
				</Notice>
			) : null}

			<div className="minimal-map-admin__tags-content">
				{controller.isLoading ? (
					<div className="minimal-map-admin__locations-state minimal-map-admin__locations-state--loading">
						<Spinner />
					</div>
				) : controller.totalItems === 0 ? (
					<TagsEmptyState controller={controller} />
				) : (
					<TagsGrid controller={controller} />
				)}
			</div>

			<TagModal controller={controller} />
			<DeleteAllTagsModal controller={controller} />
			<DeleteTagModal controller={controller} />
		</div>
	);
}

export { useTagsController } from './controller';
