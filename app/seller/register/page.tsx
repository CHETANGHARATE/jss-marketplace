'use client';

import React, { useState, useEffect } from 'react';
import { Store, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getCategories } from '../../../services/category';
import { Category } from '../../../types';

const perks = [
  { icon: TrendingUp, title: 'Reach more buyers', desc: 'Get your products in front of thousands of active shoppers across India.' },
  { icon: ShieldCheck, title: 'Secure payouts', desc: 'Fast, reliable settlements straight to your bank account via Razorpay.' },
  { icon: Zap, title: 'Zero setup fee', desc: 'Start selling for free — pay only a small commission per order.' }
];

export default function SellerRegisterPage() {
  const { t } = useLanguage();
  const [categories, setCategories] = useState<Category[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    category: '',
    gstin: ''
  });

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <CheckCircle2 size={56} className="text-primary mx-auto mb-5" />
        <h1 className="text-2xl font-black text-foreground mb-2">Application received!</h1>
        <p className="text-sm text-muted-custom">
          Thanks {form.ownerName || 'there'}, our team will review your details and get back to you within 24-48 hours at {form.email || 'your email'}.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      {/* Left: pitch */}
      <div className="lg:col-span-2 space-y-8">
        <div>
          <div className="h-14 w-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
            <Store size={26} />
          </div>
          <h1 className="text-3xl font-black text-foreground tracking-tight">Become a Seller</h1>
          <p className="text-sm text-muted-custom mt-2 font-medium">
            Join JSS Solutions Marketplace and start selling to customers across India.
          </p>
        </div>

        <div className="space-y-5">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div key={perk.title} className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">{perk.title}</h3>
                  <p className="text-xs text-muted-custom mt-1 leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: form */}
      <div className="lg:col-span-3">
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border-custom rounded-3xl p-6 sm:p-8 shadow-sm space-y-5"
        >
          <h2 className="font-bold text-foreground text-lg">Seller details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted-custom">Business Name</label>
              <input
                required
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                placeholder="e.g. Bright Touch Technologies"
                className="w-full mt-1 bg-background-secondary border border-border-custom rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-custom">Owner Name</label>
              <input
                required
                name="ownerName"
                value={form.ownerName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full mt-1 bg-background-secondary border border-border-custom rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted-custom">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@business.com"
                className="w-full mt-1 bg-background-secondary border border-border-custom rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-custom">Phone</label>
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full mt-1 bg-background-secondary border border-border-custom rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted-custom">Primary Category</label>
              <select
                required
                name="category"
                value={form.category}
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
              <label className="text-xs font-semibold text-muted-custom">GSTIN (optional)</label>
              <input
                name="gstin"
                value={form.gstin}
                onChange={handleChange}
                placeholder="22AAAAA0000A1Z5"
                className="w-full mt-1 bg-background-secondary border border-border-custom rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white py-3.5 rounded-2xl font-bold hover:bg-accent-hover transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Submit Application
          </button>
          <p className="text-[11px] text-muted-custom text-center">
            By submitting, you agree to our seller terms and conditions.
          </p>
        </form>
      </div>
    </div>
  );
}
