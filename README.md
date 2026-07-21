# JSS Solutions Multi Vendor Marketplace - Next.js Enterprise Frontend

Enterprise-grade multi-vendor eCommerce frontend for JSS Solutions Marketplace. Built using **Next.js 16 (App Router)**, **TypeScript**, **React 19**, **TanStack Query (React Query v5)**, **Axios**, and **Tailwind CSS v4**.

---

## Backend API Integration & Architecture

This frontend is designed to consume the **Laravel 12 REST API Backend** running at `http://localhost:8000/api/v1`.

### Completed Modules:

- **Module 1 (Core Infrastructure & Real API Client Integration)**:
  - Centralized Axios client (`services/apiClient.ts`) with automatic Sanctum Bearer token and Guest session headers (`X-Session-ID`).
  - TanStack Query provider (`providers/ReactQueryProvider.tsx`).
  - Auth Context (`contexts/AuthContext.tsx` & `hooks/useAuth.ts`).

- **Module 2 (Catalog Foundation & Multi-lingual Category Navigation)**:
  - Category, Brand & Attribute API Services.
  - Dynamic Multilingual Mega Menu (`components/MegaMenu.tsx`).

- **Module 3 (Product Engine & Search Experience)**:
  - Product, Search & Recommendation API Services.
  - Product Details (`app/product/[slug]`) and Search Results (`app/search`).

- **Module 4 (Shopping Cart & Wishlist)**:
  - Cart & Wishlist API Services.
  - Cart (`app/cart`) and Wishlist (`app/wishlist`) Pages.

- **Module 5 (Customer Checkout & Orders)**:
  - Saved Address, Checkout & Orders API Services.
  - Checkout (`app/checkout`) and Order History (`app/orders`).

- **Module 6 (Payments & Shipping)**:
  - Payment & Shipping API Services with Razorpay integration.

- **Module 7 (Customer Account)**:
  - Customer Profile API Service (`services/profileService.ts`).
  - Notification Center API Service (`services/notificationService.ts`).
  - Product Reviews API Service (`services/reviewService.ts`).
  - Support Tickets API Service (`services/supportService.ts`).
  - Returns API Service (`services/returnService.ts`).
  - Refunds API Service (`services/refundService.ts`).
  - TanStack Query hooks (`useProfileQuery`, `useUpdateProfileMutation`, `useChangePasswordMutation`, `useNotificationsQuery`, `useMyReviewsQuery`, `useSupportTicketsQuery`, `useReturnsQuery`, `useRefundsQuery`).
  - Customer Account Navigation Sidebar (`components/AccountSidebar.tsx`).
  - Centralized Account Dashboard Overview (`app/account/page.tsx`).
  - Personal Profile details management (`app/account/profile/page.tsx`).
  - Password & Security management with strength indicator (`app/account/password/page.tsx`).
  - Notification Center (`app/account/notifications/page.tsx`).
  - Product Reviews history (`app/account/reviews/page.tsx`).
  - Customer Support Tickets & reply thread (`app/account/support/page.tsx`).
  - Returns & Refund requests tracker (`app/account/returns/page.tsx`).

---

## Local Development Setup

```bash
# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Run production build validation
npm run build
```
