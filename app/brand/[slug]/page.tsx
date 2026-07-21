'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useBrandBySlug } from '../../../hooks/useBrands';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { BrandHeader } from '../../../components/BrandHeader';
import { Sparkles, AlertCircle } from 'lucide-react';

export default function BrandPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const { data: brand, isLoading, isError } = useBrandBySlug(slug);

  if (isLoading) {
    return (
      <div className="py-20 flex flex-col items-center justify-center gap-3 text-foreground/60">
        <Sparkles className="w-8 h-8 text-primary animate-spin" />
        <p className="text-sm font-medium">Loading Brand Information...</p>
      </div>
    );
  }

  if (isError || !brand) {
    return (
      <div className="py-16 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-rose-500 mx-auto" />
        <h2 className="text-2xl font-bold text-foreground">Brand Not Found</h2>
        <p className="text-sm text-foreground/60">
          The requested brand could not be found or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: 'Brands', href: '/brands' },
          { label: brand.name },
        ]}
      />

      <BrandHeader brand={brand} />

      <div className="p-8 bg-muted/20 border border-border/40 rounded-3xl text-center space-y-2">
        <h3 className="text-lg font-bold text-foreground">Official {brand.name} Products</h3>
        <p className="text-sm text-foreground/60">
          Explore guaranteed authentic products directly from {brand.name}.
        </p>
      </div>
    </div>
  );
}
