import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">

        {/* Company */}
        <div>
          <h2 className="text-xl font-bold">
            BusinessName
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Quality craftsmanship and custom furniture solutions
            built with precision and care.
          </p>
        </div>


        {/* Links */}
        <div>
          <h3 className="font-semibold">
            Quick Links
          </h3>

          <ul className="mt-3 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-black"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="font-semibold">
            Contact
          </h3>

          <p className="mt-3 text-sm text-gray-600">
            Phone: +977 XXXXXXXX
          </p>

          <p className="text-sm text-gray-600">
            Email: info@example.com
          </p>

          <p className="text-sm text-gray-600">
            Nepal
          </p>
        </div>

      </div>


      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BusinessName. All rights reserved.
      </div>

    </footer>
  );
}