'use client';

import React, { useState } from 'react';
import { useReturnsQuery, useCreateReturnMutation } from '../../../hooks/useReturns';
import { useRefundsQuery } from '../../../hooks/useRefunds';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { AccountSidebar } from '../../../components/AccountSidebar';
import { RotateCcw, Plus, X, Sparkles, DollarSign } from 'lucide-react';

export default function ReturnsRefundsPage() {
  const { data: returns = [], isLoading: isReturnsLoading } = useReturnsQuery();
  const { data: refunds = [], isLoading: isRefundsLoading } = useRefundsQuery();
  const createReturnMutation = useCreateReturnMutation();

  const [activeTab, setActiveTab] = useState<'returns' | 'refunds'>('returns');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [returnForm, setReturnForm] = useState({
    order_number: '',
    reason: 'Defective Product',
    notes: '',
  });

  const handleSubmitReturn = (e: React.FormEvent) => {
    e.preventDefault();
    createReturnMutation.mutate(returnForm, {
      onSuccess: () => {
        setIsModalOpen(false);
        setReturnForm({ order_number: '', reason: 'Defective Product', notes: '' });
      },
    });
  };

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Account Dashboard', href: '/account' }, { label: 'Returns & Refunds' }]} />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <AccountSidebar />

        <div className="flex-1 bg-card border border-border/40 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 min-w-0 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/40">
            <div>
              <h1 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
                <RotateCcw className="w-6 h-6 text-primary" />
                <span>Returns & Refunds Center</span>
              </h1>
              <p className="text-xs text-foreground/60 font-medium mt-1">
                Track return requests and monitor refund processing statuses.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-2xl border border-border/40">
                <button
                  onClick={() => setActiveTab('returns')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'returns'
                      ? 'bg-primary text-primary-foreground shadow-xs'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  Returns History
                </button>
                <button
                  onClick={() => setActiveTab('refunds')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'refunds'
                      ? 'bg-primary text-primary-foreground shadow-xs'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  Refunds History
                </button>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-xl hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Request Return</span>
              </button>
            </div>
          </div>

          {activeTab === 'returns' && (
            <div>
              {isReturnsLoading ? (
                <div className="py-12 text-center text-xs text-foreground/50 animate-pulse">
                  Loading return requests...
                </div>
              ) : returns.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <RotateCcw className="w-10 h-10 text-foreground/30 mx-auto" />
                  <h3 className="text-base font-bold text-foreground">No Return Requests</h3>
                  <p className="text-xs text-foreground/60">You have no active product return requests.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {returns.map((ret) => (
                    <div
                      key={ret.id}
                      className="p-5 bg-card border border-border/40 rounded-3xl shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-primary">Order #{ret.order_number}</span>
                        <span className="font-bold uppercase text-[10px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                          {ret.status}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-foreground/80">Reason: {ret.reason}</p>
                      <span className="text-[10px] text-foreground/40 font-semibold block">
                        Requested on {new Date(ret.created_at).toLocaleDateString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'refunds' && (
            <div>
              {isRefundsLoading ? (
                <div className="py-12 text-center text-xs text-foreground/50 animate-pulse">
                  Loading refund status...
                </div>
              ) : refunds.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <DollarSign className="w-10 h-10 text-foreground/30 mx-auto" />
                  <h3 className="text-base font-bold text-foreground">No Refund Records</h3>
                  <p className="text-xs text-foreground/60">You have no processed refund transactions.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {refunds.map((ref) => (
                    <div
                      key={ref.id}
                      className="p-5 bg-card border border-border/40 rounded-3xl shadow-sm flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-mono font-bold text-primary">#{ref.refund_number}</span>
                        <span className="text-foreground/60 block font-medium">Order #{ref.order_number}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-black text-sm text-foreground block">
                          ₹{ref.amount?.toLocaleString()}
                        </span>
                        <span className="font-bold text-[10px] text-emerald-600 uppercase">
                          {ref.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-card text-foreground w-full max-w-lg border border-border/40 rounded-3xl p-6 shadow-2xl space-y-5 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-foreground/50 hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-extrabold text-foreground flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-primary" />
              <span>Request Product Return</span>
            </h3>

            <form onSubmit={handleSubmitReturn} className="space-y-4 text-xs font-semibold">
              <div className="space-y-1">
                <label className="text-foreground/70">Order Number *</label>
                <input
                  type="text"
                  required
                  value={returnForm.order_number}
                  onChange={(e) => setReturnForm({ ...returnForm, order_number: e.target.value })}
                  placeholder="e.g. JSS-849201"
                  className="w-full bg-muted/30 border border-border/40 rounded-xl px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-foreground/70">Return Reason *</label>
                <select
                  value={returnForm.reason}
                  onChange={(e) => setReturnForm({ ...returnForm, reason: e.target.value })}
                  className="w-full bg-muted/30 border border-border/40 rounded-xl px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="Defective Product">Defective or Damaged Product</option>
                  <option value="Wrong Item Delivered">Wrong Item Delivered</option>
                  <option value="Size/Fit Issue">Size or Fit Issue</option>
                  <option value="Item Not Needed">Item No Longer Needed</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-foreground/70">Additional Notes (Optional)</label>
                <textarea
                  rows={3}
                  value={returnForm.notes}
                  onChange={(e) => setReturnForm({ ...returnForm, notes: e.target.value })}
                  placeholder="Provide any additional details about the return..."
                  className="w-full bg-muted/30 border border-border/40 rounded-xl p-3.5 text-foreground focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={createReturnMutation.isPending}
                className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                {createReturnMutation.isPending ? (
                  <Sparkles className="w-4 h-4 animate-spin" />
                ) : (
                  <span>Submit Return Request</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
