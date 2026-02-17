import Link from 'next/link';
import React from 'react';

// Define the structure for our navigation links
interface NavItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services & Tests', href: '/services' },
  { name: 'Research', href: '/research' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-blue-800 tracking-tight">
              Nobil Laboratories
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-700 text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-blue-800 transition-colors shadow-md">
              Book a Test
            </button>
          </div>

          {/* Mobile Menu Button (Placeholder for functionality) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-blue-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}