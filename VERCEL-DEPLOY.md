# Vercel Deployment Instructions

## Recommended Approach

We use direct GitHub integration with Vercel for deployments. This means:

1. Commits to the `main` branch automatically trigger deployments
2. No additional GitHub Actions workflow is needed
3. Build logs and deployment status can be viewed in the Vercel dashboard

## Configuration

The project is configured for Next.js with the following settings:

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Output Directory**: `.next`
- **Node.js Version**: 18.x

## Troubleshooting Build Failures

If deployments fail, check the following:

1. Review build logs in the Vercel dashboard for specific errors
2. Ensure all dependencies are properly listed in package.json
3. Verify that the Next.js configuration is compatible with Vercel
4. Try clearing the build cache in Vercel project settings

## Local Testing

To test the build locally before pushing:

```bash
npm install
npm run build
```

If it builds successfully locally but fails on Vercel, there may be environment-specific issues to address.