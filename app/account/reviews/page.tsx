'use client';

import React from 'react';
import { useMyReviewsQuery, useDeleteReviewMutation } from '../../../hooks/useReviews';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { AccountSidebar } from '../../../components/AccountSidebar';
import { Star, Trash2 } from 'lucide-react';

export default function MyReviewsPage() {
  const { data: reviews = [], isLoading } = useMyReviewsQuery();
  const deleteMutation = useDeleteReviewMutation();

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Account Dashboard', href: '/account' }, { label: 'My Reviews' }]} />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <AccountSidebar />

        <div className="flex-1 bg-card border border-border/40 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 min-w-0 w-full">
          <div className="pb-4 border-b border-border/40">
            <h1 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
              <Star className="w-6 h-6 text-amber-500 fill-current" />
              <span>My Product Reviews</span>
            </h1>
            <p className="text-xs text-foreground/60 font-medium mt-1">
              View ratings and feedback you've submitted for purchased items.
            </p>
          </div>

          {isLoading ? (
            <div className="py-12 text-center text-xs text-foreground/50 animate-pulse">
              Loading reviews history...
            </div>
          ) : reviews.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Star className="w-10 h-10 text-foreground/30 mx-auto" />
              <h3 className="text-base font-bold text-foreground">No Reviews Submitted</h3>
              <p className="text-xs text-foreground/60">You haven't written any product reviews yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-5 bg-card border border-border/40 rounded-3xl shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < rev.rating ? 'fill-current' : 'opacity-30'}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                          rev.status === 'approved'
                            ? 'bg-emerald-500/10 text-emerald-600'
                            : 'bg-amber-500/10 text-amber-600'
                        }`}
                      >
                        {rev.status}
                      </span>
                      <button
                        onClick={() => deleteMutation.mutate(rev.id)}
                        className="p-1 text-foreground/40 hover:text-rose-500 transition-colors"
                        title="Delete Review"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-foreground/80 leading-relaxed">{rev.comment}</p>
                  <span className="text-[10px] text-foreground/40 font-semibold block">
                    Posted on {new Date(rev.created_at).toLocaleDateString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
