'use client';

import { getIcon } from '@/lib/icons';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  href: string;
  icon?: string;
  children?: ReactNode;
  className?: string;
}

export function CustomCard({ title, href, icon, children, className = '' }: CardProps) {
  return (
    <Link
      href={href}
      className={`custom-card group relative flex flex-col justify-between p-6 ${className}`}
    >
      {icon && (
        <div className="card-icon mb-4">
          {getIcon(icon)}
        </div>
      )}
      <div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        {children && <div className="text-muted-foreground">{children}</div>}
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