'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-foreground/60 mb-6 flex-wrap gap-1">
      <Link
        href="/"
        className="inline-flex items-center gap-1 hover:text-primary transition-colors font-medium"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-4 h-4 text-foreground/40 shrink-0" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors font-medium whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-semibold whitespace-nowrap truncate max-w-[200px] sm:max-w-xs">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
