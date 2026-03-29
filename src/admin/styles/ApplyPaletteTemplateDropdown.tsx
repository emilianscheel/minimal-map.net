import { Button, ColorIndicator, Dropdown, MenuGroup, MenuItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ChevronDown, Palette } from 'lucide-react';
import type { StylePaletteTemplate } from '../../types';

interface ApplyPaletteTemplateDropdownProps {
	disabled?: boolean;
	isBusy?: boolean;
	onSelect: (templateId: string) => void;
	templates: StylePaletteTemplate[];
}

export function ApplyPaletteTemplateDropdown({
	disabled = false,
	isBusy = false,
	onSelect,
	templates,
}: ApplyPaletteTemplateDropdownProps) {
	return (
		<Dropdown
			popoverProps={{ placement: 'bottom-end' }}
			renderToggle={({ isOpen, onToggle }) => (
				<Button
					onClick={onToggle}
					aria-expanded={isOpen}
					variant="tertiary"
					icon={<Palette size={18} />}
					label={__('Apply palette template', 'minimal-map')}
					disabled={disabled}
					isBusy={isBusy}
					__next40pxDefaultSize
				>
					{__('Templates', 'minimal-map')}
					<ChevronDown size={16} />
				</Button>
			)}
				renderContent={({ onClose }) => (
				<MenuGroup label={__('Palette Templates', 'minimal-map')}>
					{templates.map((template) => (
						<MenuItem
							key={template.id}
							className="minimal-map-styles__palette-template-menu-item"
							suffix={
								<span
									className="minimal-map-styles__palette-template-swatches"
									aria-hidden="true"
								>
									{template.colors.slice(0, 5).map((color, index, palette) => (
										<span
											key={`${template.id}-${color.slug}-${index}`}
											className="minimal-map-styles__palette-template-swatch"
											style={{ zIndex: palette.length - index }}
										>
											<ColorIndicator colorValue={color.color} />
										</span>
									))}
								</span>
							}
							onClick={() => {
								onSelect(template.id);
								onClose();
							}}
						>
							{template.label}
						</MenuItem>
					))}
				</MenuGroup>
			)}
		/>
	);
}
