import Link from "next/link";
import { Logo } from "../theme";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Intelligent bookkeeping & tax solutions powered by AI
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-semibold">Solutions</h4>
          <Link href="/docs/bookkeeping-tax-solution-guides/ai-bookkeeping-cash-basis" className="text-sm text-muted-foreground hover:text-foreground">
            AI Bookkeeping
          </Link>
          <Link href="/docs/bookkeeping-tax-solution-guides/ai-tax-filing" className="text-sm text-muted-foreground hover:text-foreground">
            AI Tax Filing
          </Link>
          <Link href="/docs/bookkeeping-tax-solution-guides/ai-tax-strategy" className="text-sm text-muted-foreground hover:text-foreground">
            AI Tax Strategy
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-semibold">Resources</h4>
          <Link href="/docs/getting-started" className="text-sm text-muted-foreground hover:text-foreground">
            Getting Started
          </Link>
          <Link href="/docs/using-the-uplinq-app" className="text-sm text-muted-foreground hover:text-foreground">
            Using Uplinq
          </Link>
          <Link href="/docs/integrations-troubleshooting" className="text-sm text-muted-foreground hover:text-foreground">
            Troubleshooting
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-semibold">Company</h4>
          <a href="https://uplinq.com/about" className="text-sm text-muted-foreground hover:text-foreground">
            About Us
          </a>
          <a href="https://uplinq.com/careers" className="text-sm text-muted-foreground hover:text-foreground">
            Careers
          </a>
          <a href="https://uplinq.com/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Uplinq. All rights reserved.
        </p>
      </div>
    </footer>
  );
}