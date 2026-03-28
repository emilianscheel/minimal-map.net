import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const buildDir = path.resolve(process.cwd(), 'build');
const kibibyte = 1024;

const requiredBudgets = [
	{ label: 'admin.js', pattern: /^admin\.js$/, limitKiB: 400 },
	{ label: 'index.js', pattern: /^index\.js$/, limitKiB: 350 },
	{ label: 'frontend.js', pattern: /^frontend\.js$/, limitKiB: 150 },
	{ label: 'map-runtime', pattern: /^map-runtime(?:\.[a-f0-9]{8})?\.js$/, limitKiB: 900 },
];

const optionalBudgets = [
	{ pattern: /^admin-section-[\w-]+(?:\.[a-f0-9]{8})?\.js$/, limitKiB: 700 },
	{ pattern: /^map-runtime-vendor(?:\.[a-f0-9]{8})?\.js$/, limitKiB: 1100 },
	{ pattern: /^shared-vendor(?:\.[a-f0-9]{8})?\.js$/, limitKiB: 500 },
	{ pattern: /^admin-dataviews(?:\.[a-f0-9]{8})?\.js$/, limitKiB: 1700 },
];

function getSizeKiB(filePath) {
	return statSync(filePath).size / kibibyte;
}

function formatSize(sizeKiB) {
	return `${sizeKiB.toFixed(1)} KiB`;
}

if (!existsSync(buildDir)) {
	console.error('The build directory does not exist. Run the build before checking bundle budgets.');
	process.exit(1);
}

const failures = [];
const buildFiles = readdirSync(buildDir);

for (const budget of requiredBudgets) {
	const matchingFiles = buildFiles.filter( ( entry ) => budget.pattern.test( entry ) );

	if ( matchingFiles.length === 0 ) {
		failures.push( `Missing required bundle: ${budget.label}` );
		continue;
	}

	for (const file of matchingFiles) {
		const sizeKiB = getSizeKiB(path.join(buildDir, file));

		if (sizeKiB > budget.limitKiB) {
			failures.push(
				`${file} is ${formatSize(sizeKiB)} and exceeds the ${budget.limitKiB} KiB budget.`
			);
		}
	}
}

for (const budget of optionalBudgets) {
	for (const file of buildFiles.filter((entry) => budget.pattern.test(entry))) {
		const sizeKiB = getSizeKiB(path.join(buildDir, file));

		if (sizeKiB > budget.limitKiB) {
			failures.push(
				`${file} is ${formatSize(sizeKiB)} and exceeds the ${budget.limitKiB} KiB budget.`
			);
		}
	}
}

if (failures.length > 0) {
	console.error('Bundle budget check failed:');
	for (const failure of failures) {
		console.error(`- ${failure}`);
	}
	process.exit(1);
}

console.log('Bundle budgets passed.');
