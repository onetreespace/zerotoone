#!/bin/bash

set -euo pipefail

cd "$(git rev-parse --show-toplevel)/packages/contracts"

forge clean && rm -rf build
forge build

mkdir -p build
cp -rfn out/**/*.json build/
