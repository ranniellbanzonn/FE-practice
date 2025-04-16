import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}

      <nav className="px-5 py-5 bg-black text-white">
        <div className="flex items-center justify-between">
          {/* title */}
          <div className="font-bold text-xl">
            <h1>MyApp</h1>
          </div>
          {/* links */}
          <div className="gap-4 flex ">
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

      {/* Main */}
      <main className="min-h-screen max-w-5xl mx-auto px-6 py-12">
        <h1 className="font-bold text-4xl mb-5">Welcome to MyApp</h1>
        <p className="mb-5 text-lg">
          This is a minimal black and white layout using Next.js 14 and the new
          App Router. You can customize this structure to build landing pages,
          blogs, or full-stack apps.
        </p>
        <p className="mb-5 text-lg">
          Explore the navigation links above to learn more about this project.
          This template is built for clarity, simplicity, and extendability.
        </p>
        <p className="text-lg leading-relaxed">
          Get started by editing{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded">app/page.tsx</code>.
          Happy coding!
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    </>
  );
}
