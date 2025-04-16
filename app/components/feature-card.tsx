"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  return (
    <Link 
      href={href}
      className="group relative flex flex-col justify-between rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-colors hover:bg-accent/40"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4 flex items-center text-sm text-primary">
        <span className="mr-1">Learn more</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
    </Link>
  );
}