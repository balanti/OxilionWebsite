
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

const blogPosts = {
  'foreign-exchange-market-dynamics': {
    title: "Understanding Nigeria's Foreign Exchange Market Dynamics",
    author: "Mohammed Yakasal",
    position: "Director, Oxilion Limited", 
    date: "January 12, 2024",
    readTime: "8 min read",
    tags: ["Foreign Exchange", "Risk Management", "Economic Policy"],
    image: "https://readdy.ai/api/search-image?query=Nigerian%20foreign%20exchange%20traders%20monitoring%20currency%20rates%20on%20multiple%20screens%2C%20Central%20Bank%20of%20Nigeria%20building%20in%20background%2C%20professional%20trading%20floor%20environment&width=1200&height=600&seq=blog-forex-hero&orientation=landscape",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">Nigeria's foreign exchange market remains one of the most critical components of the country's financial system, with the Naira's exchange rate serving as a key indicator of economic health and investor confidence.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">The Current Foreign Exchange Landscape</h2>
      <p class="mb-6">The Nigerian foreign exchange market has undergone significant transformations over the past decade. With multiple exchange rate windows and varying policies, businesses operating in Nigeria face unique challenges in managing their foreign currency exposures. The Central Bank of Nigeria (CBN) continues to implement measures aimed at stabilizing the Naira while ensuring adequate foreign exchange liquidity for legitimate business transactions.</p>

      <p class="mb-8">The official exchange rate, managed by the CBN, often differs from parallel market rates, creating arbitrage opportunities but also increasing complexity for businesses planning their operations and investments. This disparity has implications for import-dependent businesses, exporters, and companies with foreign currency obligations.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Key Factors Influencing Exchange Rates</h2>
      <p class="mb-6">Several factors contribute to the volatility and direction of Nigeria's exchange rates:</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Oil Price Dynamics</h3>
      <p class="mb-6">As Nigeria's primary foreign exchange earner, crude oil prices significantly impact the Naira's strength. When global oil prices rise, Nigeria typically experiences increased foreign exchange inflows, strengthening the Naira. Conversely, falling oil prices put pressure on the currency as foreign exchange earnings decline.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Monetary Policy Decisions</h3>
      <p class="mb-6">The CBN's monetary policy committee decisions regarding interest rates, money supply, and foreign exchange policies directly influence exchange rate movements. Recent policy adjustments have aimed at achieving price stability while supporting economic growth.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Political and Economic Stability</h3>
      <p class="mb-8">Investor confidence, driven by political stability and economic reforms, plays a crucial role in determining foreign investment flows and, consequently, exchange rate stability. Government policies regarding ease of doing business, tax reforms, and regulatory changes all impact currency demand and supply.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Risk Management Strategies for Businesses</h2>
      <p class="mb-6">Given the inherent volatility in Nigeria's foreign exchange market, businesses must implement robust risk management strategies:</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Natural Hedging</h3>
      <p class="mb-6">Companies can reduce foreign exchange exposure by matching foreign currency revenues with foreign currency costs. This approach is particularly effective for businesses with both import and export operations or those serving both local and international markets.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Forward Contracts</h3>
      <p class="mb-6">Utilizing forward contracts allows businesses to lock in exchange rates for future transactions, providing certainty in cash flow planning and budget preparation. This is especially valuable for companies with predictable foreign currency obligations.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Diversification Strategies</h3>
      <p class="mb-8">Diversifying revenue streams across multiple currencies and markets can help reduce overall foreign exchange risk. Companies might consider expanding into markets that use currencies correlated with their cost structure or developing local supply chains to reduce import dependence.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Looking Ahead: Future Outlook</h2>
      <p class="mb-6">The Nigerian foreign exchange market is expected to continue evolving as the country implements economic reforms and works toward achieving exchange rate stability. Key developments to monitor include:</p>

      <p class="mb-6">The ongoing efforts to unify exchange rate windows, which could reduce market distortions and improve transparency. Additionally, increased foreign direct investment and improved oil production capacity could strengthen the Naira's fundamentals.</p>

      <p class="mb-8">Businesses should stay informed about regulatory changes and maintain flexible foreign exchange risk management strategies. Regular consultation with experienced financial advisors can help navigate the complexities of Nigeria's evolving foreign exchange landscape.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
      <p class="mb-6">Understanding Nigeria's foreign exchange market dynamics is crucial for business success in the country. While challenges exist, companies that implement appropriate risk management strategies and stay informed about market developments can effectively navigate the foreign exchange environment.</p>

      <p>At Oxilion Limited, we help businesses develop comprehensive foreign exchange risk management strategies tailored to their specific needs and market exposure. Our expertise in Nigerian financial markets enables us to provide practical solutions for managing currency risks while maximizing business opportunities.</p>
    `
  },
  'digital-transformation-banking': {
    title: "Digital Transformation in Nigerian Banking Sector",
    author: "Alh. Dalhatu Abubakar",
    position: "Chairman, Oxilion Limited",
    date: "January 8, 2024",
    readTime: "12 min read",
    tags: ["Digital Banking", "Technology", "Customer Experience"],
    image: "https://readdy.ai/api/search-image?query=Modern%20Nigerian%20bank%20interior%20with%20digital%20displays%2C%20customers%20using%20mobile%20banking%20apps%2C%20high-tech%20banking%20environment%20with%20professional%20staff&width=1200&height=600&seq=blog-digital-hero&orientation=landscape",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">The Nigerian banking sector is experiencing an unprecedented digital transformation, fundamentally changing how financial services are delivered and consumed across the country.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">The Digital Banking Revolution</h2>
      <p class="mb-6">Nigerian banks have embraced digital transformation with remarkable speed and innovation. From mobile banking applications to artificial intelligence-powered customer service, the sector has positioned itself at the forefront of Africa's fintech revolution. This transformation has been accelerated by changing consumer expectations, regulatory support, and the need for financial inclusion.</p>

      <p class="mb-8">The COVID-19 pandemic further accelerated digital adoption, with banks reporting significant increases in digital transaction volumes and mobile banking usage. This shift has created new opportunities for enhanced customer engagement and operational efficiency.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Key Digital Innovation Areas</h2>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Mobile Banking Platforms</h3>
      <p class="mb-6">Nigerian banks have developed sophisticated mobile banking platforms that offer comprehensive banking services. These applications enable customers to perform transactions, pay bills, transfer funds, and access loan services from their smartphones. The user experience has been continuously improved through intuitive interfaces and robust security features.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Artificial Intelligence and Machine Learning</h3>
      <p class="mb-6">Banks are increasingly utilizing AI and ML for various applications including fraud detection, credit scoring, customer service chatbots, and personalized product recommendations. These technologies have enhanced operational efficiency while providing better customer experiences.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Blockchain and Cryptocurrency</h3>
      <p class="mb-8">While regulatory frameworks are still evolving, Nigerian banks are exploring blockchain technology for cross-border payments, trade finance, and smart contracts. Some institutions have begun pilot programs to understand the potential applications of distributed ledger technology.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Customer Experience Enhancement</h2>
      <p class="mb-6">Digital transformation has fundamentally changed customer expectations and experiences in Nigerian banking:</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">24/7 Banking Services</h3>
      <p class="mb-6">Digital platforms have eliminated traditional banking hours, allowing customers to access services round the clock. This has been particularly beneficial for SMEs and individuals who require flexible banking solutions.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Personalized Financial Products</h3>
      <p class="mb-6">Using data analytics, banks can now offer personalized financial products and services based on customer behavior, transaction history, and financial goals. This has improved customer satisfaction and product uptake rates.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Seamless Omnichannel Experience</h3>
      <p class="mb-8">Banks have integrated their digital and physical channels to provide seamless customer experiences. Customers can start transactions on mobile apps and complete them at branches or ATMs, creating a unified banking ecosystem.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Regulatory Compliance and Security</h2>
      <p class="mb-6">Digital transformation in Nigerian banking operates within a robust regulatory framework designed to protect customers and maintain system stability:</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Central Bank Guidelines</h3>
      <p class="mb-6">The Central Bank of Nigeria has issued comprehensive guidelines for digital banking operations, covering areas such as cybersecurity, data protection, and operational risk management. These guidelines ensure that digital innovation occurs within safe and sound banking practices.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Cybersecurity Measures</h3>
      <p class="mb-6">Banks have invested heavily in cybersecurity infrastructure, including multi-factor authentication, encryption, and real-time fraud monitoring systems. These investments protect customer data and maintain trust in digital banking services.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Data Privacy Protection</h3>
      <p class="mb-8">Compliance with data protection regulations has become a priority, with banks implementing comprehensive data governance frameworks to protect customer information while enabling data-driven innovation.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Impact on Financial Inclusion</h2>
      <p class="mb-6">Digital banking has significantly advanced financial inclusion in Nigeria by:</p>

      <p class="mb-6">Reaching previously underserved populations through mobile money services and agent banking networks. Digital platforms have reduced the cost of banking services, making them accessible to low-income segments of the population.</p>

      <p class="mb-8">Enabling micro, small, and medium enterprises (MSMEs) to access financial services through digital lending platforms and simplified account opening processes. This has contributed to economic growth and job creation across the country.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Challenges and Opportunities</h2>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Infrastructure Development</h3>
      <p class="mb-6">While significant progress has been made, challenges remain in areas such as internet connectivity, especially in rural areas. Continued investment in digital infrastructure will be crucial for sustaining the digital banking momentum.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Digital Literacy</h3>
      <p class="mb-6">Banks are investing in customer education programs to improve digital literacy and encourage adoption of digital banking services. These initiatives are essential for maximizing the benefits of digital transformation.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Emerging Technologies</h3>
      <p class="mb-8">Future opportunities lie in emerging technologies such as 5G networks, Internet of Things (IoT), and advanced analytics, which could further revolutionize banking services and customer experiences.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Future Outlook</h2>
      <p class="mb-6">The digital transformation of Nigerian banking is expected to continue accelerating, with several trends shaping the future:</p>

      <p class="mb-6">Open banking initiatives will enable greater collaboration between banks and fintech companies, creating innovative solutions for customers. The integration of banking services with e-commerce and social media platforms will further enhance customer convenience.</p>

      <p class="mb-8">Sustainable finance and ESG (Environmental, Social, and Governance) considerations are becoming increasingly important, with digital platforms enabling better tracking and reporting of sustainable banking initiatives.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
      <p class="mb-6">The digital transformation of Nigeria's banking sector represents a fundamental shift that benefits customers, banks, and the broader economy. While challenges remain, the sector's commitment to innovation and regulatory compliance positions it well for continued growth and development.</p>

      <p>At Oxilion Limited, we work with financial institutions to navigate the complexities of digital transformation while maintaining regulatory compliance and operational excellence. Our expertise helps banks maximize the benefits of digital innovation while managing associated risks effectively.</p>
    `
  },
  'infrastructure-investment-opportunities': {
    title: "Investment Opportunities in Nigeria's Infrastructure Sector",
    author: "Sabiu Umar Yola",
    position: "Director, Oxilion Limited",
    date: "January 3, 2024",
    readTime: "10 min read",
    tags: ["Infrastructure", "Investment", "Economic Development"],
    image: "https://readdy.ai/api/search-image?query=Nigerian%20infrastructure%20development%20with%20modern%20bridges%2C%20roads%20and%20construction%20projects%2C%20investment%20opportunities%20in%20African%20development%2C%20professional%20engineering%20consultants&width=1200&height=600&seq=blog-infrastructure-hero&orientation=landscape",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">Nigeria's infrastructure sector presents compelling investment opportunities as the country works to address significant infrastructure gaps while driving economic growth and development.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">The Infrastructure Investment Landscape</h2>
      <p class="mb-6">Nigeria faces a substantial infrastructure financing gap estimated at over $100 billion across various sectors including transportation, power, telecommunications, and water resources. This gap represents both a challenge and a significant opportunity for investors seeking exposure to one of Africa's largest economies.</p>

      <p class="mb-8">The government has recognized infrastructure development as a critical priority, implementing policies and frameworks to attract private sector participation and international investment. These efforts have created a more favorable environment for infrastructure investments across multiple sectors.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Key Investment Sectors</h2>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Transportation Infrastructure</h3>
      <p class="mb-6">Nigeria's transportation sector offers diverse investment opportunities across roads, railways, airports, and ports. The government's commitment to improving connectivity between major economic centers and rural areas has opened opportunities for public-private partnerships in highway construction and maintenance.</p>

      <p class="mb-6">Railway development projects, including the Lagos-Ibadan and Abuja-Kaduna lines, demonstrate the potential for modern rail infrastructure investments. These projects not only improve passenger transport but also enhance freight movement efficiency, supporting economic growth.</p>

      <p class="mb-6">Aviation infrastructure presents opportunities in airport expansion and modernization, while the maritime sector offers potential in port development and logistics facilities to support Nigeria's growing trade volumes.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Power and Energy Sector</h3>
      <p class="mb-6">Nigeria's power sector represents one of the most significant investment opportunities, with current electricity generation falling well below demand. The sector has been partially privatized, creating opportunities for private investment in generation, transmission, and distribution.</p>

      <p class="mb-6">Renewable energy investments are particularly attractive, with Nigeria's abundant solar and wind resources offering potential for large-scale clean energy projects. The government's commitment to increasing renewable energy capacity creates a supportive policy environment for these investments.</p>

      <p class="mb-6">Gas infrastructure development, including pipelines and processing facilities, presents opportunities to monetize Nigeria's vast natural gas reserves while supporting domestic energy needs and export potential.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Telecommunications and Digital Infrastructure</h3>
      <p class="mb-8">The telecommunications sector continues to offer investment opportunities in network expansion, particularly in rural areas where connectivity remains limited. The rollout of 5G networks and fiber optic infrastructure presents significant potential for investors focused on digital transformation.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Investment Models and Structures</h2>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Public-Private Partnerships (PPPs)</h3>
      <p class="mb-6">PPP models have become increasingly important for infrastructure development in Nigeria. These arrangements allow private investors to participate in infrastructure projects while sharing risks and rewards with government entities. The Infrastructure Concession Regulatory Commission (ICRC) provides oversight and standardization for PPP projects.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Greenfield and Brownfield Investments</h3>
      <p class="mb-6">Both greenfield (new construction) and brownfield (upgrade/expansion) investment opportunities are available across various infrastructure sectors. Greenfield projects often offer higher potential returns but require longer development timelines and carry higher risks.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Infrastructure Funds and REITs</h3>
      <p class="mb-8">Specialized infrastructure funds and Real Estate Investment Trusts (REITs) provide vehicles for portfolio investment in infrastructure assets. These structures offer diversification benefits and professional management of infrastructure investments.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Risk Considerations and Mitigation</h2>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Regulatory and Political Risks</h3>
      <p class="mb-6">Infrastructure investments in Nigeria require careful consideration of regulatory and political risks. Changes in government policies, regulatory frameworks, or political leadership can impact project viability and returns. Investors should conduct thorough due diligence on regulatory environments and maintain relationships with relevant stakeholders.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Currency and Foreign Exchange Risks</h3>
      <p class="mb-6">Foreign investors face currency risks due to Naira volatility and foreign exchange availability. Hedging strategies, including currency swaps and natural hedging through local revenue generation, can help mitigate these risks.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Construction and Operational Risks</h3>
      <p class="mb-8">Infrastructure projects face construction delays, cost overruns, and operational challenges. Comprehensive project management, appropriate insurance coverage, and experienced local partners can help minimize these risks.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Financing and Capital Sources</h2>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Development Finance Institutions</h3>
      <p class="mb-6">International development finance institutions, including the World Bank, African Development Bank, and bilateral development agencies, provide funding and technical assistance for infrastructure projects. These institutions often offer concessional financing terms and risk mitigation instruments.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Commercial Banking and Capital Markets</h3>
      <p class="mb-6">Nigerian commercial banks and capital markets provide local currency financing for infrastructure projects. The development of the local capital market has increased the availability of long-term funding for infrastructure investments.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">International Investor Participation</h3>
      <p class="mb-8">Sovereign wealth funds, pension funds, and private equity firms from around the world are showing increasing interest in African infrastructure investments, including Nigeria. These investors bring capital, expertise, and global best practices to infrastructure development.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Success Factors for Infrastructure Investment</h2>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Strong Local Partnerships</h3>
      <p class="mb-6">Successful infrastructure investments in Nigeria typically involve strong partnerships with local companies that understand the regulatory environment, cultural context, and operational requirements. These partnerships can provide valuable insights and help navigate complex approval processes.</p>

      <h3 class="text-2xl font-semibent text-gray-900 mb-4">Comprehensive Due Diligence</h3>
      <p class="mb-6">Thorough due diligence covering technical, commercial, legal, and environmental aspects is essential for successful infrastructure investments. This includes understanding local regulations, environmental requirements, and community stakeholder concerns.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-4">Sustainable and Inclusive Development</h3>
      <p class="mb-8">Infrastructure investments that prioritize environmental sustainability and social inclusion tend to have better long-term outcomes and stakeholder support. Incorporating ESG principles can enhance project sustainability and attract additional funding sources.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Future Outlook and Emerging Trends</h2>
      <p class="mb-6">The infrastructure investment landscape in Nigeria continues to evolve with several emerging trends:</p>

      <p class="mb-6">Smart infrastructure incorporating digital technologies and IoT solutions is becoming increasingly important. Climate-resilient infrastructure design is gaining priority given Nigeria's vulnerability to climate change impacts.</p>

      <p class="mb-8">Regional integration projects, such as the African Continental Free Trade Area (AfCFTA), are creating opportunities for cross-border infrastructure investments that can benefit from expanded market access.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
      <p class="mb-6">Nigeria's infrastructure sector offers significant investment opportunities for investors seeking exposure to Africa's growth potential. While risks exist, proper due diligence, risk management, and strategic partnerships can help investors achieve attractive returns while contributing to Nigeria's economic development.</p>

      <p>At Oxilion Limited, we provide comprehensive advisory services for infrastructure investments, including project evaluation, risk assessment, and financing structuring. Our deep understanding of Nigeria's infrastructure landscape enables us to help investors identify and execute successful infrastructure investment strategies.</p>
    `
  }
};

export async function generateStaticParams() {
  return [
    { slug: 'foreign-exchange-market-dynamics' },
    { slug: 'digital-transformation-banking' },
    { slug: 'infrastructure-investment-opportunities' },
  ];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${post.image}')`}}>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-6 text-white">
              <div className="mb-4">
                <Link href="/insights" className="text-green-400 hover:text-green-300 transition-colors">
                  ← Back to Insights
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <i className="ri-user-line mr-2"></i>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-2xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{post.author}</h3>
                  <p className="text-green-600 mb-2">{post.position}</p>
                  <p className="text-gray-600">Expert in Nigerian financial markets with extensive experience in banking, investment advisory, and business development.</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                      <i className="ri-twitter-fill"></i>
                    </button>
                    <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                      <i className="ri-linkedin-fill"></i>
                    </button>
                    <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                      <i className="ri-facebook-fill"></i>
                    </button>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(blogPosts)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, relatedPost]) => (
                  <Link key={slug} href={`/insights/blog/${slug}`} className="group">
                    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">{relatedPost.date}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mb-4">By {relatedPost.author}</p>
                        <div className="flex flex-wrap gap-2">
                          {relatedPost.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
