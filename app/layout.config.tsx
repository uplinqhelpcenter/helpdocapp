import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from './theme';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="sidebar-logo-wrapper">
        <Logo />
      </div>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
