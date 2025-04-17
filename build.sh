#!/bin/bash
set -e

echo "Starting build process..."

# Install dependencies
npm install

# Generate .source directory first
echo "Generating .source directory..."
npx fumadocs-mdx

# Add debug info
echo "Current directory structure:"
ls -la 
echo ".source directory:"
ls -la .source || echo ".source directory not found"

# Build the project
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Copy static Vercel configuration to output directory
cp vercel-static.json out/vercel.json

# Verify the output directory
echo "Build output:"
ls -la out/

echo "Build completed successfully!"