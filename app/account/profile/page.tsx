'use client';

import React, { useState, useEffect } from 'react';
import { useProfileQuery, useUpdateProfileMutation } from '../../../hooks/useProfile';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { AccountSidebar } from '../../../components/AccountSidebar';
import { User, Save, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProfilePage() {
  const { data: user, isLoading } = useProfileQuery();
  const updateMutation = useUpdateProfileMutation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    gender: 'male' as 'male' | 'female' | 'other',
  });
  const [successNotice, setSuccessNotice] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
        dob: '',
        gender: 'male',
      });
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(formData, {
      onSuccess: () => {
        setSuccessNotice(true);
        setTimeout(() => setSuccessNotice(false), 3000);
      },
    });
  };

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Account Dashboard', href: '/account' }, { label: 'Profile Details' }]} />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <AccountSidebar />

        <div className="flex-1 bg-card border border-border/40 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 min-w-0 w-full">
          <div className="pb-4 border-b border-border/40">
            <h1 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
              <User className="w-6 h-6 text-primary" />
              <span>Personal Information</span>
            </h1>
            <p className="text-xs text-foreground/60 font-medium mt-1">
              Update your account details and contact preferences.
            </p>
          </div>

          {successNotice && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-3 text-emerald-600 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Profile details updated successfully!</span>
            </div>
          )}

          {isLoading ? (
            <div className="py-8 text-center text-xs text-foreground/50 animate-pulse">
              Loading profile details...
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs font-semibold max-w-xl">
              <div className="space-y-1.5">
                <label className="text-foreground/70">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-muted/30 border border-border/40 rounded-xl px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-foreground/70">Email Address (Read-only)</label>
                <input
                  type="email"
                  readOnly
                  value={user?.email || ''}
                  className="w-full bg-muted/60 border border-border/40 rounded-xl px-3.5 py-2.5 text-foreground/50 cursor-not-allowed"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-foreground/70">Phone Number</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 9876543210"
                  className="w-full bg-muted/30 border border-border/40 rounded-xl px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-foreground/70">Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full bg-muted/30 border border-border/40 rounded-xl px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-foreground/70">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                    className="w-full bg-muted/30 border border-border/40 rounded-xl px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={updateMutation.isPending}
                className="py-3 px-6 bg-primary text-primary-foreground text-xs font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                {updateMutation.isPending ? (
                  <Sparkles className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Profile Changes</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
