import { Button, Dropdown, MenuGroup, MenuItem, __experimentalHStack as HStack } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ChevronDown, Download, FileSpreadsheet } from 'lucide-react';

interface ExportLocationsDropdownProps {
	onExport: () => void;
	onExportExcel: () => void;
	onExportJson: () => void;
	onExportExample: () => void;
	onExportExampleExcel: () => void;
	onExportExampleJson: () => void;
}

export function ExportLocationsDropdown({
	onExport,
	onExportExcel,
	onExportJson,
	onExportExample,
	onExportExampleExcel,
	onExportExampleJson,
}: ExportLocationsDropdownProps) {
	return (
		<Dropdown
			popoverProps={{ placement: 'bottom-end' }}
			renderToggle={({ isOpen, onToggle }) => (
				<Button
					onClick={onToggle}
					aria-expanded={isOpen}
					variant="tertiary"
					icon={<Download size={18} />}
					label={__('Export locations', 'minimal-map-net')}
					__next40pxDefaultSize
				>
					<ChevronDown size={16} />
				</Button>
			)}
			renderContent={({ onClose }) => (
				<MenuGroup label={__('Export Options', 'minimal-map-net')}>
					<MenuItem
						onClick={() => {
							onExport();
							onClose();
						}}
						icon={<FileSpreadsheet size={16} />}
					>
						{__('Download as CSV', 'minimal-map-net')}
					</MenuItem>
					<MenuItem
						onClick={() => {
							onExportExcel();
							onClose();
						}}
						icon={<FileSpreadsheet size={16} />}
					>
						{__('Download as Excel', 'minimal-map-net')}
					</MenuItem>
					<MenuItem
						onClick={() => {
							onExportJson();
							onClose();
						}}
						icon={<FileSpreadsheet size={16} />}
					>
						{__('Download as JSON', 'minimal-map-net')}
					</MenuItem>
					<MenuItem
						onClick={() => {
							onExportExample();
							onClose();
						}}
						icon={<FileSpreadsheet size={16} />}
					>
						{__('Download Example CSV', 'minimal-map-net')}
					</MenuItem>
					<MenuItem
						onClick={() => {
							onExportExampleExcel();
							onClose();
						}}
						icon={<FileSpreadsheet size={16} />}
					>
						{__('Download Example Excel', 'minimal-map-net')}
					</MenuItem>
					<MenuItem
						onClick={() => {
							onExportExampleJson();
							onClose();
						}}
						icon={<FileSpreadsheet size={16} />}
					>
						{__('Download Example JSON', 'minimal-map-net')}
					</MenuItem>
				</MenuGroup>
			)}
		/>
	);
}
