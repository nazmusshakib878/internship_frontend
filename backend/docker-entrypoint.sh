#!/bin/bash
set -e

# Default PORT if not provided by Render
PORT="${PORT:-10000}"
export PORT

# Create sqlite database if it doesn't exist and using sqlite
if [ "$DB_CONNECTION" = "sqlite" ] || [ -z "$DB_CONNECTION" ]; then
    touch /var/www/html/database/database.sqlite
    chown www-data:www-data /var/www/html/database/database.sqlite
fi

# Run migrations automatically
php artisan migrate --force || true

# Cache configurations for speed in production
php artisan config:cache || true
php artisan route:cache || true
php artisan view:cache || true

exec "$@"
