'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Tag, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BannerSlide {
  id: number;
  titleKey: string;
  subKey: string;
  tagKey: string;
  bgGradient: string;
  accentText: string;
  categoryId: string;
  image: string;
}

export const BannerSlider: React.FC = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: BannerSlide[] = [
    {
      id: 1,
      titleKey: 'banner.diwali_title',
      subKey: 'banner.diwali_subtitle',
      tagKey: 'Diwali Dhamaka',
      bgGradient: 'from-orange-600 to-amber-500',
      accentText: 'Special Festival Offer',
      categoryId: 'electronics',
      image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 2,
      titleKey: 'banner.monsoon_title',
      subKey: 'banner.monsoon_subtitle',
      tagKey: 'Monsoon Sale',
      bgGradient: 'from-blue-600 to-teal-500',
      accentText: 'Heavy Rain Discounts',
      categoryId: 'agriculture',
      image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 3,
      titleKey: 'banner.billion_title',
      subKey: 'banner.billion_subtitle',
      tagKey: 'Big Billion Days',
      bgGradient: 'from-purple-600 to-pink-500',
      accentText: 'Trending Super Deals',
      categoryId: 'fashion',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden rounded-3xl border border-border-custom shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 md:p-16 bg-gradient-to-r ${slides[currentSlide].bgGradient}`}
        >
          {/* Slide Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Slide Image Layer for Right Side */}
          <div 
            className="absolute inset-0 md:left-1/2 w-full md:w-1/2 h-full opacity-20 md:opacity-40 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />

          {/* Slide Content */}
          <div className="relative z-10 w-full md:w-3/5 text-white space-y-4 md:space-y-6 flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold w-max"
            >
              <Sparkles size={12} className="text-amber-300 fill-amber-300" />
              <span>{slides[currentSlide].accentText}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-md"
            >
              {t(slides[currentSlide].titleKey)}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/95 max-w-xl font-medium drop-shadow-sm"
            >
              {t(slides[currentSlide].subKey)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-2 flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={() => router.push(`/category/${slides[currentSlide].categoryId}`)}
                className="bg-white text-gray-900 font-bold px-7 py-3.5 rounded-2xl hover:bg-opacity-90 active:scale-95 transition-all flex items-center gap-2 shadow-lg text-sm sm:text-base"
              >
                <ShoppingBag size={18} className="text-gray-900" />
                <span>{t('banner.cta')}</span>
              </button>
              
              <span className="text-xs font-black uppercase tracking-widest bg-black/30 border border-white/20 px-3.5 py-2 rounded-xl flex items-center gap-1">
                <Tag size={12} />
                {slides[currentSlide].tagKey}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Manual Left/Right Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/20 hover:bg-black/40 border border-white/10 text-white transition-all z-25 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/20 hover:bg-black/40 border border-white/10 text-white transition-all z-25 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-25">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-8 bg-white' : 'w-2.5 bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
