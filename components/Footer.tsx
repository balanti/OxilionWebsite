
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-[\'Pacifico\'] text-green-400 mb-6 block">
              Oxilion Limited
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premier financial consulting and management services for Nigerian businesses. Expert guidance for sustainable growth and financial excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-white"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Financial Planning</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Management Consulting</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Investment Advisory</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Risk Management</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Compliance Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">News & Insights</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-map-pin-line text-blue-400 mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300 font-semibold mb-2">Abuja Office:</p>
                  <p className="text-gray-300">No.22, IT Igbani Street</p>
                  <p className="text-gray-300">Jabi, Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-map-pin-line text-blue-400 mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300 font-semibold mb-2">Kano Office:</p>
                  <p className="text-gray-300">Flat 1, Hassan Gwarzo Memorial</p>
                  <p className="text-gray-300">Zaria Road, Kano, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-blue-400 mr-3"></i>
                <div>
                  <p className="text-gray-300">08036920065</p>
                  <p className="text-gray-300">08023191640</p>
                  <p className="text-gray-300">08036298100</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line text-blue-400 mr-3"></i>
                <p className="text-gray-300">info@oxilionng.com</p>
              </div>
              <div className="flex items-center">
                <i className="ri-global-line text-blue-400 mr-3"></i>
                <p className="text-gray-300">www.oxilionng.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              2024 Oxilion Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
