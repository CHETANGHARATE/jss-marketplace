'use client';

import React from 'react';
import {
  useNotificationsQuery,
  useMarkNotificationReadMutation,
  useMarkAllNotificationsReadMutation
} from '../../../hooks/useNotifications';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { AccountSidebar } from '../../../components/AccountSidebar';
import { Bell, CheckCheck, Check } from 'lucide-react';

export default function NotificationsPage() {
  const { data: notifications = [], isLoading } = useNotificationsQuery();
  const markReadMutation = useMarkNotificationReadMutation();
  const markAllReadMutation = useMarkAllNotificationsReadMutation();

  const unreadCount = notifications.filter((n) => !n.read_at).length;

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Account Dashboard', href: '/account' }, { label: 'Notifications' }]} />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <AccountSidebar />

        <div className="flex-1 bg-card border border-border/40 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 min-w-0 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/40">
            <div>
              <h1 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
                <Bell className="w-6 h-6 text-amber-500" />
                <span>Notification Center</span>
              </h1>
              <p className="text-xs text-foreground/60 font-medium mt-1">
                Stay updated with order updates, promotional offers, and security alerts.
              </p>
            </div>

            {unreadCount > 0 && (
              <button
                onClick={() => markAllReadMutation.mutate()}
                disabled={markAllReadMutation.isPending}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-xl hover:bg-primary/20 transition-colors"
              >
                <CheckCheck className="w-4 h-4" />
                <span>Mark All as Read</span>
              </button>
            )}
          </div>

          {isLoading ? (
            <div className="py-12 text-center text-xs text-foreground/50 animate-pulse">
              Loading notifications...
            </div>
          ) : notifications.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Bell className="w-10 h-10 text-foreground/30 mx-auto" />
              <h3 className="text-base font-bold text-foreground">No Notifications</h3>
              <p className="text-xs text-foreground/60">You have no notifications in your inbox.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                    n.read_at
                      ? 'bg-card border-border/40 opacity-75'
                      : 'bg-primary/5 border-primary/40 shadow-xs'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-foreground">{n.title}</span>
                      {!n.read_at && (
                        <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                      )}
                    </div>
                    <p className="text-xs text-foreground/70">{n.message}</p>
                    <span className="text-[10px] font-semibold text-foreground/40 block">
                      {new Date(n.created_at).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {!n.read_at && (
                    <button
                      onClick={() => markReadMutation.mutate(n.id)}
                      className="p-1.5 text-foreground/40 hover:text-primary transition-colors"
                      title="Mark as Read"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
