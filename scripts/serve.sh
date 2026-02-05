#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-8080}"
python -m http.server "$PORT" --bind 0.0.0.0
