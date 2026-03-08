import { SearchControl } from '@wordpress/components';
import { createRoot } from '@wordpress/element';
import { useState, useMemo, useEffect, useRef } from '@wordpress/element';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import type { Map as MapLibreMap } from 'maplibre-gl';
import type { MapLocationPoint, NormalizedMapConfig } from '../types';

interface SearchControlProps {
	locations: MapLocationPoint[];
	onSelect: (location: MapLocationPoint) => void;
	config: NormalizedMapConfig;
}

const formatDisplayUrl = (url: string): string => {
	if (!url) return '';
	return url
		.replace(/^(https?:\/\/)/, '')
		.replace(/^www\./, '')
		.replace(/\/$/, '');
};

const MapSearchControl = ({ locations, onSelect, config }: SearchControlProps) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const filteredLocations = useMemo(() => {
		if (!isFocused) return [];
		
		const term = searchTerm.toLowerCase().trim();
		if (!term) return locations;

		return locations.filter(loc => 
			loc.title?.toLowerCase().includes(term) ||
			loc.city?.toLowerCase().includes(term) ||
			loc.street?.toLowerCase().includes(term)
		);
	}, [locations, searchTerm, isFocused]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsFocused(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			{isFocused && (
				<div 
					className="minimal-map-search-backdrop" 
					onClick={() => setIsFocused(false)}
				/>
			)}
			<div 
				ref={containerRef}
				className={`minimal-map-search ${isFocused ? 'is-focused' : ''}`}
				style={{
					'--minimal-map-search-background': config.zoomControlsBackgroundColor,
					'--minimal-map-search-color': config.zoomControlsIconColor,
					'--minimal-map-search-border-color': config.zoomControlsBorderColor,
					'--minimal-map-search-border-radius': config.zoomControlsBorderRadius,
					'--minimal-map-search-border-width': config.zoomControlsBorderWidth,
				} as React.CSSProperties}
			>
				<div className="minimal-map-search__input-wrapper">
					<SearchControl
						label="Search locations"
						value={searchTerm}
						onChange={setSearchTerm}
						onFocus={() => setIsFocused(true)}
						placeholder="Search locations..."
						__nextHasNoMarginBottom
					/>
				</div>
				
				{isFocused && (
					<div className="minimal-map-search__results-container">
						{filteredLocations.length > 0 ? (
							<div className="minimal-map-search__results">
								{filteredLocations.map(loc => (
									<button 
										key={loc.id} 
										type="button"
										className="minimal-map-search__result-item"
										onClick={() => {
											onSelect(loc);
											setSearchTerm('');
											setIsFocused(false);
										}}
									>
										<div className="minimal-map-search__result-title">{loc.title}</div>
										<div className="minimal-map-search__result-address">
											<MapPin size={12} />
											<span>
												{[loc.street, loc.house_number].filter(Boolean).join(' ')}
												{loc.city ? `, ${loc.city}` : ''}
											</span>
										</div>
										{(loc.telephone || loc.email || loc.website) && (
											<div className="minimal-map-search__result-meta">
												{loc.telephone && (
													<div className="minimal-map-search__meta-item">
														<Phone size={10} />
														<span>{loc.telephone}</span>
													</div>
												)}
												{loc.email && (
													<div className="minimal-map-search__meta-item">
														<Mail size={10} />
														<span>{loc.email}</span>
													</div>
												)}
												{loc.website && (
													<div className="minimal-map-search__meta-item">
														<Globe size={10} />
														<span>{formatDisplayUrl(loc.website)}</span>
													</div>
												)}
											</div>
										)}
									</button>
								))}
							</div>
						) : searchTerm.trim() !== '' && (
							<div className="minimal-map-search__no-results">
								No locations found
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export interface WordPressSearchControl {
	destroy: () => void;
}

export function createWordPressSearchControl(
	host: HTMLElement,
	map: MapLibreMap,
	config: NormalizedMapConfig
): WordPressSearchControl {
	const container = document.createElement('div');
	container.className = 'minimal-map-search-host';
	
	container.style.position = 'absolute';
	container.style.top = '0';
	container.style.left = '0';
	container.style.right = '0';
	container.style.bottom = '0';
	container.style.zIndex = '10';
	container.style.pointerEvents = 'none';
	
	host.appendChild(container);

	const root = createRoot(container);
	
	const onSelect = (location: MapLocationPoint) => {
		map.easeTo({
			center: [location.lng, location.lat],
			zoom: Math.max(map.getZoom(), 15),
			essential: true
		});
	};

	root.render(
		<MapSearchControl 
			locations={config.locations} 
			onSelect={onSelect} 
			config={config} 
		/>
	);

	return {
		destroy() {
			root.unmount();
			container.remove();
		},
	};
}
