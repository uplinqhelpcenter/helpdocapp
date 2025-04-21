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
  // Order of guide pages
  pageOrder: [
    [
      'bookkeeping-tax-solution-guides/index',
      // Bookkeeping section
      'bookkeeping-tax-solution-guides/bookkeeping/ai-bookkeeping',
      'bookkeeping-tax-solution-guides/bookkeeping/index',
      'bookkeeping-tax-solution-guides/bookkeeping/historical-ai-bookkeeping',
      'bookkeeping-tax-solution-guides/bookkeeping/qbo-syncing',
      'bookkeeping-tax-solution-guides/bookkeeping/accounts-receivable',
      'bookkeeping-tax-solution-guides/bookkeeping/accounts-payable',
      'bookkeeping-tax-solution-guides/bookkeeping/costing',
      'bookkeeping-tax-solution-guides/bookkeeping/segmenting',
      'bookkeeping-tax-solution-guides/bookkeeping/fixed-assets',
      'bookkeeping-tax-solution-guides/bookkeeping/inventory',
      // Tax sections
      'bookkeeping-tax-solution-guides/tax-filing/index',
      'bookkeeping-tax-solution-guides/tax-filing/ai-tax-filing',
      'bookkeeping-tax-solution-guides/tax-filing/historical-ai-tax-filing',
      'bookkeeping-tax-solution-guides/tax-filing/enhanced-ai-tax-filing',
      'bookkeeping-tax-solution-guides/tax-strategy/index',
      'bookkeeping-tax-solution-guides/tax-strategy/ai-tax-strategy',
    ]
  ]
});
