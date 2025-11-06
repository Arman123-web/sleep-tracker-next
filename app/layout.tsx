import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import Chatbot from '@/components/Chatbot'; // ✅ Import Chatbot component

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sleep Tracker',
  description: 'A simple sleep tracker app with AI sleep assistant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800`}
        >
          {/* Navbar at top */}
          <Navbar />

          {/* Main Content */}
          <main className="min-h-screen">{children}</main>

          {/* Chatbot Floating Widget */}
          {/* <Chatbot /> ✅ AI Assistant visible on every page */}

          {/* Footer at bottom */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
