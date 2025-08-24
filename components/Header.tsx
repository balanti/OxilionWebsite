
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/95a7c9602536e90360d34d3a760ede4c/0af64283b96e04bf884225d043b3276d.jfif" 
              alt="Oxilion Limited Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-[`Pacifico`] text-gray-600">Oxilion Limited</span>
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Team
            </Link>
            <Link href="/insights" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Insights
            </Link>
            <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
              Contact Us
            </Link>
          </div>
          <button 
            className="lg:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? `close` : `menu`}-line text-2xl text-gray-700`}></i>
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                Team
              </Link>
              <Link href="/insights" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                Insights
              </Link>
              <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap inline-block text-center">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
