'use client';

import React from 'react';
import { ApiCategory } from '../types/api';
import { useLanguage } from '../contexts/LanguageContext';
import { getLocalizedText } from '../utils/translation';
import { Layers } from 'lucide-react';

interface CategoryHeaderProps {
  category: ApiCategory;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  const { language } = useLanguage();
  const categoryName = getLocalizedText(category.name, language);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-border/40 p-8 sm:p-10 mb-8">
      <div className="relative z-10 max-w-2xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 text-primary text-xs font-semibold rounded-full">
          <Layers className="w-3.5 h-3.5" />
          <span>Category Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {categoryName}
        </h1>
        {category.description && (
          <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
            {category.description}
          </p>
        )}
      </div>
    </div>
  );
}
