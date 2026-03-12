import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const buildDir = path.resolve(process.cwd(), 'build');
const kibibyte = 1024;

const requiredBudgets = [
	{ file: 'admin.js', limitKiB: 400 },
	{ file: 'index.js', limitKiB: 350 },
	{ file: 'frontend.js', limitKiB: 150 },
	{ file: 'map-runtime.js', limitKiB: 900 },
];

const optionalBudgets = [
	{ pattern: /^admin-section-[\w-]+\.js$/, limitKiB: 700 },
	{ pattern: /^map-runtime-vendor\.js$/, limitKiB: 1100 },
	{ pattern: /^shared-vendor\.js$/, limitKiB: 500 },
	{ pattern: /^admin-dataviews\.js$/, limitKiB: 1700 },
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

for (const budget of requiredBudgets) {
	const filePath = path.join(buildDir, budget.file);

	if (!existsSync(filePath)) {
		failures.push(`Missing required bundle: ${budget.file}`);
		continue;
	}

	const sizeKiB = getSizeKiB(filePath);

	if (sizeKiB > budget.limitKiB) {
		failures.push(
			`${budget.file} is ${formatSize(sizeKiB)} and exceeds the ${budget.limitKiB} KiB budget.`
		);
	}
}

const buildFiles = readdirSync(buildDir);

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
