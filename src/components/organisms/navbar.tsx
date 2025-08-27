import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md h-16">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
        <Link href="/" className="text-2xl font-bold">
          FitScore
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
