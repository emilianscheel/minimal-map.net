import { Button, Card, CardBody } from '@wordpress/components';
import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	Download,
	FileUp,
	FolderTree,
	LayoutDashboard,
	MapPin,
	MapPinned,
	Palette,
	Settings,
	Tags,
} from 'lucide-react';
import './style.scss';

const adminConfig = window.MinimalMapAdminConfig || {
	currentView: 'dashboard',
	sections: [],
	stats: {},
};

const ICONS = {
	dashboard: LayoutDashboard,
	locations: MapPinned,
	categories: FolderTree,
	tags: Tags,
	markers: MapPin,
	styles: Palette,
	import: FileUp,
	export: Download,
	settings: Settings,
};

const CARD_VIEWS = [ 'locations', 'categories', 'markers', 'tags' ];

const CARD_COPY = {
	locations: __('Manage every place you want to render on your maps and prepare it for future block integrations.', 'minimal-map'),
	categories: __('Organize locations into reusable groupings so future filters and styles stay easy to maintain.', 'minimal-map'),
	markers: __('Create marker variants and keep your map pin system consistent across locations and styles.', 'minimal-map'),
	tags: __('Add lightweight labels that make large map datasets easier to sort, search, and evolve.', 'minimal-map'),
};

const CTA_COPY = {
	locations: __('Open locations', 'minimal-map'),
	categories: __('Open categories', 'minimal-map'),
	markers: __('Open markers', 'minimal-map'),
	tags: __('Open tags', 'minimal-map'),
};

const COUNT_KEYS = {
	locations: 'locations',
	categories: 'categories',
	markers: 'markers',
	tags: 'tags',
};

function getSectionMap() {
	return Object.fromEntries((adminConfig.sections || []).map((section) => [ section.view, section ]));
}

function SectionIcon({ view }) {
	const IconComponent = ICONS[view] || ICONS.dashboard;

	return <IconComponent aria-hidden="true" size={24} strokeWidth={1.75} />;
}

function AdminSidebar({ currentView }) {
	return (
		<aside className="minimal-map-admin__sidebar">
			<nav className="minimal-map-admin__nav" aria-label={__('Minimal Map Sections', 'minimal-map')}>
				{(adminConfig.sections || []).map((section) => {
					const isActive = section.view === currentView;

					return (
						<Button
							key={section.view}
							href={section.url}
							variant="tertiary"
							__next40pxDefaultSize
							className={[
								'minimal-map-admin__nav-item',
								isActive ? 'is-active' : '',
							].filter(Boolean).join(' ')}
						>
							<span className="minimal-map-admin__nav-icon"><SectionIcon view={section.view} /></span>
							<span>{section.title}</span>
						</Button>
					);
				})}
			</nav>
		</aside>
	);
}

function ContentHeader({ title, description }) {
	return (
		<header className="minimal-map-admin__header">
			<h2 className="minimal-map-admin__header-title">{title}</h2>
			<p className="minimal-map-admin__header-description">{description}</p>
		</header>
	);
}

function DashboardCard({ section, stats }) {
	const countKey = COUNT_KEYS[section.view];
	const count = typeof stats[countKey] === 'number' ? stats[countKey] : 0;

	return (
		<Card className="minimal-map-admin__feature-card">
			<CardBody>
				<div className="minimal-map-admin__feature-meta">
					<span className="minimal-map-admin__feature-icon"><SectionIcon view={section.view} /></span>
					<span className="minimal-map-admin__feature-count">{count}</span>
				</div>
				<h3 className="minimal-map-admin__feature-title">{section.title}</h3>
				<p className="minimal-map-admin__feature-description">{CARD_COPY[section.view]}</p>
				<Button href={section.url} variant="link" className="minimal-map-admin__feature-link">
					{CTA_COPY[section.view]}
				</Button>
			</CardBody>
		</Card>
	);
}

function Dashboard({ sectionMap }) {
	const stats = adminConfig.stats || {};

	return (
		<div className="minimal-map-admin__dashboard-grid">
			{CARD_VIEWS.map((view) => (
				<DashboardCard key={view} section={sectionMap[view]} stats={stats} />
			))}
		</div>
	);
}

function PlaceholderView({ title }) {
	return <div className="minimal-map-admin__placeholder-view" aria-label={title} />;
}

function App({ currentView }) {
	const sectionMap = getSectionMap();
	const activeSection = sectionMap[currentView] || sectionMap.dashboard;

	return (
		<div className="minimal-map-admin__app">
			<AdminSidebar currentView={activeSection.view} />
			<div className="minimal-map-admin__panel">
				<ContentHeader title={activeSection.title} description={activeSection.description} />
				<div className="minimal-map-admin__content">
					{activeSection.view === 'dashboard' ? (
						<Dashboard sectionMap={sectionMap} />
					) : (
						<PlaceholderView title={activeSection.title} />
					)}
				</div>
			</div>
		</div>
	);
}

function mount() {
	document.querySelectorAll('[data-minimal-map-admin-root]').forEach((node) => {
		const currentView = node.getAttribute('data-current-view') || adminConfig.currentView || 'dashboard';
		createRoot(node).render(<App currentView={currentView} />);
	});
}

domReady(mount);
