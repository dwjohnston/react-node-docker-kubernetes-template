#!/usr/bin/env bash

echo "building api image"
source "${BASH_SOURCE%/*}/build-api.sh"
echo "building frontend image"
source "${BASH_SOURCE%/*}/build-frontend.sh"

