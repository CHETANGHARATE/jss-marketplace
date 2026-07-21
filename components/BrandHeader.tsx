'use client';

import React from 'react';
import { ApiBrand } from '../types/api';
import { ShieldCheck } from 'lucide-react';

interface BrandHeaderProps {
  brand: ApiBrand;
}

export function BrandHeader({ brand }: BrandHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-muted/40 border border-border/40 p-8 sm:p-10 mb-8 flex items-center gap-6">
      {brand.logo && (
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-card rounded-2xl p-3 shadow-md border border-border/50 flex items-center justify-center shrink-0">
          <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
        </div>
      )}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Official Brand Store</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {brand.name}
        </h1>
        {brand.description && (
          <p className="text-sm text-foreground/70 max-w-xl line-clamp-2">
            {brand.description}
          </p>
        )}
      </div>
    </div>
  );
}
