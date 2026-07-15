'use client';

import React from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCartWishlist } from '../contexts/CartWishlistContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { t } = useLanguage();
  const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist();

  const isWish = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    alert(`${product.name} ${t('prod.cart_added')}!`);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    alert(`Proceeding to secure checkout with ${product.name}`);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="group bg-card text-card-foreground border border-border-custom hover:border-primary rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden h-[420px] relative">
      
      {/* Wishlist Button Overlay */}
      <button
        onClick={handleWishlistClick}
        className={`absolute top-3 right-3 z-10 p-2 rounded-xl border backdrop-blur-md transition-all duration-200 ${
          isWish
            ? 'bg-accent/15 border-accent text-accent'
            : 'bg-white/70 border-white/20 text-gray-500 hover:text-accent hover:bg-white dark:bg-slate-900/70 dark:border-slate-800 dark:text-slate-400 dark:hover:text-accent dark:hover:bg-slate-900'
        }`}
        aria-label="Wishlist Toggle"
      >
        <Heart size={16} fill={isWish ? 'currentColor' : 'none'} className="transition-transform duration-200 group-active:scale-90" />
      </button>

      {/* Discount Badge */}
      {product.discountPercent > 0 && (
        <span className="absolute top-3 left-3 z-10 bg-accent text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">
          {product.discountPercent}% OFF
        </span>
      )}

      {/* Image & Quick View Hover */}
      <div 
        onClick={() => onQuickView(product.id)}
        className="h-44 bg-background-secondary flex items-center justify-center p-4 relative overflow-hidden shrink-0 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-105"
        />
        {/* Glassmorphic hover overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
          <span className="bg-card text-card-foreground text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md border border-border-custom hover:scale-105 transition-transform active:scale-95">
            <Eye size={14} />
            {t('prod.quick_view')}
          </span>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="space-y-1">
          {/* Brand & Stock */}
          <div className="flex justify-between items-center text-[10px] text-muted-custom font-semibold">
            <span>{product.brand}</span>
            <span
              className={
                product.stockStatus === 'in_stock'
                  ? 'text-green-600'
                  : product.stockStatus === 'low_stock'
                  ? 'text-amber-600'
                  : 'text-red-500 font-bold'
              }
            >
              {t(`prod.${product.stockStatus}`)}
            </span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product.id)}
            className="font-bold text-sm text-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Seller */}
          <p className="text-[10px] text-muted-custom">
            {t('prod.seller')}: <span className="font-medium text-foreground">{product.seller.name}</span>
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-1 mt-1">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  className={i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'}
                />
              ))}
            </div>
            <span className="text-[10px] font-black text-foreground">{product.rating}</span>
            <span className="text-[9px] text-muted-custom">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Pricing & Cart Action */}
        <div className="pt-3 border-t border-border-custom mt-2">
          <div className="flex items-baseline justify-between gap-1 mb-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-black text-primary">
                ₹{product.offerPrice.toLocaleString()}
              </span>
              {product.originalPrice > product.offerPrice && (
                <span className="text-xs text-muted-custom line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="p-2 bg-background hover:bg-primary hover:text-white text-primary border border-border-custom hover:border-primary rounded-xl transition-all flex items-center justify-center shrink-0"
              title={t('prod.add_to_cart')}
            >
              <ShoppingCart size={16} />
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-primary text-white text-xs font-bold py-2 rounded-xl hover:bg-primary-hover active:scale-95 transition-all text-center"
            >
              {t('prod.buy_now')}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
