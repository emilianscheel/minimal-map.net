import { SelectControl } from '@wordpress/components';
import type { CsvImportMappingRow } from './customCsvImport';

interface CustomCsvImportMappingGridProps {
	rows: CsvImportMappingRow[];
	selectedValues: Record<string, number | null>;
	onChange: (field: string, columnIndex: string) => void;
	disabled: boolean;
}

export default function CustomCsvImportMappingGrid({
	rows,
	selectedValues,
	onChange,
	disabled,
}: CustomCsvImportMappingGridProps) {
	return (
		<div className="minimal-map-admin__custom-csv-import-grid">
			{rows.map((row) => (
				<div key={row.key} className="minimal-map-admin__custom-csv-import-row">
					<SelectControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						hideLabelFromVision
						label={row.label}
						value={row.key}
						options={[{ label: row.label, value: row.key }]}
						disabled
					/>
					<SelectControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						hideLabelFromVision
						label={row.label}
						value={selectedValues[row.key] === null ? '' : `${selectedValues[row.key]}`}
						options={row.options}
						onChange={(value) => onChange(row.key, value)}
						disabled={disabled}
					/>
				</div>
			))}
		</div>
	);
}
