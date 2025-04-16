import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { CustomCard } from './components/custom-card';
import { Icon } from './lib/icons';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    // Add custom components
    Card: CustomCard,
    Icon: Icon,
  };
}
