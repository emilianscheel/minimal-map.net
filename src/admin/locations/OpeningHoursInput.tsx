import { TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { FieldErrors, LocationFormState, OpeningHoursDayKey } from '../../types';
import { OPENING_HOURS_DAY_ORDER } from '../../lib/locations/openingHours';

interface OpeningHoursInputProps {
	fieldErrors: FieldErrors;
	form: Pick<LocationFormState, 'opening_hours' | 'opening_hours_notes'>;
	onChangeDayValue: (
		dayKey: OpeningHoursDayKey,
		field: 'open' | 'close' | 'lunch_start' | 'lunch_duration_minutes',
		value: string
	) => void;
	onChangeNotes: (value: string) => void;
}

const DAY_LABELS: Record<OpeningHoursDayKey, string> = {
	monday: __('Monday', 'minimal-map-net'),
	tuesday: __('Tuesday', 'minimal-map-net'),
	wednesday: __('Wednesday', 'minimal-map-net'),
	thursday: __('Thursday', 'minimal-map-net'),
	friday: __('Friday', 'minimal-map-net'),
	saturday: __('Saturday', 'minimal-map-net'),
	sunday: __('Sunday', 'minimal-map-net'),
};

function OptionalLabel({ label }: { label: string }) {
	return (
		<span className="minimal-map-admin__field-label-with-hint">
			<span>{label}</span>
			<span className="minimal-map-admin__field-optional-hint">
				{__('Optional', 'minimal-map-net')}
			</span>
		</span>
	);
}

export default function OpeningHoursInput({
	fieldErrors,
	form,
	onChangeDayValue,
	onChangeNotes,
}: OpeningHoursInputProps) {
	return (
		<div className="minimal-map-admin__location-dialog-fields minimal-map-admin__opening-hours-step">
			<div className="minimal-map-admin__opening-hours-table" role="table" aria-label={__('Opening hours', 'minimal-map-net')}>
				<div className="minimal-map-admin__opening-hours-table-header" role="row">
					<span role="columnheader">{__('Day', 'minimal-map-net')}</span>
					<span role="columnheader">{__('Open', 'minimal-map-net')}</span>
					<span role="columnheader">{__('Close', 'minimal-map-net')}</span>
					<span role="columnheader">
						<OptionalLabel label={__('Lunch break start', 'minimal-map-net')} />
					</span>
					<span role="columnheader">
						<OptionalLabel label={__('Lunch break duration (minutes)', 'minimal-map-net')} />
					</span>
				</div>
				{OPENING_HOURS_DAY_ORDER.map((dayKey, index) => {
					const day = form.opening_hours[dayKey];
					const error = fieldErrors.opening_hours?.[dayKey];

					return (
						<div key={dayKey} className="minimal-map-admin__opening-hours-row-wrapper">
							<div className="minimal-map-admin__opening-hours-row" role="row">
								<div className="minimal-map-admin__opening-hours-day-label" role="cell">
									{DAY_LABELS[dayKey]}
								</div>
								<div role="cell">
									<TextControl
										autoFocus={index === 0}
										label={index === 0 ? __('Open', 'minimal-map-net') : undefined}
										hideLabelFromVision
										type="time"
										value={day.open}
										onChange={(value) => onChangeDayValue(dayKey, 'open', value)}
										__next40pxDefaultSize
									/>
								</div>
								<div role="cell">
									<TextControl
										label={index === 0 ? __('Close', 'minimal-map-net') : undefined}
										hideLabelFromVision
										type="time"
										value={day.close}
										onChange={(value) => onChangeDayValue(dayKey, 'close', value)}
										__next40pxDefaultSize
									/>
								</div>
								<div role="cell">
									<TextControl
										label={index === 0 ? __('Lunch break start', 'minimal-map-net') : undefined}
										hideLabelFromVision
										type="time"
										value={day.lunch_start}
										onChange={(value) => onChangeDayValue(dayKey, 'lunch_start', value)}
										__next40pxDefaultSize
									/>
								</div>
								<div role="cell">
									<TextControl
										label={index === 0 ? __('Lunch break duration (minutes)', 'minimal-map-net') : undefined}
										hideLabelFromVision
										type="number"
										min={0}
										step={1}
										value={day.lunch_duration_minutes > 0 ? `${day.lunch_duration_minutes}` : ''}
										onChange={(value) =>
											onChangeDayValue(dayKey, 'lunch_duration_minutes', value)
										}
										__next40pxDefaultSize
									/>
								</div>
							</div>
							{error ? (
								<p className="minimal-map-admin__opening-hours-row-error">{error}</p>
							) : null}
						</div>
					);
				})}
			</div>
			<TextareaControl
				label={<OptionalLabel label={__('Opening hours notes', 'minimal-map-net')} />}
				value={form.opening_hours_notes}
				onChange={onChangeNotes}
				help={__(
					'Add details such as seasonal opening hours or temporary exceptions.',
					'minimal-map-net'
				)}
				rows={4}
			/>
		</div>
	);
}
