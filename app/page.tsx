
'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=modern%20professional%20Nigerian%20business%20office%20with%20executives%20in%20suits%20analyzing%20financial%20reports%20and%20charts%2C%20contemporary%20workspace%20with%20green%20and%20gray%20color%20accents%2C%20natural%20lighting%20and%20glass%20architecture&width=1920&height=1080&seq=hero-oxilion&orientation=landscape')`
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Strategic Financial Solutions for Nigerian Businesses
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Expert consulting and financial management services tailored for Nigeria's dynamic business environment. We help companies achieve sustainable growth and financial excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Our Services
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial and management consulting solutions designed to drive your business forward in Nigeria's competitive market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-bar-chart-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Financial Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic financial planning and analysis to optimize your company's financial performance and ensure long-term stability.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-organization-chart text-3xl text-gray-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Management Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance on organizational structure, process optimization, and strategic decision-making for operational excellence.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-coins-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Investment Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional investment advice and portfolio management tailored to Nigerian market opportunities and regulations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-file-chart-line text-3xl text-gray-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Risk Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive risk assessment and mitigation strategies to protect your business from financial and operational risks.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-government-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compliance & Regulatory</h3>
              <p className="text-gray-600 leading-relaxed">
                Navigate Nigerian financial regulations and ensure full compliance with local and international standards.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-3xl text-gray-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic consulting to help you identify growth opportunities and develop competitive advantages in your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Trusted Financial Partners in Nigeria
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in the Nigerian financial landscape, we understand the unique challenges and opportunities facing businesses in our dynamic economy.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of certified financial analysts and management consultants has helped over 200 companies across Lagos, Abuja, Port Harcourt, and Kano achieve their financial goals and operational excellence.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                  <div className="text-gray-600">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-600 mb-2">₦5B+</div>
                  <div className="text-gray-600">Assets Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20Nigerian%20business%20team%20in%20modern%20office%20environment%2C%20diverse%20group%20of%20financial%20consultants%20and%20managers%20working%20collaboratively%2C%20contemporary%20office%20setting%20in%20Lagos%20with%20natural%20lighting%20and%20professional%20attire&width=800&height=600&seq=about-team&orientation=landscape" 
                alt="Our professional team" 
                className="rounded-2xl shadow-2xl object-cover w-full h-96 object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across Nigeria's key economic sectors, providing specialized solutions for diverse industry needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ri-oil-line', name: 'Oil & Gas', color: 'bg-orange-100 text-orange-600' },
              { icon: 'ri-bank-line', name: 'Banking & Finance', color: 'bg-green-100 text-green-600' },
              { icon: 'ri-shopping-bag-line', name: 'Retail & E-commerce', color: 'bg-gray-100 text-gray-600' },
              { icon: 'ri-building-line', name: 'Real Estate', color: 'bg-green-100 text-green-600' },
              { icon: 'ri-smartphone-line', name: 'Technology', color: 'bg-gray-100 text-gray-600' },
              { icon: 'ri-truck-line', name: 'Manufacturing', color: 'bg-green-100 text-green-600' },
              { icon: 'ri-hospital-line', name: 'Healthcare', color: 'bg-gray-100 text-gray-600' },
              { icon: 'ri-graduation-cap-line', name: 'Education', color: 'bg-green-100 text-green-600' }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-center">
                <div className={`w-16 h-16 ${industry.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${industry.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.9), rgba(21, 128, 61, 0.9)), url('https://readdy.ai/api/search-image?query=modern%20Lagos%20Nigeria%20business%20district%20skyline%20at%20sunset%2C%20professional%20financial%20buildings%20and%20skyscrapers%2C%20dynamic%20urban%20landscape%20with%20warm%20golden%20lighting%20representing%20growth%20and%20prosperity&width=1920&height=600&seq=cta-background&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Schedule a free consultation with our expert team and discover how we can help your business achieve financial success in Nigeria's dynamic market.
          </p>
          <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block">
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
