import {
	Button,
	Dropdown,
	MenuGroup,
	MenuItem,
	__experimentalHStack as HStack,
} from '@wordpress/components';
import { Check, ChevronDown } from 'lucide-react';

export interface OptionDropdownOption {
	value: string;
	label: string;
}

interface OptionDropdownProps {
	activeValue: string | null;
	emptyLabel: string;
	groupLabel: string;
	labelClassName?: string;
	onSelect: (value: string) => void;
	options: OptionDropdownOption[];
	toggleClassName?: string;
}

export default function OptionDropdown({
	activeValue,
	emptyLabel,
	groupLabel,
	labelClassName = 'minimal-map-admin__option-dropdown-label',
	onSelect,
	options,
	toggleClassName = 'minimal-map-admin__option-dropdown-toggle',
}: OptionDropdownProps) {
	const activeOption = options.find((option) => option.value === activeValue) ?? null;

	return (
		<Dropdown
			popoverProps={{ placement: 'bottom-start' }}
			renderToggle={({ isOpen, onToggle }) => (
				<Button
					onClick={onToggle}
					aria-expanded={isOpen}
					variant="tertiary"
					__next40pxDefaultSize
					className={toggleClassName}
				>
					<span className={labelClassName}>
						{activeOption?.label ?? emptyLabel}
					</span>
					<ChevronDown size={16} style={{ flexShrink: 0 }} />
				</Button>
			)}
			renderContent={() => (
				<MenuGroup label={groupLabel}>
					{options.map((option) => {
						const isSelected = option.value === activeValue;

						return (
							<MenuItem
								key={option.value}
								onClick={() => onSelect(option.value)}
							>
								<HStack justify="space-between" style={{ width: '100%' }}>
									<span>{option.label}</span>
									{isSelected ? (
										<Check
											size={16}
											style={{
												flexShrink: 0,
												color: 'var(--wp-admin-theme-color, #3858e8)',
											}}
										/>
									) : null}
								</HStack>
							</MenuItem>
						);
					})}
				</MenuGroup>
			)}
		/>
	);
}
