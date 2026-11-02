#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "🚀 Starting Render build for Laravel..."

# Install composer dependencies
composer install --no-dev --optimize-autoloader --no-interaction

# Ensure storage and database folders exist
mkdir -p storage/framework/{sessions,views,cache}
mkdir -p database
touch database/database.sqlite

# Optimize Laravel
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Run migrations
php artisan migrate --force

echo "✅ Build completed successfully!"
