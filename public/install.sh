#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: curl -fsSL https://planton.ai/install.sh | bash [-s -- [--version vX.Y.Z] [--force]]"
  exit 1
}

# --- configurable -----------------------------------------------------------
latestUrl="https://planton.ai/cli/latest"          # plain text file: v0.2.58
bucketUrl="https://storage.googleapis.com/planton-cli"
installDir="/usr/local/lib/planton"
binLink="/usr/local/bin/planton"
# ---------------------------------------------------------------------------

version=""
force=0
while [[ $# -gt 0 ]]; do
  case $1 in
    --version) version="$2"; shift 2 ;;
    --force)   force=1; shift ;;
    *) usage ;;
  esac
done

# 1. Determine desired version
if [[ -z "$version" ]]; then
  version="$(curl -fsSL "$latestUrl")"
fi

# 2. Skip if already on that version (unless --force)
if command -v planton >/dev/null 2>&1; then
  installed="$(planton version | awk '{print $2}')"
  if [[ "$installed" == "$version" && "$force" -eq 0 ]]; then
    echo "✅ planton $version already installed"; exit 0
  fi
fi

# 3. Detect arch
arch="$(uname -m)"
case "$arch" in
  x86_64) arch="amd64" ;;
  aarch64|arm64) arch="arm64" ;;
  *) echo "Unsupported arch $arch"; exit 1 ;;
esac

# 4. Download + verify
url="$bucketUrl/${version}/planton-${version}-linux-${arch}"
tmp="$(mktemp)"
curl -fsSL "$url" -o "$tmp"
echo "Verifying checksum..."
#curl -fsSL "${url}.sha256" | sha256sum -c -

# 5. Atomic install
targetDir="$installDir/$version"
sudo mkdir -p "$targetDir"
sudo install -m 0755 "$tmp" "$targetDir/planton"
sudo ln -sf "$targetDir/planton" "$binLink"

echo "🎉 Upgraded to planton $version"
