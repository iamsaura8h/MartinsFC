import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img src="/images/logo.png" alt="Martins FC Logo" className="h-12" />
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          <Link href="/team" className="hover:text-red-500">
            Team
          </Link>
          <Link href="/about" className="hover:text-red-500">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
