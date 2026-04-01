import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          🎬 MovieApp
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>

          <Link href="/search" className="hover:text-gray-400 transition">
            Search
          </Link>
        </div>

      </div>
    </nav>
  );
}