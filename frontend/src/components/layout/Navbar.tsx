import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link 
          href="/"
          className="text-xl font-bold tracking-wide text-gray-900"
        >
          BusinessName
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-900 hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}
        </div>


        {/* Mobile Button Placeholder */}
        <button className="md:hidden text-xl">
          ☰
        </button>

      </nav>
    </header>
  );
}