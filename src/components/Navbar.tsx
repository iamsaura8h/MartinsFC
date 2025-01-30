import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container  flex justify-between px-6 items-center">
        {/* Logo */}
        <Link href="/">
          {/* <img src="/images/logo.png" alt="Martins FC Logo" className="h-12" /> */}
          <h1 className="text-2xl font-extrabold">Martins FC</h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 font-medium">
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
        <div>
          <img src="whiteAdidas.png" alt="lol bro" className="w-12 " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
