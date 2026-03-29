import { Button, Dropdown, MenuGroup, MenuItem, __experimentalHStack as HStack } from "@wordpress/components";
import { CheckIcon, ChevronDownIcon } from "../components/Icons";

export interface OptionDropdownOption {
  label: string;
  value: string;
}

interface OptionDropdownProps {
  className?: string;
  emptyLabel: string;
  groupLabel: string;
  label: string;
  onChange: (value: string) => void;
  options: OptionDropdownOption[];
  selectedValue: string;
}

export default function OptionDropdown({
  className,
  emptyLabel,
  groupLabel,
  label,
  onChange,
  options,
  selectedValue,
}: OptionDropdownProps) {
  const selectedOption =
    options.find((option) => option.value === selectedValue) ?? null;
  const selectedLabel = selectedOption?.label || emptyLabel;

  return (
    <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
      <span>{label}</span>
      <Dropdown
        className={className}
        popoverProps={{
          placement: "left-start",
          offset: 36,
          shift: true,
        }}
        renderToggle={({ isOpen, onToggle }) => (
          <Button
            __next40pxDefaultSize
            className="minimal-map-editor__dropdown-toggle"
            variant="tertiary"
            onClick={onToggle}
            aria-expanded={isOpen}
            style={{
              width: "100%",
              justifyContent: "space-between",
              paddingInline: "12px",
            }}
          >
            <span>{selectedLabel}</span>
            <ChevronDownIcon size={16} style={{ flexShrink: 0 }} />
          </Button>
        )}
        renderContent={({ onClose }) => (
          <MenuGroup label={groupLabel}>
            {options.map((option) => {
              const isSelected = option.value === selectedValue;

              return (
                <MenuItem
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    onClose();
                  }}
                >
                  <HStack justify="space-between" style={{ width: "100%" }}>
                    <span>{option.label}</span>
                    {isSelected && (
                      <CheckIcon
                        size={16}
                        style={{
                          flexShrink: 0,
                          color: "var(--wp-admin-theme-color, #3858e8)",
                        }}
                      />
                    )}
                  </HStack>
                </MenuItem>
              );
            })}
          </MenuGroup>
        )}
      />
    </div>
  );
}
