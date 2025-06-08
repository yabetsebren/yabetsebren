#!/bin/bash

# Portfolio Website Deployment Script
# This script builds and deploys the site to GitHub Pages

echo "🚀 Starting deployment to GitHub Pages..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if gh-pages is installed
if ! command -v gh-pages &> /dev/null; then
    echo "📦 Installing gh-pages..."
    pnpm add -D gh-pages
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .next out

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Build the project
echo "🔨 Building project..."
pnpm run build:export

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Build failed - out directory not found"
    exit 1
fi

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
pnpm run deploy

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://$(git config user.name).github.io"
echo "⏰ It may take a few minutes for changes to appear" 