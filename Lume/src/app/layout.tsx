import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Lume – Premium Event Planning",
  description: "Weddings • Corporate • Birthdays",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}