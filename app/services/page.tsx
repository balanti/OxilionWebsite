
'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
  const services = [
    {
      id: 'financial-planning',
      icon: 'ri-bar-chart-line',
      title: 'Financial Planning & Analysis',
      description:
        'Comprehensive financial planning services to optimize your company\'s performance and ensure long-term stability.',
      features: [
        'Strategic financial planning and forecasting',
        'Cash flow management and optimization',
        'Budget preparation and variance analysis',
        'Financial performance monitoring',
        'Investment planning and analysis',
        'Working capital management'
      ],
      color: 'blue'
    },
    {
      id: 'management-consulting',
      icon: 'ri-organization-chart',
      title: 'Management Consulting',
      description:
        'Expert guidance on organizational structure, process optimization, and strategic decision-making for operational excellence.',
      features: [
        'Organizational restructuring and design',
        'Process improvement and automation',
        'Change management strategies',
        'Performance management systems',
        'Leadership development programs',
        'Operational efficiency optimization'
      ],
      color: 'green'
    },
    {
      id: 'investment-advisory',
      icon: 'ri-coins-line',
      title: 'Investment Advisory Services',
      description:
        'Professional investment advice and portfolio management tailored to Nigerian market opportunities and regulations.',
      features: [
        'Portfolio management and optimization',
        'Market research and analysis',
        'Investment strategy development',
        'Due diligence services',
        'Merger and acquisition advisory',
        'Capital raising assistance'
      ],
      color: 'purple'
    },
    {
      id: 'risk-management',
      icon: 'ri-file-chart-line',
      title: 'Risk Management',
      description:
        'Comprehensive risk assessment and mitigation strategies to protect your business from financial and operational risks.',
      features: [
        'Risk assessment and identification',
        'Risk mitigation strategy development',
        'Internal control system design',
        'Fraud prevention and detection',
        'Business continuity planning',
        'Insurance and coverage analysis'
      ],
      color: 'red'
    },
    {
      id: 'compliance-regulatory',
      icon: 'ri-government-line',
      title: 'Compliance & Regulatory Support',
      description:
        'Navigate Nigerian financial regulations and ensure full compliance with local and international standards.',
      features: [
        'Regulatory compliance audits',
        'Policy and procedure development',
        'Staff training on compliance matters',
        'Regulatory filing assistance',
        'Anti-money laundering (AML) programs',
        'Know Your Customer (KYC) implementation'
      ],
      color: 'yellow'
    },
    {
      id: 'business-strategy',
      icon: 'ri-lightbulb-line',
      title: 'Business Strategy & Growth',
      description:
        'Strategic consulting to help you identify growth opportunities and develop competitive advantages in your industry.',
      features: [
        'Strategic planning and execution',
        'Market entry strategies',
        'Competitive analysis and positioning',
        'Business model optimization',
        'Growth strategy development',
        'Digital transformation consulting'
      ],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="pt-24 pb-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.9), rgba(21, 128, 61, 0.9)), url('https://readdy.ai/api/search-image?query=modern%20professional%20financial%20consulting%20services%20office%20in%20Nigeria%2C%20diverse%20team%20of%20consultants%20analyzing%20charts%20and%20data%2C%20contemporary%20business%20environment%20with%20natural%20lighting%20and%20professional%20atmosphere&width=1920&height=800&seq=services-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Our Professional Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Comprehensive financial and management consulting solutions designed to drive your
            business forward in Nigeria's dynamic market environment.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}>
                    <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mb-8`}>
                      <i className={`${service.icon} text-4xl ${colors.text}`}></i>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                      <div className="grid gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className={`inline-flex items-center px-8 py-4 ${colors.text} border-2 ${colors.border} rounded-lg hover:${colors.bg} transition-colors cursor-pointer whitespace-nowrap font-semibold`}
                      >
                        Get Started
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>

                  <div className={isEven ? 'lg:pl-8' : 'lg:pr-8 lg:col-start-1'}>
                    <img
                      src={`https://readdy.ai/api/search-image?query=professional%20Nigerian%20business%20consultants%20working%20on%20${service.title
                        .toLowerCase()
                        .replace(/\s+/g, '%20')}%20in%20modern%20office%20environment%2C%20diverse%20team%20analyzing%20financial%20data%20and%20charts%2C%20contemporary%20workspace%20with%20natural%20lighting%20and%20professional%20atmosphere&width=800&height=600&seq=service-${service.id}&orientation=landscape`}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl object-cover w-full h-96 object-top"
                      onError={e => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = '/placeholder-service.jpg';
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Oxilion Limited?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and deep understanding of the Nigerian business environment sets
              us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certified Experts</h3>
              <p className="text-gray-600">
                Our team holds international certifications and deep local market expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support to ensure your business operations run smoothly.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h3>
              <p className="text-gray-600">Full compliance with Nigerian and international financial regulations.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Track record of helping businesses achieve sustainable growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions across Nigeria's key economic sectors with industry-specific expertise and
              insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'ri-oil-line',
                name: 'Oil & Gas',
                description: 'Upstream, midstream, and downstream operations',
                color: 'bg-orange-100 text-orange-600'
              },
              {
                icon: 'ri-bank-line',
                name: 'Banking & Finance',
                description: 'Commercial banks, microfinance, and fintech',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: 'ri-shopping-bag-line',
                name: 'Retail & E-commerce',
                description: 'Traditional retail and digital commerce',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: 'ri-building-line',
                name: 'Real Estate',
                description: 'Property development and management',
                color: 'bg-purple-100 text-purple-600'
              },
              {
                icon: 'ri-smartphone-line',
                name: 'Technology',
                description: 'Software, hardware, and IT services',
                color: 'bg-indigo-100 text-indigo-600'
              },
              {
                icon: 'ri-truck-line',
                name: 'Manufacturing',
                description: 'Production, processing, and logistics',
                color: 'bg-red-100 text-red-600'
              },
              {
                icon: 'ri-hospital-line',
                name: 'Healthcare',
                description: 'Hospitals, clinics, and medical services',
                color: 'bg-pink-100 text-pink-600'
              },
              {
                icon: 'ri-graduation-cap-line',
                name: 'Education',
                description: 'Schools, universities, and training centers',
                color: 'bg-yellow-100 text-yellow-600'
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className={`w-16 h-16 ${industry.color} rounded-lg flex items-center justify-center mb-4`}>
                  <i className={`${industry.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.9), rgba(21, 128, 61, 0.9)), url('https://readdy.ai/api/search-image?query=successful%20Nigerian%20business%20meeting%20with%20consultants%20and%20clients%20celebrating%20project%20completion%2C%20modern%20conference%20room%20in%20Lagos%20with%20professional%20atmosphere%20and%20handshake%20moment&width=1920&height=600&seq=services-cta&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let our expert team help you navigate the complexities of business management and financial planning.
            Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
