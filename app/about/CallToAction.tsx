
'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Let's discuss how our expertise, values, and commitment to excellence can help your organization achieve its financial goals and unlock its full potential.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
            Schedule a Consultation
          </Link>
          <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
            Explore Our Services
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-phone-line text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us Today</h3>
            <p className="text-gray-300">+234 9 461 2345</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mail-line text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-300">info@oxilion.com</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Our Office</h3>
            <p className="text-gray-300">Wuse II, Abuja, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
}
