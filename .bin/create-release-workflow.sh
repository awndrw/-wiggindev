#!/bin/zsh

PREFIX="../packages/"
SUFFIX="/package.json"

PATHS=(../packages/*/package.json)

DIRS=("${PATHS[@]#$PREFIX}")
DIRS=("${DIRS[@]%$SUFFIX}")

JSONDIRS=$(jq --compact-output --null-input '$ARGS.positional' --args -- "${DIRS[@]}")

cp ../.github/templates/release.yaml ../.github/workflows/release.yaml

sed -i .bak "s/%%PACKAGES%%/$JSONDIRS/" ../.github/workflows/release.yaml
