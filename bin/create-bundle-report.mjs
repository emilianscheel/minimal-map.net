import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const reportsDir = path.resolve(process.cwd(), 'reports');
const statsPath = path.join(reportsDir, 'bundle-stats.json');
const reportPath = path.join(reportsDir, 'bundle-report.html');

function escapeHtml(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

function formatSize(bytes) {
	return `${(bytes / 1024).toFixed(1)} KiB`;
}

const stats = JSON.parse(readFileSync(statsPath, 'utf8'));
const assets = (stats.assets ?? [])
	.filter((asset) => !asset.name.endsWith('.php'))
	.sort((left, right) => right.size - left.size);
const entrypoints = Object.entries(stats.entrypoints ?? {}).map(([name, data]) => ({
	name,
	assets: (data.assets ?? []).map((asset) => asset.name),
}));

const assetRows = assets.map((asset) => `
	<tr>
		<td>${escapeHtml(asset.name)}</td>
		<td>${formatSize(asset.size)}</td>
		<td>${escapeHtml((asset.chunkNames ?? []).join(', ') || 'n/a')}</td>
	</tr>
`).join('');

const entrypointRows = entrypoints.map((entrypoint) => `
	<tr>
		<td>${escapeHtml(entrypoint.name)}</td>
		<td>${escapeHtml(entrypoint.assets.join(', '))}</td>
	</tr>
`).join('');

const html = `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Minimal Map Bundle Report</title>
	<style>
		body { font-family: ui-sans-serif, system-ui, sans-serif; margin: 32px; color: #111827; }
		h1, h2 { margin-bottom: 12px; }
		table { width: 100%; border-collapse: collapse; margin-bottom: 32px; }
		th, td { border: 1px solid #d1d5db; padding: 10px 12px; text-align: left; vertical-align: top; }
		th { background: #f3f4f6; }
		code { font-family: ui-monospace, SFMono-Regular, monospace; }
	</style>
</head>
<body>
	<h1>Minimal Map Bundle Report</h1>
	<p>Generated from <code>reports/bundle-stats.json</code>.</p>
	<h2>Assets</h2>
	<table>
		<thead>
			<tr>
				<th>Asset</th>
				<th>Size</th>
				<th>Chunk Names</th>
			</tr>
		</thead>
		<tbody>${assetRows}</tbody>
	</table>
	<h2>Entrypoints</h2>
	<table>
		<thead>
			<tr>
				<th>Entrypoint</th>
				<th>Assets</th>
			</tr>
		</thead>
		<tbody>${entrypointRows}</tbody>
	</table>
</body>
</html>`;

mkdirSync(reportsDir, { recursive: true });
writeFileSync(reportPath, html);
console.log(`Bundle report written to ${reportPath}`);
