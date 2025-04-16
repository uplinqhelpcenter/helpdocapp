import Link from 'next/link';
import { Logo } from '../theme';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Logo />
          </Link>
          <div className="hidden md:flex md:gap-6">
            <Link
              href="/docs"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80"
            >
              Documentation
            </Link>
            <Link
              href="/docs/bookkeeping-tax-solution-guides"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80"
            >
              Solutions
            </Link>
            <Link
              href="/docs/using-the-uplinq-app"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80"
            >
              Using Uplinq
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://app.uplinq.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}