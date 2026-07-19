'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Store, Package, IndianRupee, TrendingUp, ArrowRight, PlusCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getCategories } from '../../../services/category';
import { Category } from '../../../types';

const stats = [
  { icon: Package, label: 'Active Listings', value: '0' },
  { icon: IndianRupee, label: 'Total Sales', value: '₹0' },
  { icon: TrendingUp, label: 'This Month', value: '₹0' }
];

export default function SellerDashboardPage() {
  const { t } = useLanguage();
  const [categories, setCategories] = useState<Category[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    category: '',
    subcategory: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const selectedCategory = categories.find((c) => c.id === product.category);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
      // reset subcategory whenever the parent category changes
      ...(name === 'category' ? { subcategory: '' } : {})
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setProduct({ name: '', category: '', subcategory: '', price: '', stock: '' });
  };

  return (
    <div className="space-y-8">
      <div className="bg-card border border-border-custom rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
          <Store size={26} />
        </div>
        <h1 className="text-2xl font-black text-foreground">Seller Dashboard</h1>
        <p className="text-sm text-muted-custom mt-2 font-medium max-w-lg">
          You haven&apos;t registered as a seller yet. Complete your seller application to start listing products on JSS Solutions Marketplace.
        </p>
        <Link
          href="/seller/register"
          className="inline-flex items-center gap-2 mt-5 text-sm font-bold bg-accent text-white px-5 py-3 rounded-2xl hover:bg-accent-hover transition-all shadow-sm"
        >
          Complete Seller Registration
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-card border border-border-custom rounded-2xl p-5 shadow-sm">
              <Icon size={20} className="text-primary mb-2" />
              <p className="text-2xl font-black text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-custom font-semibold mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Add Product Form */}
      <div className="bg-card border border-border-custom rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <PlusCircle size={20} className="text-primary" />
          <h2 className="font-bold text-lg text-foreground">Add a New Product</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs font-semibold text-muted-custom">Product Name</label>
            <input
              required
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="e.g. Sun-Dried Rice Papad 250g"
              className="w-full mt-1 bg-background-secondary border border-border-custom rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted-custom">Category</label>
              <select
                required
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full mt-1 bg-background-secondary border border-border-custom rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {t(cat.name)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-custom">Subcategory</label>
              <select
                name="subcategory"
                value={product.subcategory}
                onChange={handleChange}
                disabled={!selectedCategory}
                className="w-full mt-1 bg-background-secondary border border-border-custom rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none disabled:opacity-50"
              >
                <option value="">
                  {selectedCategory ? 'Select subcategory' : 'Select a category first'}
                </option>
                {selectedCategory?.subcategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted-custom">Price (₹)</label>
              <input
                required
                type="number"
                min="0"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="499"
                className="w-full mt-1 bg-background-secondary border border-border-custom rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-custom">Stock Quantity</label>
              <input
                required
                type="number"
                min="0"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="50"
                className="w-full mt-1 bg-background-secondary border border-border-custom rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary-hover transition-all shadow-sm"
          >
            Submit Product for Review
          </button>

          {submitted && (
            <p className="text-xs text-green-600 font-bold flex items-center gap-1.5">
              <CheckCircle2 size={14} />
              Product submitted! Our team will review and publish it shortly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
