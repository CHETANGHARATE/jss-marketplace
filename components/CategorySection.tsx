'use client';

import React from 'react';
import Link from 'next/link';
import {
  Shirt,
  Laptop,
  Sprout,
  Lamp,
  Sofa,
  Gem,
  BookOpen,
  Activity,
  Sparkles,
  Car,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Category } from '../types';

// Map icon strings to components
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shirt,
  Laptop,
  Sprout,
  Lamp,
  Sofa,
  Gem,
  BookOpen,
  Activity,
  Sparkles,
  Car
};

interface CategorySectionProps {
  categories: Category[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  const { t } = useLanguage();

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
            {t('home.popular_categories')}
          </h2>
          <p className="text-sm text-muted-custom mt-2 font-medium">
            {t('home.popular_categories_desc')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
        {categories.map((cat) => {
          const IconComponent = iconMap[cat.icon] || Sprout;
          
          return (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="group flex flex-col items-center text-center p-6 bg-card border border-border-custom hover:border-primary rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner hover indicator */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/5 rounded-bl-3xl flex items-center justify-center translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <ChevronRight size={12} className="text-primary" />
              </div>

              {/* Icon Container with subtle background shape */}
              <div className="h-16 w-16 rounded-2xl bg-background-secondary text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300 shadow-inner group-hover:rotate-6">
                <IconComponent size={28} />
              </div>

              <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                {t(cat.name)}
              </h3>
              
              <span className="text-[10px] text-muted-custom mt-1.5 font-semibold bg-background-secondary border border-border-custom px-2 py-0.5 rounded-full group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20 transition-all">
                Explore
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
