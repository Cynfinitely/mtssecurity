#!/usr/bin/env sh
# Generate the optimized image variants used by the service and hub pages.
# macOS only (uses sips). Output is committed to images/opt/, so builds never
# need image tooling. Re-run after adding or replacing a source photo, then
# commit the result. The homepage keeps using the original files on purpose.
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname "$0")/../.." && pwd)
cd "$ROOT_DIR/images"
mkdir -p opt

QUALITY=60

# Photos shown on the new pages: AVIF at 600w and 1200w (originals are the
# JPEG fallback).
for src in \
  work/officer.jpg \
  work/personal-protection.jpg \
  work/security-jacket.jpg \
  work/cleaning-team.jpg \
  work/facility-cleaning.jpg \
  hero/security-vest.jpg \
  hero/security-radio.jpg \
  hero/facility-vacuum.jpg; do
  name=$(printf '%s' "$src" | sed 's#/#-#; s#\.jpg$##')
  for width in 600 1200; do
    sips -s format avif -s formatOptions "$QUALITY" --resampleWidth "$width" \
      "$src" --out "opt/$name-$width.avif" >/dev/null
  done
  echo "optimized $src"
done

# Social preview images (1200x630) for Open Graph / Twitter cards.
og() {
  sips --resampleWidth 1200 "$1" --out "opt/$2.jpg" >/dev/null
  sips -c 630 1200 "opt/$2.jpg" --out "opt/$2.jpg" >/dev/null
  echo "social image opt/$2.jpg"
}
og hero/security-radio.jpg og-security
og hero/facility-vacuum.jpg og-facility
