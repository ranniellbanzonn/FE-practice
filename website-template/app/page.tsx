import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next App",
  description: "A basic layout with navbar and footer",
};

export default function Home() {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-black text-white px-6 py-4 shadow-md">
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
        <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Welcome to MyApp</h1>
          <p className="text-lg leading-relaxed mb-4">
            This is a minimal black and white layout using Next.js 14 and the
            new App Router. You can customize this structure to build landing
            pages, blogs, or full-stack apps.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Explore the navigation links above to learn more about this project.
            This template is built for clarity, simplicity, and extendability.
          </p>
          <p className="text-lg leading-relaxed">
            Get started by editing{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            . Happy coding!
          </p>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white text-center py-4">
          <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
