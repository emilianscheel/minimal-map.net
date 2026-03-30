export interface MarkerLibraryEntry {
	id: string;
	name: string;
	filename: string;
	content: string;
	keywords: string[];
}

export const markerLibrary: MarkerLibraryEntry[] = [
	{
		id: 'pin',
		name: 'Pin',
		filename: 'pin.svg',
		keywords: ['location', 'place', 'marker', 'drop', 'teardrop', 'point', 'map'],
		content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path fill="#000000" d="M16 2C10.477 2 6 6.477 6 12c0 7.418 9.004 17.304 9.38 17.72a.833.833 0 0 0 1.24 0C16.996 29.304 26 19.418 26 12c0-5.523-4.477-10-10-10zm0 13.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
</svg>`,
	},
	{
		id: 'star',
		name: 'Star',
		filename: 'star.svg',
		keywords: ['favorite', 'bookmark', 'highlight', 'featured', 'rating', 'poi'],
		content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path fill="#000000" d="M16 2.5l3.708 7.514 8.292 1.205-6 5.847 1.416 8.252L16 21.27l-7.416 3.898L10 16.916l-6-5.847 8.292-1.205z"/>
</svg>`,
	},
	{
		id: 'circle',
		name: 'Circle',
		filename: 'circle.svg',
		keywords: ['dot', 'point', 'round', 'simple', 'basic', 'spot'],
		content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <circle cx="16" cy="16" r="10" fill="#000000"/>
  <circle cx="16" cy="16" r="10" fill="none" stroke="#000000" stroke-width="2"/>
</svg>`,
	},
	{
		id: 'home',
		name: 'Home',
		filename: 'home.svg',
		keywords: ['house', 'building', 'residence', 'property', 'address', 'dwelling'],
		content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path fill="#000000" d="M16 3L3 14h4v15h7v-8h4v8h7V14h4L16 3z"/>
</svg>`,
	},
	{
		id: 'camera',
		name: 'Camera',
		filename: 'camera.svg',
		keywords: ['photo', 'picture', 'photography', 'shoot', 'image', 'viewpoint', 'scenic'],
		content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path fill="#000000" d="M12 5l-2 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-5l-2-3h-8zm4 5a6 6 0 1 1 0 12A6 6 0 0 1 16 10zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
</svg>`,
	},
];
