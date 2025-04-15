import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next App",
  description: "A basic layout with navbar and footer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-blue-600 text-white px-6 py-4 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-lg font-semibold">MyApp</div>
            <div className="space-x-4">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/about" className="hover:underline">
                About
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen px-6 py-8">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-600 text-center py-4">
          <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
