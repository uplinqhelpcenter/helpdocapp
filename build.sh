#!/bin/bash
set -e

echo "Starting build process..."

# Install dependencies
npm install

# Build the project
npm run build

# Copy static Vercel configuration to output directory
cp vercel-static.json out/vercel.json

# Verify the output directory
echo "Build output:"
ls -la out/

echo "Build completed successfully!"