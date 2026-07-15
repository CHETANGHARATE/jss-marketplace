'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  Heart,
  ShoppingBag,
  Bell,
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  ChevronDown,
  User,
  Store,
  Trash2,
  Plus,
  Minus,
  CheckCircle2,
  Info
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCartWishlist } from '../contexts/CartWishlistContext';
import { getCategories } from '../services/category';
import { Category, Product } from '../types';
import { SearchDropdown } from './SearchDropdown';
import { ProductQuickView } from './ProductQuickView';
import { getProductById } from '../services/product';

export const Header: React.FC = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const {
    cart,
    wishlist,
    removeFromCart,
    updateCartQuantity,
    toggleWishlist,
    addToCart,
    cartTotal,
    cartItemCount
  } = useCartWishlist();

  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [categoriesMenuOpen, setCategoriesMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifPanelOpen, setNotifPanelOpen] = useState(false);

  // Drawers
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Quick view helper in header for search selections
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const searchRef = useRef<HTMLDivElement>(null);
  const catMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCats = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCats();
  }, []);

  // Click outside handlers
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      if (searchRef.current && !searchRef.current.contains(target)) {
        setSearchFocused(false);
      }
      if (catMenuRef.current && !catMenuRef.current.contains(target)) {
        setCategoriesMenuOpen(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(target)) {
        setLangMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(target)) {
        setUserMenuOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(target)) {
        setNotifPanelOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (eOrQuery?: React.FormEvent | string) => {
    if (eOrQuery && typeof eOrQuery !== 'string') {
      eOrQuery.preventDefault();
    }
    const query = typeof eOrQuery === 'string' ? eOrQuery : searchQuery;
    if (query.trim()) {
      router.push(`/category/electronics?search=${encodeURIComponent(query)}`);
      setSearchFocused(false);
    }
  };

  const mockNotifications = [
    { id: 1, title: 'Diwali Dhamaka Starts Today!', desc: 'Get up to 80% off on all electronics & fashion apparel.', time: '2 mins ago', read: false },
    { id: 2, title: 'Price drop alert', desc: 'An item in your wishlist has dropped in price by 10%.', time: '1 hour ago', read: false },
    { id: 3, title: 'Become a Seller', desc: 'Register today and get 0% commission on your first 30 days.', time: '1 day ago', read: true }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-card/95 backdrop-blur-md border-b border-border-custom shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-foreground hover:bg-background-secondary rounded-xl"
              >
                <Menu size={24} />
              </button>
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-primary flex items-center">
                  JSS<span className="text-accent">Solutions</span>
                </span>
                <span className="hidden sm:inline-block text-[9px] font-bold bg-accent/10 text-accent border border-accent/20 px-1.5 py-0.5 rounded uppercase tracking-wider">
                  Market
                </span>
              </Link>
            </div>

            {/* Global Search Bar */}
            <div ref={searchRef} className="hidden lg:block relative flex-1 max-w-xl mx-4">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder={t('nav.search_placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  className="w-full bg-background-secondary text-foreground text-sm pl-11 pr-12 py-3 rounded-2xl border border-border-custom focus:border-primary focus:bg-card focus:outline-none transition-all duration-200 shadow-inner"
                />
                <Search size={18} className="absolute left-4 top-3.5 text-muted-custom" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-3 text-muted-custom hover:text-foreground"
                  >
                    <X size={16} />
                  </button>
                )}
              </form>
              <SearchDropdown
                query={searchQuery}
                isOpen={searchFocused}
                onClose={() => setSearchFocused(false)}
                onSearchSubmit={handleSearchSubmit}
                onProductClick={(id) => setSelectedProductId(id)}
              />
            </div>

            {/* Utility Actions */}
            <div className="flex items-center gap-1 sm:gap-3">
              
              {/* Category Dropdown */}
              <div ref={catMenuRef} className="relative hidden xl:block">
                <button
                  onClick={() => setCategoriesMenuOpen(!categoriesMenuOpen)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors px-3 py-2 rounded-xl hover:bg-background-secondary"
                >
                  <span>{t('nav.all_categories')}</span>
                  <ChevronDown size={16} className={`transform transition-transform ${categoriesMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {categoriesMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-card border border-border-custom rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-border-custom">
                    <div className="py-2">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/category/${cat.id}`}
                          onClick={() => setCategoriesMenuOpen(false)}
                          className="flex items-center px-4 py-2.5 text-sm text-foreground hover:bg-background-secondary hover:text-primary transition-colors"
                        >
                          {t(cat.name)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Language Switcher */}
              <div ref={langMenuRef} className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="p-2.5 text-foreground hover:bg-background-secondary hover:text-primary rounded-2xl transition-all flex items-center gap-1"
                  aria-label="Language Selector"
                >
                  <Globe size={20} />
                  <span className="text-xs font-bold uppercase hidden md:inline">{language}</span>
                </button>
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-card border border-border-custom rounded-2xl shadow-xl z-50 overflow-hidden py-1">
                    {(['en', 'hi', 'mr'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          language === lang
                            ? 'bg-primary/10 text-primary font-bold'
                            : 'text-foreground hover:bg-background-secondary'
                        }`}
                      >
                        {lang === 'en' ? 'English' : lang === 'hi' ? 'हिन्दी' : 'मराठी'}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 text-foreground hover:bg-background-secondary hover:text-primary rounded-2xl transition-all"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              {/* Notifications panel */}
              <div ref={notifRef} className="relative">
                <button
                  onClick={() => setNotifPanelOpen(!notifPanelOpen)}
                  className="p-2.5 text-foreground hover:bg-background-secondary hover:text-primary rounded-2xl transition-all relative"
                >
                  <Bell size={20} />
                  <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-accent rounded-full border border-card" />
                </button>
                {notifPanelOpen && (
                  <div className="absolute right-[-60px] sm:right-0 mt-2 w-80 bg-card border border-border-custom rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-border-custom">
                    <div className="px-4 py-3 bg-background-secondary flex justify-between items-center">
                      <span className="font-bold text-sm text-foreground">{t('nav.notifications')}</span>
                      <span className="text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded-full font-bold">3 New</span>
                    </div>
                    <div className="max-h-72 overflow-y-auto divide-y divide-border-custom">
                      {mockNotifications.map((notif) => (
                        <div key={notif.id} className={`p-4 hover:bg-background-secondary transition-colors ${!notif.read ? 'bg-primary/5' : ''}`}>
                          <div className="flex gap-2">
                            {!notif.read ? <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> : <Info size={16} className="text-muted-custom shrink-0 mt-0.5" />}
                            <div>
                              <h4 className="font-semibold text-xs text-foreground leading-tight">{notif.title}</h4>
                              <p className="text-[11px] text-muted-custom mt-1 leading-snug">{notif.desc}</p>
                              <span className="text-[9px] text-muted-custom block mt-1.5">{notif.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Wishlist Toggle Button */}
              <button
                onClick={() => setWishlistOpen(true)}
                className="p-2.5 text-foreground hover:bg-background-secondary hover:text-primary rounded-2xl transition-all relative"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent text-[10px] font-bold text-white rounded-full flex items-center justify-center border border-card animate-bounce">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Toggle Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="p-2.5 text-foreground hover:bg-background-secondary hover:text-primary rounded-2xl transition-all relative flex items-center gap-1.5 pr-3.5 pl-2.5"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {cartItemCount > 0 ? (
                  <>
                    <span className="absolute -top-1 left-7 h-5 w-5 bg-primary text-[10px] font-bold text-white rounded-full flex items-center justify-center border border-card">
                      {cartItemCount}
                    </span>
                    <span className="text-xs font-bold text-foreground hidden lg:inline-block ml-3">
                      ₹{cartTotal.toLocaleString()}
                    </span>
                  </>
                ) : null}
              </button>

              {/* User Profile dropdown */}
              <div ref={userMenuRef} className="relative hidden md:block">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-1.5 p-1.5 pr-3 rounded-full border border-border-custom hover:border-primary bg-background-secondary hover:bg-card transition-all"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    JD
                  </div>
                  <ChevronDown size={14} className="text-muted-custom" />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-card border border-border-custom rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-border-custom">
                    <div className="px-4 py-3">
                      <p className="text-xs text-muted-custom leading-none">Signed in as</p>
                      <p className="text-sm font-semibold text-foreground mt-1 truncate">John Doe</p>
                    </div>
                    <div className="py-1">
                      <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-background-secondary transition-colors">
                        <User size={16} className="text-muted-custom" />
                        {t('nav.profile')}
                      </Link>
                      <Link href="/seller/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-background-secondary transition-colors">
                        <Store size={16} className="text-muted-custom" />
                        {t('nav.become_seller')}
                      </Link>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={() => alert('Logout action')}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-accent hover:bg-background-secondary transition-colors"
                      >
                        {t('nav.logout')}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Become Seller Header Button */}
              <Link
                href="/seller/register"
                className="hidden xl:flex items-center gap-1.5 text-xs font-bold bg-accent text-white px-4 py-2.5 rounded-2xl hover:bg-accent-hover transition-all shadow-sm hover:scale-105 active:scale-95"
              >
                <Store size={14} />
                <span>{t('nav.become_seller')}</span>
              </Link>

            </div>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity">
          <div className="w-full max-w-md bg-card text-card-foreground p-6 shadow-2xl flex flex-col h-full animate-slide-in relative border-l border-border-custom">
            <button
              onClick={() => setCartOpen(false)}
              className="absolute top-4 right-4 p-2 text-foreground hover:bg-background-secondary rounded-xl"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-black text-foreground mb-6 flex items-center gap-2">
              <ShoppingBag className="text-primary" />
              <span>{t('nav.cart')}</span>
              <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-bold">
                {cartItemCount} Items
              </span>
            </h2>
            
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {cart.length === 0 ? (
                <div className="h-64 flex flex-col items-center justify-center text-center">
                  <ShoppingBag size={48} className="text-muted-custom/40 mb-3" />
                  <p className="text-muted-custom font-medium">{t('cart.empty')}</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4 p-3 bg-background-secondary rounded-2xl border border-border-custom hover:border-primary/20 transition-all">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-16 w-16 rounded-xl object-cover border border-border-custom"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-foreground truncate">{item.product.name}</h4>
                      <p className="text-xs text-muted-custom mt-0.5">{item.product.brand}</p>
                      <div className="flex justify-between items-center mt-2.5">
                        <span className="font-bold text-sm text-primary">₹{item.product.offerPrice.toLocaleString()}</span>
                        <div className="flex items-center border border-border-custom bg-card rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-background-secondary text-muted-custom"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs font-bold text-foreground">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-background-secondary text-muted-custom"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-1.5 self-start text-muted-custom hover:text-accent hover:bg-background rounded-lg transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="mt-6 pt-6 border-t border-border-custom space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-muted-custom">Total Amount</span>
                  <span className="text-xl font-black text-foreground">₹{cartTotal.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    alert('Redirecting to secure Laravel mock gateway checkout');
                    setCartOpen(false);
                  }}
                  className="w-full bg-primary text-white py-3.5 rounded-2xl font-bold hover:bg-primary-hover transition-all text-center block shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t('cart.checkout')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Wishlist Drawer */}
      {wishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity">
          <div className="w-full max-w-md bg-card text-card-foreground p-6 shadow-2xl flex flex-col h-full animate-slide-in relative border-l border-border-custom">
            <button
              onClick={() => setWishlistOpen(false)}
              className="absolute top-4 right-4 p-2 text-foreground hover:bg-background-secondary rounded-xl"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-black text-foreground mb-6 flex items-center gap-2">
              <Heart className="text-accent fill-accent" />
              <span>{t('nav.wishlist')}</span>
              <span className="text-xs bg-accent/10 text-accent px-2.5 py-0.5 rounded-full font-bold">
                {wishlist.length} Items
              </span>
            </h2>
            
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {wishlist.length === 0 ? (
                <div className="h-64 flex flex-col items-center justify-center text-center">
                  <Heart size={48} className="text-muted-custom/40 mb-3" />
                  <p className="text-muted-custom font-medium">{t('wishlist.empty')}</p>
                </div>
              ) : (
                wishlist.map((prod) => (
                  <div key={prod.id} className="flex gap-4 p-3 bg-background-secondary rounded-2xl border border-border-custom hover:border-accent/20 transition-all">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="h-16 w-16 rounded-xl object-cover border border-border-custom"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-foreground truncate">{prod.name}</h4>
                      <p className="text-xs text-muted-custom mt-0.5">{prod.brand}</p>
                      <div className="flex justify-between items-center mt-2.5">
                        <span className="font-bold text-sm text-primary">₹{prod.offerPrice.toLocaleString()}</span>
                        <button
                          onClick={() => {
                            addToCart(prod);
                            toggleWishlist(prod);
                          }}
                          className="text-xs font-bold text-white bg-primary hover:bg-primary-hover px-3 py-1.5 rounded-lg transition-colors"
                        >
                          Move to Cart
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleWishlist(prod)}
                      className="p-1.5 self-start text-muted-custom hover:text-accent hover:bg-background rounded-lg transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur-xs transition-opacity lg:hidden">
          <div className="w-full max-w-sm bg-card text-card-foreground p-6 shadow-2xl flex flex-col h-full animate-slide-in relative border-r border-border-custom">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-foreground hover:bg-background-secondary rounded-xl"
            >
              <X size={20} />
            </button>
            <div className="text-2xl font-black tracking-tight text-primary flex items-center mb-8">
              JSS<span className="text-accent">Solutions</span>
            </div>

            {/* Mobile search bar */}
            <form onSubmit={handleSearchSubmit} className="relative mb-6">
              <input
                type="text"
                placeholder={t('nav.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background-secondary text-foreground text-sm pl-11 pr-10 py-3 rounded-2xl border border-border-custom focus:border-primary focus:outline-none"
              />
              <Search size={18} className="absolute left-4 top-3.5 text-muted-custom" />
            </form>

            {/* Mobile Links */}
            <div className="flex-1 overflow-y-auto space-y-6">
              <div>
                <h3 className="text-xs font-black uppercase text-muted-custom tracking-wider mb-2">Shop Categories</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl text-foreground hover:bg-background-secondary hover:text-primary transition-colors text-sm font-medium"
                    >
                      {t(cat.name)}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase text-muted-custom tracking-wider mb-2">Language Selection</h3>
                <div className="flex gap-2">
                  {(['en', 'hi', 'mr'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`flex-1 text-center py-2 rounded-xl text-xs font-bold border transition-colors ${
                        language === lang
                          ? 'bg-primary border-primary text-white'
                          : 'bg-background-secondary border-border-custom text-foreground'
                      }`}
                    >
                      {lang === 'en' ? 'EN' : lang === 'hi' ? 'HI' : 'MR'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase text-muted-custom tracking-wider mb-2">My Account</h3>
                <div className="space-y-1">
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2 rounded-xl text-foreground hover:bg-background-secondary transition-colors text-sm"
                  >
                    {t('nav.profile')}
                  </Link>
                  <Link
                    href="/seller/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2 rounded-xl text-foreground hover:bg-background-secondary transition-colors text-sm"
                  >
                    {t('nav.become_seller')}
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border-custom mt-auto">
              <button
                onClick={toggleTheme}
                className="w-full flex justify-between items-center p-3 rounded-2xl bg-background-secondary hover:bg-border-custom transition-all text-sm font-semibold"
              >
                <span>Theme Mode</span>
                <span className="flex items-center gap-1.5 text-primary text-xs capitalize">
                  {theme} {theme === 'light' ? <Sun size={14} /> : <Moon size={14} />}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global quick view modal portal hook wrapper */}
      {selectedProductId && (
        <ProductQuickView
          productId={selectedProductId}
          onClose={() => setSelectedProductId(null)}
        />
      )}
    </>
  );
};
