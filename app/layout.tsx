import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { AuthProvider } from "../contexts/AuthContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { CartWishlistProvider } from "../contexts/CartWishlistContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSS Solutions - Multi Vendor Marketplace",
  description: "Experience premium eCommerce shopping with high conversion designs, multi-vendor support, multilingual and dark mode features.",
  authors: [{ name: "JSS Solutions Ltd" }],
  keywords: ["eCommerce", "marketplace", "multi-vendor", "electronics", "fashion", "agriculture", "india"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ReactQueryProvider>
          <AuthProvider>
            <ThemeProvider>
              <LanguageProvider>
                <CartWishlistProvider>
                  <Header />
                  <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
                    {children}
                  </main>
                  <Footer />
                </CartWishlistProvider>
              </LanguageProvider>
            </ThemeProvider>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
