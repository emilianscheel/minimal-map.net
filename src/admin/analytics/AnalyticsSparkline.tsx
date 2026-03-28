import { useMemo, useState } from '@wordpress/element';
import type {
	AnalyticsBreakdownDatum,
	AnalyticsTrendPoint,
} from '../../types';

const CHART_WIDTH = 260;
const LINE_CHART_HEIGHT = 84;
const BAR_CHART_HEIGHT = 112;
const CHART_PADDING_X = 2;
const CHART_PADDING_Y = 8;
const DONUT_VISUAL_SIZE = 92;
const DONUT_CENTER_X = 46;
const DONUT_CENTER_Y = 46;
const DONUT_INNER_RADIUS = 17;
const DONUT_OUTER_RADIUS = 28;
const DONUT_COLORS = ['#1e1e1e', '#5c6168', '#8d949b', '#b9bfc5', '#d5d7da'];
const BAR_LABEL_WIDTH = 88;
const BAR_HEIGHT = 10;
const BAR_START_X = BAR_LABEL_WIDTH + 12;
const BAR_END_PADDING = 18;

type LineChartProps = {
	ariaLabel: string;
	formatTooltipValue: (value: number | null) => string;
	isEmpty?: boolean;
	series: AnalyticsTrendPoint[];
	variant: 'line';
};

type BarChartProps = {
	ariaLabel: string;
	data: AnalyticsBreakdownDatum[];
	isEmpty?: boolean;
	variant: 'bar';
};

type DonutChartProps = {
	ariaLabel: string;
	data: AnalyticsBreakdownDatum[];
	isEmpty?: boolean;
	variant: 'donut';
};

type AnalyticsSparklineProps =
	| LineChartProps
	| BarChartProps
	| DonutChartProps;

function createLinearScale(
	domain: [number, number],
	range: [number, number]
): (value: number) => number {
	const [domainMin, domainMax] = domain;
	const [rangeMin, rangeMax] = range;

	if (domainMax === domainMin) {
		return () => (rangeMin + rangeMax) / 2;
	}

	const ratio = (rangeMax - rangeMin) / (domainMax - domainMin);

	return (value: number) => rangeMin + (value - domainMin) * ratio;
}

function createYDomain(values: number[]): [number, number] {
	if (values.length === 0) {
		return [0, 1];
	}

	const min = Math.min(...values);
	const max = Math.max(...values);

	if (min === max) {
		if (max === 0) {
			return [0, 1];
		}

		return [min * 0.92, max * 1.08];
	}

	const padding = (max - min) * 0.12;

	return [Math.max(0, min - padding), max + padding];
}

function buildSmoothLinePath(
	series: AnalyticsTrendPoint[],
	getX: (index: number) => number,
	getY: (value: number) => number
): string {
	const points = series
		.map((point, index) => (
			point.value === null
				? null
				: {
					x: getX(index),
					y: getY(point.value),
				}
		))
		.filter((point): point is { x: number; y: number } => point !== null);

	if (points.length === 0) {
		return '';
	}

	if (points.length === 1) {
		return `M ${points[0].x} ${points[0].y}`;
	}

	let path = `M ${points[0].x} ${points[0].y}`;

	for (let index = 0; index < points.length - 1; index += 1) {
		const current = points[index];
		const next = points[index + 1];
		const controlX = (current.x + next.x) / 2;

		path += ` C ${controlX} ${current.y}, ${controlX} ${next.y}, ${next.x} ${next.y}`;
	}

	return path;
}

function polarToCartesian(
	centerX: number,
	centerY: number,
	radius: number,
	angleInDegrees: number
): { x: number; y: number } {
	const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;

	return {
		x: centerX + radius * Math.cos(angleInRadians),
		y: centerY + radius * Math.sin(angleInRadians),
	};
}

function buildDonutSegmentPath(
	startAngle: number,
	endAngle: number
): string {
	const safeEndAngle = endAngle - startAngle >= 360 ? startAngle + 359.999 : endAngle;
	const outerStart = polarToCartesian(DONUT_CENTER_X, DONUT_CENTER_Y, DONUT_OUTER_RADIUS, safeEndAngle);
	const outerEnd = polarToCartesian(DONUT_CENTER_X, DONUT_CENTER_Y, DONUT_OUTER_RADIUS, startAngle);
	const innerStart = polarToCartesian(DONUT_CENTER_X, DONUT_CENTER_Y, DONUT_INNER_RADIUS, startAngle);
	const innerEnd = polarToCartesian(DONUT_CENTER_X, DONUT_CENTER_Y, DONUT_INNER_RADIUS, safeEndAngle);
	const largeArcFlag = safeEndAngle - startAngle > 180 ? 1 : 0;

	return [
		`M ${outerStart.x} ${outerStart.y}`,
		`A ${DONUT_OUTER_RADIUS} ${DONUT_OUTER_RADIUS} 0 ${largeArcFlag} 0 ${outerEnd.x} ${outerEnd.y}`,
		`L ${innerStart.x} ${innerStart.y}`,
		`A ${DONUT_INNER_RADIUS} ${DONUT_INNER_RADIUS} 0 ${largeArcFlag} 1 ${innerEnd.x} ${innerEnd.y}`,
		'Z',
	].join(' ');
}

function normalizeLabel(label: unknown): string {
	if (typeof label === 'string') {
		return label;
	}

	if (label === null || label === undefined) {
		return '';
	}

	return String(label);
}

function truncateLabel(label: unknown, maxLength = 18): string {
	const normalizedLabel = normalizeLabel(label);

	if (normalizedLabel.length <= maxLength) {
		return normalizedLabel;
	}

	return `${normalizedLabel.slice(0, Math.max(0, maxLength - 1))}…`;
}

function formatWholeNumber(value: number): string {
	return `${Math.round(value)}`;
}

function formatPercentage(value: number | null): string {
	if (value === null) {
		return '—';
	}

	return `${Math.round(value)}%`;
}

function hasBreakdownData(data: AnalyticsBreakdownDatum[]): boolean {
	return data.some((item) => item.value > 0);
}

function AnalyticsLineChart({
	ariaLabel,
	formatTooltipValue,
	isEmpty = false,
	series,
}: Omit<LineChartProps, 'variant'>) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const definedValues = useMemo(
		() => series.map((point) => point.value).filter((value): value is number => value !== null),
		[series]
	);
	const hasRenderableData = !isEmpty && definedValues.length > 0;
	const xScale = useMemo(
		() => createLinearScale(
			[0, Math.max(0, series.length - 1)],
			[CHART_PADDING_X, CHART_WIDTH - CHART_PADDING_X]
		),
		[series.length]
	);
	const yScale = useMemo(
		() => createLinearScale(
			createYDomain(definedValues),
			[LINE_CHART_HEIGHT - CHART_PADDING_Y, CHART_PADDING_Y]
		),
		[definedValues]
	);
	const pathData = useMemo(
		() => hasRenderableData ? buildSmoothLinePath(series, xScale, yScale) : '',
		[hasRenderableData, series, xScale, yScale]
	);
	const activePoint = activeIndex !== null ? series[activeIndex] ?? null : null;
	const activePointX = activeIndex !== null ? xScale(activeIndex) : null;
	const activePointY = activePoint && activePoint.value !== null && activeIndex !== null
		? yScale(activePoint.value)
		: null;

	return (
		<div className="minimal-map-admin__analytics-sparkline" aria-label={ariaLabel}>
			<svg
				className="minimal-map-admin__analytics-sparkline-svg"
				viewBox={`0 0 ${CHART_WIDTH} ${LINE_CHART_HEIGHT}`}
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				{pathData ? (
					<path
						d={pathData}
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						fill="none"
					/>
				) : null}
				{activePointX !== null ? (
					<line
						x1={activePointX}
						x2={activePointX}
						y1={CHART_PADDING_Y}
						y2={LINE_CHART_HEIGHT - CHART_PADDING_Y}
						stroke="#000"
						strokeDasharray="3 4"
						strokeOpacity="0.16"
						strokeWidth={1}
					/>
				) : null}
				{activePointX !== null && activePointY !== null ? (
					<circle
						cx={activePointX}
						cy={activePointY}
						r={3.5}
						fill="#000"
					/>
				) : null}
			</svg>
			<div className="minimal-map-admin__analytics-sparkline-hotspots" aria-hidden="true">
				{series.map((point, index) => {
					const left = `${(index / Math.max(1, series.length)) * 100}%`;
					const width = `${100 / Math.max(1, series.length)}%`;

					return (
						<button
							key={`${point.date}-${index}`}
							type="button"
							className="minimal-map-admin__analytics-sparkline-hotspot"
							style={{ left, width }}
							onMouseEnter={() => setActiveIndex(index)}
							onFocus={() => setActiveIndex(index)}
							onBlur={() => setActiveIndex((currentIndex) => currentIndex === index ? null : currentIndex)}
							onMouseLeave={() => setActiveIndex((currentIndex) => currentIndex === index ? null : currentIndex)}
							tabIndex={0}
							aria-label={`${point.date}: ${formatTooltipValue(point.value)}`}
						/>
					);
				})}
			</div>
			{activePoint && activePointX !== null ? (
				<div
					className="minimal-map-admin__analytics-sparkline-tooltip"
					style={{ left: `${(activePointX / CHART_WIDTH) * 100}%` }}
				>
					<span className="minimal-map-admin__analytics-sparkline-tooltip-date">
						{activePoint.date}
					</span>
					<span className="minimal-map-admin__analytics-sparkline-tooltip-value">
						{formatTooltipValue(activePoint.value)}
					</span>
				</div>
			) : null}
		</div>
	);
}

function AnalyticsBarChart({
	ariaLabel,
	data,
	isEmpty = false,
}: Omit<BarChartProps, 'variant'>) {
	const hasRenderableData = !isEmpty && hasBreakdownData(data);
	const maxValue = Math.max(...data.map((item) => item.value), 0);
	const chartWidth = CHART_WIDTH - BAR_START_X - BAR_END_PADDING;
	const rowHeight = (BAR_CHART_HEIGHT - CHART_PADDING_Y * 2) / Math.max(1, data.length);

	return (
		<div className="minimal-map-admin__analytics-breakdown-chart" aria-label={ariaLabel}>
			{hasRenderableData ? (
				<svg
					className="minimal-map-admin__analytics-bar-chart-svg"
					viewBox={`0 0 ${CHART_WIDTH} ${BAR_CHART_HEIGHT}`}
					preserveAspectRatio="xMinYMid meet"
					aria-hidden="true"
				>
					{data.map((item, index) => {
						const top = CHART_PADDING_Y + rowHeight * index;
						const barY = top + (rowHeight - BAR_HEIGHT) / 2;
						const width = maxValue > 0 ? (item.value / maxValue) * chartWidth : 0;

						return (
							<g key={item.key} className="minimal-map-admin__analytics-bar-chart-row">
								<text
									x="0"
									y={top + rowHeight / 2 + 4}
									className="minimal-map-admin__analytics-bar-chart-label"
								>
									{truncateLabel(item.label)}
								</text>
								<rect
									x={BAR_START_X}
									y={barY}
									width={chartWidth}
									height={BAR_HEIGHT}
									rx={BAR_HEIGHT / 2}
									fill="rgba(0, 0, 0, 0.08)"
								/>
								<rect
									x={BAR_START_X}
									y={barY}
									width={item.value > 0 ? Math.max(4, width) : 0}
									height={BAR_HEIGHT}
									rx={BAR_HEIGHT / 2}
									fill="#1e1e1e"
								/>
								<text
									x={CHART_WIDTH - 1}
									y={top + rowHeight / 2 + 4}
									textAnchor="end"
									className="minimal-map-admin__analytics-bar-chart-value"
								>
									{formatWholeNumber(item.value)}
								</text>
							</g>
						);
					})}
				</svg>
			) : (
				<div className="minimal-map-admin__analytics-breakdown-chart-spacer" />
			)}
		</div>
	);
}

function AnalyticsDonutChart({
	ariaLabel,
	data,
	isEmpty = false,
}: Omit<DonutChartProps, 'variant'>) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const hasRenderableData = !isEmpty && hasBreakdownData(data);
	const totalValue = data.reduce((sum, item) => sum + item.value, 0);
	const dominantIndex = data.reduce((bestIndex, item, index) => (
		bestIndex === -1 || item.value > data[bestIndex].value ? index : bestIndex
	), -1);
	const centerIndex = activeIndex ?? dominantIndex;
	const centerPercentage = centerIndex >= 0 && totalValue > 0
		? Math.round((data[centerIndex].value / totalValue) * 100)
		: 0;
	let startAngle = 0;

	return (
		<div className="minimal-map-admin__analytics-donut-chart" aria-label={ariaLabel}>
			<div className="minimal-map-admin__analytics-donut-chart-visual">
				{hasRenderableData ? (
					<>
						<svg
							className="minimal-map-admin__analytics-donut-chart-svg"
							viewBox={`0 0 ${DONUT_VISUAL_SIZE} ${DONUT_VISUAL_SIZE}`}
							preserveAspectRatio="xMidYMid meet"
							aria-hidden="true"
						>
							{data.map((item, index) => {
								const sweepAngle = totalValue > 0 ? (item.value / totalValue) * 360 : 0;
								const endAngle = startAngle + sweepAngle;
								const path = buildDonutSegmentPath(startAngle, endAngle);
								const isActive = activeIndex === null ? index === centerIndex : index === activeIndex;

								startAngle = endAngle;

								return (
									<path
										key={item.key}
										d={path}
										fill={DONUT_COLORS[index % DONUT_COLORS.length]}
										opacity={isActive ? 1 : 0.72}
									/>
								);
							})}
						</svg>
						<div className="minimal-map-admin__analytics-donut-chart-center">
							<span className="minimal-map-admin__analytics-donut-chart-total">
								{totalValue > 0 ? `${centerPercentage}%` : '—'}
							</span>
						</div>
					</>
				) : (
					<div className="minimal-map-admin__analytics-breakdown-chart-spacer" />
				)}
			</div>

			<div className="minimal-map-admin__analytics-donut-legend">
				{data.map((item, index) => (
					<button
						key={item.key}
						type="button"
						className="minimal-map-admin__analytics-donut-legend-item"
						onMouseEnter={() => setActiveIndex(index)}
						onMouseLeave={() => setActiveIndex(null)}
						onFocus={() => setActiveIndex(index)}
						onBlur={() => setActiveIndex((currentIndex) => currentIndex === index ? null : currentIndex)}
						aria-label={`${normalizeLabel(item.label)}: ${formatWholeNumber(item.value)}`}
					>
						<span
							className="minimal-map-admin__analytics-donut-legend-swatch"
							style={{ backgroundColor: DONUT_COLORS[index % DONUT_COLORS.length] }}
						/>
						<span className="minimal-map-admin__analytics-donut-legend-label">
							{normalizeLabel(item.label)}
						</span>
						<span className="minimal-map-admin__analytics-donut-legend-value">
							{formatWholeNumber(item.value)}
						</span>
					</button>
				))}
			</div>
		</div>
	);
}

export default function AnalyticsSparkline(props: AnalyticsSparklineProps) {
	if (props.variant === 'line') {
		return <AnalyticsLineChart {...props} />;
	}

	if (props.variant === 'bar') {
		return <AnalyticsBarChart {...props} />;
	}

	return <AnalyticsDonutChart {...props} />;
}

export { formatPercentage };
