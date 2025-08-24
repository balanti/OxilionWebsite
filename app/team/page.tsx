
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alh. Dalhatu Abubakar",
      position: "Chairman",
      image: "https://readdy.ai/api/search-image?query=distinguished%20Nigerian%20business%20chairman%20in%20formal%20traditional%20attire%2C%20professional%20headshot%20of%20elderly%20respected%20business%20leader%2C%20office%20background%20with%20Nigerian%20cultural%20elements%2C%20confident%20and%20authoritative%20presence&width=400&height=500&seq=chairman-dalhatu&orientation=portrait",
      bio: "Alh. Dalhatu Abubakar is a visionary leader with over 30 years of extensive experience in business development, procurement, strategy, and investment promotion. He currently serves as the President of the Coalition of Northern States Chambers of Commerce, Industry, Mines & Agriculture, a role that underscores his dedication to economic development and trade facilitation. Over the years, he has held numerous leadership positions, including Chairman/CEO of multiple ventures spanning diverse industries such as automobile sales, real estate, and finance. His contributions extend beyond business, as he actively engages in philanthropy, founding the ALHAMSAD Charity Foundation and ALHAMSAD Specialist Hospital. His commitment to innovation and economic growth has earned him numerous national and international recognitions."
    },
    {
      name: "Mohammed Yakasal",
      position: "Director", 
      image: "https://readdy.ai/api/search-image?query=professional%20Nigerian%20financial%20director%20in%20business%20suit%2C%20middle-aged%20banking%20executive%20headshot%2C%20modern%20office%20environment%2C%20confident%20business%20leader%20with%20glasses%2C%20formal%20corporate%20portrait&width=400&height=500&seq=director-mohammed&orientation=portrait",
      bio: "Mohammed Abdu Yakasal is a distinguished financial expert with over 34 years of experience in commercial and central banking operations. He holds both a Master's and a Bachelor's degree in Business Administration and is an Honorary Senior Member of the Chartered Institute of Bankers of Nigeria. His career trajectory spans several top-tier financial institutions, including Citibank plc and Unity Bank, where he rose to the position of Deputy General Manager. He later transitioned to the Central Bank of Nigeria (CBN), where he held various roles, including Special Assistant to the Governor. He was a Director and chairman Board Credit Committee at the Federal Mortgage Bank of Nigeria. He is currently a Director at National Trucks Manufacturers Ltd. (NTM) and an Advisory Board Member of Access Heart Foundation. Renowned for his expertise in financial strategy, credit management, and policy implementation, he remains a leading voice in the financial sector."
    },
    {
      name: "Sabiu Umar Yola",
      position: "Director",
      image: "https://readdy.ai/api/search-image?query=experienced%20Nigerian%20corporate%20director%20in%20professional%20business%20attire%2C%20senior%20executive%20headshot%2C%20modern%20corporate%20office%20setting%2C%20distinguished%20middle-aged%20business%20professional%2C%20confident%20leadership%20portrait&width=400&height=500&seq=director-sabiu&orientation=portrait",
      bio: "Sabiu Umar Yola is a finance and corporate strategy expert with a career spanning over three decades. He holds a Bachelor's degree in Business Administration (Finance) from Ahmadu Bello University, Zaria, and an MBA from Bayero University, Kano. His extensive experience includes executive roles in banking, financial auditing, and corporate restructuring, having worked with institutions such as Savannah Bank, Highland Bank, Pinnacle Commercial Bank, and Broad Bank. His tenure as Financial Controller and later Executive Director has equipped him with deep insights into financial management, risk assessment, and strategic planning. Known for his analytical acumen and leadership capabilities, he has been instrumental in driving organizational growth and operational efficiency across various sectors."
    },
    {
      name: "Adamu Balanti",
      position: "Director",
      image: "https://readdy.ai/api/search-image?query=professional%20Nigerian%20IT%20and%20finance%20director%20in%20business%20suit%2C%20experienced%20technology%20executive%20headshot%2C%20modern%20corporate%20office%20setting%2C%20confident%20senior%20business%20leader%2C%20formal%20professional%20portrait&width=400&height=500&seq=director-adamu&orientation=portrait",
      bio: "Adamu Balanti is a highly skilled finance, IT, and public administration expert with over 35 years of experience. He holds a Bachelor's degree from Ahmadu Bello University, Zaria, and an MBA from Bayero University, Kano. His expertise spans banking, IT consulting, and financial strategy, with pivotal roles such as General Manager of Information Systems at Dangote Group and Director of Research, Statistics, and IT at the National Insurance Commission (NAICOM). He has played a crucial role in advancing digital transformation in financial institutions and was the National Coordinator of MDRI, an initiative aimed at restructuring Nigeria's insurance industry. A member of multiple professional associations, he continues to drive excellence in business operations and financial technology."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=modern%20professional%20business%20team%20meeting%20in%20Nigerian%20corporate%20boardroom%2C%20diverse%20executives%20around%20conference%20table%2C%20contemporary%20office%20interior%20with%20glass%20walls%20and%20city%20view%2C%20collaborative%20business%20environment&width=1920&height=600&seq=team-hero&orientation=landscape')`
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-green-400">Team</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Meet the experienced leaders driving Oxilion Limited's success in Nigeria's financial landscape
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in finance, banking, and business development across Nigeria's dynamic economy.
            </p>
          </div>

          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover h-96 object-top"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-xl text-blue-600 font-semibold mb-6">{member.position}</p>
                    <p className="text-gray-600 leading-relaxed text-lg">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Collective Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team's combined experience spans key areas of Nigerian business and finance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bank-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Banking & Finance</h3>
              <p className="text-gray-600">65+ years combined experience in Nigerian banking sector</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-organization-chart text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Development</h3>
              <p className="text-gray-600">Proven track record in strategic growth and development</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-government-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Regulatory Expertise</h3>
              <p className="text-gray-600">Deep understanding of Nigerian financial regulations</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Innovation</h3>
              <p className="text-gray-600">Leading innovation in financial services and consulting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.9), rgba(21, 128, 61, 0.9)), url('https://readdy.ai/api/search-image?query=professional%20Nigerian%20business%20handshake%20in%20modern%20office%20environment%2C%20partnership%20and%20collaboration%20concept%2C%20corporate%20meeting%20setting%20with%20natural%20lighting%20and%20professional%20atmosphere&width=1920&height=600&seq=team-cta&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Work with Nigeria's Leading Financial Experts
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Ready to benefit from our team's extensive experience and proven track record in Nigerian business and finance?
          </p>
          <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
