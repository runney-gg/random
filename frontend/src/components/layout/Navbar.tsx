"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 border-b bg-white">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


        <Link 
          href="/"
          className="text-xl font-bold text-gray-900"
        >
          BusinessName
        </Link>


        {/* Desktop */}
        <div className="hidden md:flex gap-8">

          {navLinks.map((link)=>(
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-900 hover:text-black"
            >
              {link.name}
            </Link>
          ))}

        </div>


        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={()=>setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>


      </nav>


      {/* Mobile Menu */}

      {open && (

        <div className="border-t bg-white px-6 py-4 md:hidden">

          {navLinks.map((link)=>(
            <Link
              key={link.name}
              href={link.href}
              onClick={()=>setOpen(false)}
              className="block py-3 text-gray-900"
            >
              {link.name}
            </Link>
          ))}

        </div>

      )}


    </header>
  );
}