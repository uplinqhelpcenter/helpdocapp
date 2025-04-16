import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: 'content/docs',
  disableImportAliasWarning: true,
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    gfm: true,
    format: 'mdx',
    development: false
  },
});
