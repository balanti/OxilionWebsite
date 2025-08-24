
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems = [
    {
      id: 1,
      title: "CBN Introduces New Guidelines for Digital Banking in Nigeria",
      excerpt: "The Central Bank of Nigeria has released comprehensive guidelines to regulate digital banking operations, focusing on cybersecurity and customer protection.",
      date: "January 15, 2024",
      category: "Regulatory",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20banking%20professionals%20in%20modern%20office%20discussing%20digital%20banking%20regulations%20with%20CBN%20documents%20on%20conference%20table%2C%20professional%20business%20environment%2C%20natural%20lighting&width=400&height=250&seq=insights-news-1&orientation=landscape"
    },
    {
      id: 2,
      title: "Nigeria's Economic Growth Projections for 2024",
      excerpt: "Latest economic indicators suggest positive growth trajectory for Nigeria's economy, driven by oil sector recovery and agricultural improvements.",
      date: "January 10, 2024",
      category: "Economic Analysis",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20economic%20charts%20and%20graphs%20on%20computer%20screens%20showing%20growth%20projections%2C%20financial%20analysts%20working%20in%20modern%20Lagos%20office%20environment&width=400&height=250&seq=insights-news-2&orientation=landscape"
    },
    {
      id: 3,
      title: "New Tax Reforms Impact on Nigerian Businesses",
      excerpt: "Recent tax policy changes by the Federal Inland Revenue Service will significantly affect corporate taxation and business operations across various sectors.",
      date: "January 5, 2024",
      category: "Tax Policy",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20tax%20consultants%20reviewing%20tax%20documents%20and%20calculators%20on%20office%20desk%2C%20professional%20business%20setting%20with%20Nigerian%20flag%20in%20background&width=400&height=250&seq=insights-news-3&orientation=landscape"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Transforming Manufacturing Company's Financial Structure",
      client: "Leading Nigerian Manufacturing Firm",
      challenge: "Restructuring debt portfolio and improving cash flow management",
      solution: "Implemented comprehensive financial restructuring strategy with new credit facilities and working capital optimization",
      result: "40% improvement in cash flow, reduced debt servicing costs by 25%, and enhanced operational efficiency",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20manufacturing%20facility%20with%20modern%20equipment%20and%20workers%2C%20financial%20transformation%20success%20story%2C%20industrial%20setting%20with%20professional%20consultants%20reviewing%20charts&width=400&height=250&seq=insights-case-1&orientation=landscape"
    },
    {
      id: 2,
      title: "Strategic Investment Advisory for Tech Startup",
      client: "Emerging Fintech Company",
      challenge: "Securing Series A funding and establishing regulatory compliance framework",
      solution: "Developed comprehensive business plan, facilitated investor meetings, and ensured full regulatory compliance with CBN requirements",
      result: "Successfully raised $2.5 million in Series A funding, achieved full regulatory approval, and expanded operations to 3 states",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20fintech%20startup%20office%20with%20young%20professionals%20working%20on%20laptops%2C%20modern%20technology%20environment%2C%20investment%20meeting%20with%20venture%20capitalists&width=400&height=250&seq=insights-case-2&orientation=landscape"
    },
    {
      id: 3,
      title: "Agricultural Cooperative Financial Restructuring",
      client: "Northern Nigeria Agricultural Cooperative",
      challenge: "Modernizing financial systems and accessing development finance",
      solution: "Implemented digital financial management system and structured access to agricultural development funds",
      result: "Increased member participation by 60%, secured $1.2 million in development financing, and improved crop yield financing",
      image: "https://readdy.ai/api/search-image?query=Nigerian%20farmers%20in%20agricultural%20cooperative%20meeting%20with%20financial%20advisors%2C%20rural%20development%20setting%2C%20modern%20farming%20equipment%20and%20financial%20documents&width=400&height=250&seq=insights-case-3&orientation=landscape"
    }
  ];

  const blogs = [
    {
      id: 1,
      slug: "foreign-exchange-market-dynamics",
      title: "Understanding Nigeria's Foreign Exchange Market Dynamics",
      excerpt: "An in-depth analysis of factors influencing the Naira exchange rate and strategies for businesses to manage foreign exchange risks effectively.",
      author: "Mohammed Yakasal",
      date: "January 12, 2024",
      readTime: "8 min read",
      tags: ["Foreign Exchange", "Risk Management", "Economic Policy"],
      image: "https://readdy.ai/api/search-image?query=Nigerian%20foreign%20exchange%20traders%20monitoring%20currency%20rates%20on%20multiple%20screens%2C%20Central%20Bank%20of%20Nigeria%20building%20in%20background%2C%20professional%20trading%20floor%20environment&width=400&height=250&seq=insights-blog-1&orientation=landscape"
    },
    {
      id: 2,
      slug: "digital-transformation-banking",
      title: "Digital Transformation in Nigerian Banking Sector",
      excerpt: "How Nigerian banks are leveraging technology to improve customer experience and operational efficiency while maintaining regulatory compliance.",
      author: "Alh. Dalhatu Abubakar",
      date: "January 8, 2024",
      readTime: "12 min read",
      tags: ["Digital Banking", "Technology", "Customer Experience"],
      image: "https://readdy.ai/api/search-image?query=Modern%20Nigerian%20bank%20interior%20with%20digital%20displays%2C%20customers%20using%20mobile%20banking%20apps%2C%20high-tech%20banking%20environment%20with%20professional%20staff&width=400&height=250&seq=insights-blog-2&orientation=landscape"
    },
    {
      id: 3,
      slug: "infrastructure-investment-opportunities",
      title: "Investment Opportunities in Nigeria's Infrastructure Sector",
      excerpt: "Exploring emerging investment opportunities in Nigeria's infrastructure development, including transportation, power, and telecommunications sectors.",
      author: "Sabiu Umar Yola",
      date: "January 3, 2024",
      readTime: "10 min read",
      tags: ["Infrastructure", "Investment", "Economic Development"],
      image: "https://readdy.ai/api/search-image?query=Nigerian%20infrastructure%20development%20with%20modern%20bridges%2C%20roads%20and%20construction%20projects%2C%20investment%20opportunities%20in%20African%20development%2C%20professional%20engineering%20consultants&width=400&height=250&seq=insights-blog-3&orientation=landscape"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Insights & Knowledge</h1>
            <p className="text-xl leading-relaxed">
              Stay informed with the latest developments in Nigerian financial markets, 
              regulatory changes, and industry best practices from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('news')}
                className={`px-8 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'news' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                News & Updates
              </button>
              <button
                onClick={() => setActiveTab('case-studies')}
                className={`px-8 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'case-studies' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Case Studies
              </button>
              <button
                onClick={() => setActiveTab('blogs')}
                className={`px-8 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'blogs' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Expert Blogs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      {activeTab === 'news' && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
                <p className="text-xl text-gray-600">
                  Stay current with regulatory changes and market developments affecting Nigerian businesses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((news) => (
                  <article key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="relative h-48">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {news.excerpt}
                      </p>
                      <button className="text-green-600 font-semibold hover:text-green-800 whitespace-nowrap">
                        Read More →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {activeTab === 'case-studies' && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p className="text-xl text-gray-600">
                  Real-world examples of how we've helped Nigerian businesses achieve their financial goals
                </p>
              </div>

              <div className="space-y-12">
                {caseStudies.map((study, index) => (
                  <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                    <div className="lg:w-1/2">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-80 object-cover object-top rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="text-sm text-green-600 font-semibold mb-2">{study.client}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                            <p className="text-gray-600 font-medium">{study.result}</p>
                          </div>
                        </div>
                        
                        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                          View Full Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blogs Section */}
      {activeTab === 'blogs' && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Insights</h2>
                <p className="text-xl text-gray-600">
                  Deep-dive analysis and expert opinions from our leadership team on key financial topics
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <article key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="relative h-48">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{blog.date}</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-500">By </span>
                          <span className="font-semibold text-gray-900">{blog.author}</span>
                        </div>
                        <Link 
                          href={`/insights/blog/${blog.slug}`}
                          className="text-green-600 font-semibold hover:text-green-800 whitespace-nowrap"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Subscription */}
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for the latest insights, market updates, and expert analysis
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                required
              />
              <button 
                type="submit"
                className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Expert Financial Guidance?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is ready to help you navigate complex financial challenges and opportunities
            </p>
            <Link href="/contact">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
