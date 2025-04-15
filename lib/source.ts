import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  order: [
    ['index'], // Uplinq Help Center
    ['bookkeeping-tax-solution-guides'], // Solution Guides
    ['getting-started'], // Getting Started
    ['using-the-uplinq-app'], // Using the Uplinq App
    ['integrations-troubleshooting'], // Integrations & Troubleshooting
    ['managing-my-account'], // Managing My Account
    ['security-privacy'], // Security & Privacy
    // Include other directories to preserve them in the navigation
    ['account-management'],
    ['ai-capabilities'],
    ['bookkeeping-features'],
    ['integrations'],
    ['tax-solutions'],
    ['troubleshooting'],
  ],
});
