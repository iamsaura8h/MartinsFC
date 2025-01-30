"use client";
import Link from "next/link";

const Navbar = () => {
  const handleScroll = (id: string) => {
    const targetView = document.getElementById(id.toLowerCase());
    if (targetView) {
      targetView.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container flex justify-between px-6 items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-extrabold">Martins FC</h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 font-medium">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          <button 
            onClick={() => handleScroll("team")} 
            className="hover:text-red-500"
          >
            Team
          </button>
          <Link href="/about" className="hover:text-red-500">
            About
          </Link>
        </div>
        
        {/* Adidas Logo */}
        <div>
          <img src="whiteAdidas.png" alt="Adidas Logo" className="w-12" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
