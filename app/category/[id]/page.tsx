'use client';

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Grid,
  List,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Star,
  ChevronLeft,
  MessageSquare,
  Tag,
  TrendingUp,
  Clock
} from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Filters } from '../../../components/Filters';
import { ProductCard } from '../../../components/ProductCard';
import { ProductQuickView } from '../../../components/ProductQuickView';
import { Accordion } from '../../../components/ui/Accordion';
import { getCategoryById, getCategories } from '../../../services/category';
import { getProducts } from '../../../services/product';
import { Category, Product, FilterParams } from '../../../types';

interface CategoryPageProps {
  params: Promise<{ id: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { id: categoryId } = use(params);
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const { t } = useLanguage();
  
  // States
  const [category, setCategory] = useState<Category | null>(null);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(true);
  const [quickViewProductId, setQuickViewProductId] = useState<string | null>(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Filter State
  const [filters, setFilters] = useState<FilterParams>({
    category: categoryId,
    sortBy: 'popularity',
    searchQuery: initialSearch,
  });

  // Sync route category change
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: categoryId,
      subcategory: undefined, // reset subcategory on category change
      brand: undefined,
      searchQuery: initialSearch,
    }));
    setCurrentPage(1);
  }, [categoryId, initialSearch]);

  // Load category detail and all categories lists
  useEffect(() => {
    const loadCategoryDetails = async () => {
      try {
        const catData = await getCategoryById(categoryId);
        if (catData) {
          setCategory(catData);
        }
        const list = await getCategories();
        setAllCategories(list);
      } catch (err) {
        console.error('Error loading category detail', err);
      }
    };
    loadCategoryDetails();
  }, [categoryId]);

  // Load products based on filters
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts(filters);
        setProducts(data);
      } catch (err) {
        console.error('Error fetching filtered products', err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [filters]);

  // Baseline (unfiltered) category catalog — powers Featured / Best Sellers / New Arrivals / Offers strips
  const [categoryBaseline, setCategoryBaseline] = useState<Product[]>([]);
  useEffect(() => {
    getProducts({ category: categoryId }).then(setCategoryBaseline).catch(() => setCategoryBaseline([]));
  }, [categoryId]);

  const featuredProducts = categoryBaseline.slice(0, 4);
  const bestSellers = [...categoryBaseline].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const newArrivals = [...categoryBaseline].sort((a, b) => b.id.localeCompare(a.id)).slice(0, 4);
  const offers = [...categoryBaseline]
    .filter((p) => p.discountPercent >= 10)
    .sort((a, b) => b.discountPercent - a.discountPercent)
    .slice(0, 4);

  if (!category) {
    return (
      <div className="py-20 text-center space-y-4">
        <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full mx-auto" />
        <p className="font-bold text-foreground">Verifying category node...</p>
      </div>
    );
  }

  // Handle Sort Change
  const handleSortChange = (sortByVal: string) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: sortByVal as any,
    }));
    setCurrentPage(1);
  };

  // Pagination maths
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Smooth scroll back to top of products list
      document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubcategoryPillClick = (subcat: string) => {
    setFilters((prev) => ({
      ...prev,
      subcategory: prev.subcategory === subcat ? undefined : subcat,
    }));
    setCurrentPage(1);
  };

  const relatedCats = allCategories.filter((c) => c.id !== categoryId).slice(0, 4);

  // Mock Category-Level Reviews
  const mockReviews = [
    { name: 'Sameer G.', rating: 5, comment: `Awesome variety in ${t(category.name)}. The delivery was exceptionally quick.`, date: 'Yesterday' },
    { name: 'Kavita L.', rating: 4, comment: 'Product descriptions are accurate. Happy with my shopping experience.', date: '3 days ago' }
  ];

  return (
    <div className="space-y-12">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-muted-custom">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <span className="text-foreground">{t(category.name)}</span>
      </nav>

      {/* Category Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden h-[240px] sm:h-[300px] md:h-[350px] border border-border-custom shadow-md flex items-center p-8 sm:p-12">
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${category.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        
        <div className="relative z-10 text-white max-w-xl space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-accent bg-accent/20 px-3.5 py-1.5 rounded-full border border-accent/30 w-max block">
            Category Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">{t(category.name)}</h1>
          <p className="text-sm text-white/80 leading-relaxed font-medium">{category.description}</p>
        </div>
      </div>

      {/* Seasonal Promo Strip */}
      <div className="bg-gradient-to-r from-accent to-orange-600 rounded-2xl p-4 text-white text-center shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 gap-3">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Sparkles className="animate-pulse" size={16} />
          <span className="text-xs sm:text-sm font-bold">Diwali Special: Extra 10% off using ICICI cards on purchases above ₹2,000!</span>
        </div>
        <button 
          onClick={() => alert('Coupon code JSS10 applied!')}
          className="bg-white text-accent font-black text-xs px-4 py-2 rounded-xl self-center sm:self-auto hover:bg-white/90 active:scale-95 transition-all shadow-md"
        >
          Activate Code: JSS10
        </button>
      </div>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-accent" />
            <h3 className="font-black text-lg text-foreground tracking-tight">Featured Products</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <ProductCard key={`feat_${prod.id}`} product={prod} onQuickView={setQuickViewProductId} />
            ))}
          </div>
        </div>
      )}

      {/* Best Sellers & New Arrivals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {bestSellers.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-primary" />
              <h3 className="font-black text-lg text-foreground tracking-tight">Best Sellers</h3>
            </div>
            <div className="space-y-3">
              {bestSellers.map((prod) => (
                <div
                  key={`best_${prod.id}`}
                  onClick={() => setQuickViewProductId(prod.id)}
                  className="flex gap-4 p-3 bg-card border border-border-custom rounded-2xl shadow-sm hover:border-primary cursor-pointer transition-all"
                >
                  <img src={prod.image} alt={prod.name} className="h-14 w-14 rounded-xl object-cover bg-background-secondary shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-sm text-foreground truncate">{prod.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-black text-sm text-primary">₹{prod.offerPrice.toLocaleString()}</span>
                      <span className="flex items-center gap-0.5 text-[10px] font-bold text-amber-500">
                        <Star size={10} fill="currentColor" /> {prod.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {newArrivals.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-accent" />
              <h3 className="font-black text-lg text-foreground tracking-tight">New Arrivals</h3>
            </div>
            <div className="space-y-3">
              {newArrivals.map((prod) => (
                <div
                  key={`new_${prod.id}`}
                  onClick={() => setQuickViewProductId(prod.id)}
                  className="flex gap-4 p-3 bg-card border border-border-custom rounded-2xl shadow-sm hover:border-primary cursor-pointer transition-all"
                >
                  <img src={prod.image} alt={prod.name} className="h-14 w-14 rounded-xl object-cover bg-background-secondary shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-sm text-foreground truncate">{prod.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-black text-sm text-primary">₹{prod.offerPrice.toLocaleString()}</span>
                      <span className="text-[10px] text-green-600 bg-green-500/10 px-1.5 py-0.5 rounded font-bold">Fresh</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Offers */}
      {offers.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Tag size={16} className="text-accent" />
            <h3 className="font-black text-lg text-foreground tracking-tight">Offers on {t(category.name)}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {offers.map((prod) => (
              <ProductCard key={`offer_${prod.id}`} product={prod} onQuickView={setQuickViewProductId} />
            ))}
          </div>
        </div>
      )}

      {/* Subcategories Horizontal Scroll */}
      <div className="space-y-3">
        <h3 className="font-bold text-sm text-foreground">Explore Subcategories</h3>
        <div className="flex flex-wrap gap-2.5">
          {category.subcategories.map((subcat) => {
            const isSelected = filters.subcategory === subcat;
            return (
              <button
                key={subcat}
                onClick={() => handleSubcategoryPillClick(subcat)}
                className={`text-xs font-bold px-4 py-2.5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-card border-border-custom hover:border-primary text-muted-custom hover:text-primary'
                }`}
              >
                {subcat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Listing Section */}
      <div id="products-section" className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start scroll-mt-24">
        
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Filters
            subcategories={category.subcategories}
            popularBrands={category.popularBrands}
            activeFilters={filters}
            onFilterChange={(newFilters) => {
              setFilters(newFilters);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Products Results Pane */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border border-border-custom p-4.5 rounded-3xl shadow-sm">
            <p className="text-sm text-muted-custom font-semibold">
              Showing <span className="text-foreground font-black">{products.length}</span> products matching your criteria
            </p>
            
            <div className="flex items-center gap-3 self-end sm:self-auto">
              {/* Sort selector */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-muted-custom">{t('cat.sort_by')}:</span>
                <select
                  value={filters.sortBy || ''}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="bg-background-secondary border border-border-custom text-foreground text-xs font-bold px-3 py-2 rounded-xl focus:outline-none focus:border-primary cursor-pointer transition-all"
                >
                  <option value="popularity">{t('cat.sort_popularity')}</option>
                  <option value="newest">{t('cat.sort_newest')}</option>
                  <option value="price_low_high">{t('cat.sort_low_high')}</option>
                  <option value="price_high_low">{t('cat.sort_high_low')}</option>
                  <option value="rating">{t('cat.sort_rating')}</option>
                </select>
              </div>

              {/* Grid/List Toggles */}
              <div className="flex border border-border-custom rounded-xl overflow-hidden shrink-0">
                <button
                  onClick={() => setIsGridView(true)}
                  className={`p-2 transition-colors ${isGridView ? 'bg-primary text-white' : 'bg-background-secondary text-muted-custom hover:text-foreground'}`}
                  title="Grid View"
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setIsGridView(false)}
                  className={`p-2 transition-colors ${!isGridView ? 'bg-primary text-white' : 'bg-background-secondary text-muted-custom hover:text-foreground'}`}
                  title="List View"
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Search Query Filter Badge */}
          {filters.searchQuery && (
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-2xl w-max text-xs font-bold">
              <span>Search query: "{filters.searchQuery}"</span>
              <button 
                onClick={() => setFilters(prev => ({ ...prev, searchQuery: undefined }))}
                className="hover:text-accent ml-1 text-sm font-black"
              >
                ×
              </button>
            </div>
          )}

          {/* Listing Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="h-[420px] bg-card border border-border-custom rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16 bg-card border border-border-custom rounded-3xl shadow-sm space-y-4">
              <ShoppingBag size={48} className="text-muted-custom/30 mx-auto" />
              <p className="text-sm font-semibold text-muted-custom">{t('cat.no_products')}</p>
            </div>
          ) : isGridView ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onQuickView={setQuickViewProductId}
                />
              ))}
            </div>
          ) : (
            // LIST VIEW COMPONENT
            <div className="space-y-4">
              {currentProducts.map((prod) => (
                <div 
                  key={`list_${prod.id}`}
                  onClick={() => setQuickViewProductId(prod.id)}
                  className="group bg-card text-card-foreground border border-border-custom hover:border-primary rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 cursor-pointer relative"
                >
                  <div className="h-40 w-full sm:w-40 bg-background-secondary rounded-2xl p-4 flex items-center justify-center relative shrink-0">
                    <img src={prod.image} alt={prod.name} className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform group-hover:scale-105" />
                    {prod.discountPercent > 0 && (
                      <span className="absolute top-2 left-2 bg-accent text-white text-[9px] font-black px-2 py-0.5 rounded-full">
                        {prod.discountPercent}% OFF
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] text-muted-custom font-semibold">
                        <span>{prod.brand}</span>
                        <span className={prod.stockStatus === 'in_stock' ? 'text-green-600' : 'text-amber-600'}>
                          {t(`prod.${prod.stockStatus}`)}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-1">{prod.name}</h3>
                      <p className="text-xs text-muted-custom line-clamp-2 leading-relaxed">{prod.description}</p>
                      
                      <div className="flex items-center gap-1">
                        <div className="flex text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={12} fill={i < Math.floor(prod.rating) ? 'currentColor' : 'none'} className={i < Math.floor(prod.rating) ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'} />
                          ))}
                        </div>
                        <span className="text-[10px] font-black text-foreground">{prod.rating}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-border-custom mt-3">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-black text-primary">₹{prod.offerPrice.toLocaleString()}</span>
                        {prod.originalPrice > prod.offerPrice && (
                          <span className="text-xs text-muted-custom line-through">₹{prod.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <span className="text-xs font-bold text-primary group-hover:underline flex items-center gap-1">
                        Quick Inspect →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 border border-border-custom hover:border-primary rounded-xl disabled:opacity-40 disabled:hover:border-border-custom transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`h-9 w-9 rounded-xl font-bold text-xs border transition-all ${
                    currentPage === idx + 1
                      ? 'bg-primary border-primary text-white shadow-md'
                      : 'bg-card border-border-custom hover:border-primary text-foreground'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 border border-border-custom hover:border-primary rounded-xl disabled:opacity-40 disabled:hover:border-border-custom transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Customer Reviews segment & FAQ */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t border-border-custom">
        {/* FAQs */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-black text-foreground tracking-tight flex items-center gap-2">
            <span>{t('cat.faqs')}</span>
          </h3>
          <Accordion items={category.faqs} />
        </div>

        {/* Reviews preview */}
        <div className="space-y-6 bg-card border border-border-custom p-6 rounded-3xl shadow-sm">
          <h3 className="text-lg font-black text-foreground tracking-tight flex items-center gap-2">
            <MessageSquare className="text-primary" size={18} />
            <span>Category Reviews</span>
          </h3>
          <div className="space-y-4 divide-y divide-border-custom">
            {mockReviews.map((rev, idx) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-muted-custom font-semibold">
                  <span>{rev.name}</span>
                  <span>{rev.date}</span>
                </div>
                <div className="flex items-center text-amber-500 text-[10px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={10} fill={i < rev.rating ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <p className="text-xs text-muted-custom italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories Grid Links */}
      <section className="space-y-6 pt-8 border-t border-border-custom">
        <h3 className="text-xl font-black text-foreground tracking-tight">{t('cat.related_categories')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedCats.map((relCat) => (
            <Link
              key={relCat.id}
              href={`/category/${relCat.id}`}
              className="bg-card text-card-foreground border border-border-custom hover:border-primary p-5 rounded-2xl shadow-sm text-center font-bold text-sm block transition-all hover:-translate-y-1"
            >
              {t(relCat.name)}
            </Link>
          ))}
        </div>
      </section>

      {/* Quick View Portal Modal */}
      {quickViewProductId && (
        <ProductQuickView
          productId={quickViewProductId}
          onClose={() => setQuickViewProductId(null)}
        />
      )}

    </div>
  );
}
