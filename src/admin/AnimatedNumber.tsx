import { useMemo } from '@wordpress/element';
import CountUp from 'react-countup';

export interface AnimatedNumberProps {
	className?: string;
	decimals?: number;
	duration?: number;
	fallback?: string;
	locale?: string;
	prefix?: string;
	separator?: string;
	suffix?: string;
	value: number | null;
}

function getLocaleGroupSeparator(locale?: string): string {
	return new Intl.NumberFormat(locale || undefined)
		.formatToParts(1000)
		.find((part) => part.type === 'group')
		?.value ?? ',';
}

export default function AnimatedNumber({
	className,
	decimals = 0,
	duration = 1.2,
	fallback = '—',
	locale,
	prefix = '',
	separator,
	suffix = '',
	value,
}: AnimatedNumberProps) {
	const formatter = useMemo(() => {
		const numberFormatter = new Intl.NumberFormat(locale || undefined, {
			maximumFractionDigits: decimals,
			minimumFractionDigits: decimals,
			useGrouping: true,
		});
		const localeGroupSeparator = getLocaleGroupSeparator(locale);

		return (nextValue: number) => {
			let formattedValue = numberFormatter.format(nextValue);

			if (separator && separator !== localeGroupSeparator) {
				formattedValue = formattedValue.replaceAll(localeGroupSeparator, separator);
			}

			return `${prefix}${formattedValue}${suffix}`;
		};
	}, [decimals, locale, prefix, separator, suffix]);

	if (value === null) {
		return <span className={className}>{fallback}</span>;
	}

	return (
		<CountUp
			className={className}
			decimals={decimals}
			duration={duration}
			end={value}
			formattingFn={formatter}
			preserveValue
			redraw
			useEasing
		/>
	);
}
