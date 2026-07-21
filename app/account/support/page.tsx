'use client';

import React, { useState } from 'react';
import {
  useSupportTicketsQuery,
  useSupportTicketQuery,
  useCreateTicketMutation,
  useReplyTicketMutation
} from '../../../hooks/useSupportTickets';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { AccountSidebar } from '../../../components/AccountSidebar';
import { LifeBuoy, Plus, Send, X, Sparkles } from 'lucide-react';

export default function SupportTicketsPage() {
  const { data: tickets = [], isLoading } = useSupportTicketsQuery();
  const createMutation = useCreateTicketMutation();
  const replyMutation = useReplyTicketMutation();

  const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [replyMessage, setReplyMessage] = useState<string>('');

  const [newTicket, setNewTicket] = useState({
    subject: '',
    category: 'Orders & Shipping',
    priority: 'medium',
    message: '',
  });

  const { data: activeTicket } = useSupportTicketQuery(selectedTicketId || '');

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(newTicket, {
      onSuccess: () => {
        setIsModalOpen(false);
        setNewTicket({ subject: '', category: 'Orders & Shipping', priority: 'medium', message: '' });
      },
    });
  };

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicketId || !replyMessage.trim()) return;

    replyMutation.mutate(
      { id: selectedTicketId, message: replyMessage.trim() },
      {
        onSuccess: () => setReplyMessage(''),
      }
    );
  };

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Account Dashboard', href: '/account' }, { label: 'Support Tickets' }]} />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <AccountSidebar />

        <div className="flex-1 bg-card border border-border/40 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 min-w-0 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/40">
            <div>
              <h1 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
                <LifeBuoy className="w-6 h-6 text-primary" />
                <span>Customer Support Tickets</span>
              </h1>
              <p className="text-xs text-foreground/60 font-medium mt-1">
                Get assistance for orders, payments, refunds, or general platform inquiries.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Ticket</span>
            </button>
          </div>

          {isLoading ? (
            <div className="py-12 text-center text-xs text-foreground/50 animate-pulse">
              Loading support tickets...
            </div>
          ) : tickets.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <LifeBuoy className="w-10 h-10 text-foreground/30 mx-auto" />
              <h3 className="text-base font-bold text-foreground">No Support Tickets</h3>
              <p className="text-xs text-foreground/60">You have no active support tickets.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-5 space-y-3">
                {tickets.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTicketId(t.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                      selectedTicketId === t.id
                        ? 'bg-primary/5 border-primary ring-2 ring-primary/20'
                        : 'bg-card border-border/40 hover:border-primary/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-primary text-xs">#{t.ticket_number}</span>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {t.status}
                      </span>
                    </div>

                    <h4 className="font-bold text-xs text-foreground line-clamp-1">{t.subject}</h4>
                    <span className="text-[10px] text-foreground/50 font-semibold block">{t.category}</span>
                  </div>
                ))}
              </div>

              <div className="md:col-span-7 bg-muted/20 border border-border/40 rounded-3xl p-5 space-y-4">
                {activeTicket ? (
                  <>
                    <div className="pb-3 border-b border-border/40 space-y-1">
                      <span className="font-mono font-bold text-xs text-primary">#{activeTicket.ticket_number}</span>
                      <h3 className="font-bold text-sm text-foreground">{activeTicket.subject}</h3>
                    </div>

                    <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                      {activeTicket.messages?.map((msg) => (
                        <div
                          key={msg.id}
                          className={`p-3 rounded-2xl text-xs space-y-1 ${
                            msg.is_admin
                              ? 'bg-card border border-border/40 text-foreground'
                              : 'bg-primary text-primary-foreground ml-4'
                          }`}
                        >
                          <span className="font-bold block text-[11px] opacity-80">{msg.user_name}</span>
                          <p>{msg.message}</p>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleReplySubmit} className="flex gap-2 pt-2 border-t border-border/40">
                      <input
                        type="text"
                        value={replyMessage}
                        onChange={(e) => setReplyMessage(e.target.value)}
                        placeholder="Type your reply message..."
                        className="flex-1 bg-card border border-border/40 rounded-xl px-3 py-2 text-xs font-semibold text-foreground focus:outline-none focus:border-primary"
                      />
                      <button
                        type="submit"
                        disabled={replyMutation.isPending}
                        className="p-2.5 bg-primary text-primary-foreground rounded-xl text-xs font-bold hover:bg-primary/90"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </>
                ) : (
                  <p className="text-xs text-foreground/50 py-12 text-center">
                    Select a ticket from the left list to view conversation history.
                  </p>
                )}
              </div>
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
              <Plus className="w-5 h-5 text-primary" />
              <span>Submit Support Ticket</span>
            </h3>

            <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs font-semibold">
              <div className="space-y-1">
                <label className="text-foreground/70">Subject *</label>
                <input
                  type="text"
                  required
                  value={newTicket.subject}
                  onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                  placeholder="e.g. Order Delivery Status Inquiry"
                  className="w-full bg-muted/30 border border-border/40 rounded-xl px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-foreground/70">Category</label>
                  <select
                    value={newTicket.category}
                    onChange={(e) => setNewTicket({ ...newTicket, category: e.target.value })}
                    className="w-full bg-muted/30 border border-border/40 rounded-xl px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary"
                  >
                    <option value="Orders & Shipping">Orders & Shipping</option>
                    <option value="Payments & Refunds">Payments & Refunds</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Account & Security">Account & Security</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-foreground/70">Priority</label>
                  <select
                    value={newTicket.priority}
                    onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value })}
                    className="w-full bg-muted/30 border border-border/40 rounded-xl px-3.5 py-2.5 text-foreground focus:outline-none focus:border-primary"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-foreground/70">Message Description *</label>
                <textarea
                  required
                  rows={4}
                  value={newTicket.message}
                  onChange={(e) => setNewTicket({ ...newTicket, message: e.target.value })}
                  placeholder="Describe your issue or question in detail..."
                  className="w-full bg-muted/30 border border-border/40 rounded-xl p-3.5 text-foreground focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={createMutation.isPending}
                className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                {createMutation.isPending ? (
                  <Sparkles className="w-4 h-4 animate-spin" />
                ) : (
                  <span>Submit Ticket</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
