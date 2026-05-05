#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
PACKAGE_DIR_NAME="minimal-map-net-locator-block"
PACKAGE_DIR_PATH="${ROOT_DIR}/${PACKAGE_DIR_NAME}"
ARCHIVE_PATH="${ROOT_DIR}/minimal-map-net-locator-block.zip"

cleanup() {
	rm -rf "${PACKAGE_DIR_PATH}"
}

trap cleanup EXIT

cd "${ROOT_DIR}"

command -v zip >/dev/null 2>&1 || {
	echo "Missing required command: zip" >&2
	exit 1
}

for path in assets includes languages templates minimal-map-net-locator-block.php readme.txt README.md block.json LICENSE; do
	[ -e "${path}" ] || {
		echo "Missing required path: ${path}" >&2
		exit 1
	}
done

bun run build

[ -d build ] || {
	echo "Build output directory not found: build" >&2
	exit 1
}

rm -f "${ARCHIVE_PATH}"
rm -rf "${PACKAGE_DIR_PATH}"
mkdir -p "${PACKAGE_DIR_PATH}"

	cp -R \
	assets \
	includes \
	languages \
	templates \
	build \
	minimal-map-net-locator-block.php \
	readme.txt \
	README.md \
	block.json \
	LICENSE \
	"${PACKAGE_DIR_PATH}/"

zip -rq "${ARCHIVE_PATH}" "${PACKAGE_DIR_NAME}" -x "*.map" "*~"

echo "Created ${ARCHIVE_PATH}"
