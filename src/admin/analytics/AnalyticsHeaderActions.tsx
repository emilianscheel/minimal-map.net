import { FormToggle } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { AnalyticsEventCategory, AnalyticsRangeKey } from '../../types';
import ExportAnalyticsDropdown from './ExportAnalyticsDropdown';
import AnalyticsRangeSelector from './AnalyticsRangeSelector';

interface AnalyticsHeaderActionsProps {
	complianzEnabled: boolean;
	complianzInstalled: boolean;
	enabled: boolean;
	isExporting: boolean;
	isSavingSettings: boolean;
	range: AnalyticsRangeKey;
	onChangeRange: (range: AnalyticsRangeKey) => void;
	onExportCategory: (category: AnalyticsEventCategory) => void;
	onToggleAnalytics: () => void;
	onToggleComplianz: () => void;
}

export default function AnalyticsHeaderActions({
	complianzEnabled,
	complianzInstalled,
	enabled,
	isExporting,
	isSavingSettings,
	range,
	onChangeRange,
	onExportCategory,
	onToggleAnalytics,
	onToggleComplianz,
}: AnalyticsHeaderActionsProps) {
	return (
		<div className="minimal-map-admin__analytics-header-actions">
			<div className="minimal-map-admin__analytics-filter-group">
				<ExportAnalyticsDropdown
					disabled={isExporting}
					onExportSearch={() => onExportCategory('search')}
					onExportSelection={() => onExportCategory('selection')}
					onExportAction={() => onExportCategory('action')}
				/>
				<AnalyticsRangeSelector activeRange={range} onSelect={onChangeRange} />
			</div>
			<div className="minimal-map-admin__analytics-toggle-group">
				{complianzInstalled && (
					<label className="minimal-map-admin__analytics-toggle" htmlFor="minimal-map-analytics-complianz-toggle">
						<span className="minimal-map-admin__analytics-toggle-label">
							{__('Only track if Complianz confirmed', 'minimal-map')}
						</span>
						<FormToggle
							id="minimal-map-analytics-complianz-toggle"
							checked={complianzEnabled}
							disabled={isSavingSettings}
							onChange={onToggleComplianz}
						/>
					</label>
				)}
				<label className="minimal-map-admin__analytics-toggle" htmlFor="minimal-map-analytics-toggle">
					<span className="minimal-map-admin__analytics-toggle-label">
						{__('Analytics tracking', 'minimal-map')}
					</span>
					<FormToggle
						id="minimal-map-analytics-toggle"
						checked={enabled}
						disabled={isSavingSettings}
						onChange={onToggleAnalytics}
					/>
				</label>
			</div>
		</div>
	);
}
