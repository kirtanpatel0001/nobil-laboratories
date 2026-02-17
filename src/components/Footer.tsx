import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-extrabold text-white mb-4 block tracking-tight">
              Nobil Laboratories
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              Advancing healthcare through precision testing, state-of-the-art technology, and innovative clinical research. Delivering accurate results you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About the Lab</Link></li>
              <li><Link href="/facilities" className="hover:text-blue-400 transition-colors">Our Facilities</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Patient Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/blood-tests" className="hover:text-blue-400 transition-colors">Routine Blood Tests</Link></li>
              <li><Link href="/services/pathology" className="hover:text-blue-400 transition-colors">Clinical Pathology</Link></li>
              <li><Link href="/services/molecular" className="hover:text-blue-400 transition-colors">Molecular Diagnostics</Link></li>
              <li><Link href="/services/home-collection" className="hover:text-blue-400 transition-colors">Home Sample Collection</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start">
                <span>123 Medical Hub, Ring Road<br />Surat, Gujarat 395001</span>
              </li>
              <li>Phone: +91 98765 43210</li>
              <li>Email: info@nobillaboratories.com</li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
          <p>&copy; {currentYear} Nobil Laboratories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}