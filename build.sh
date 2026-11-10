#!/bin/sh
# Edit site.css / site.js, then run ./build.sh  (needs: npx esbuild). It writes the minified
# site.min.css / site.min.js and stamps their content hash into every page, so a long browser
# cache is always safe.
set -e
cd "$(dirname "$0")"
npx --yes esbuild@0.24.0 site.css --minify --outfile=site.min.css --log-level=warning
npx --yes esbuild@0.24.0 site.js --minify --target=es2019 --outfile=site.min.js --log-level=warning
C=$(md5sum site.min.css | cut -c1-8); J=$(md5sum site.min.js | cut -c1-8)
for f in *.html; do
  sed -i -E "s#/site\.(min\.)?css(\?v=[0-9a-f]+)?\"#/site.min.css?v=$C\"#; s#/site\.(min\.)?js(\?v=[0-9a-f]+)?\"#/site.min.js?v=$J\"#" "$f"
done
echo "css $C  js $J"
