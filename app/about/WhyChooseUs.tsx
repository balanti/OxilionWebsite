'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      number: '15+',
      title: 'Years of Experience',
      description: 'Deep expertise in Nigerian financial markets and regulatory environment.'
    },
    {
      number: '200+',
      title: 'Successful Projects',
      description: 'Proven track record of delivering results across diverse industries.'
    },
    {
      number: '95%',
      title: 'Client Satisfaction',
      description: 'Consistently exceeding expectations with tailored solutions.'
    },
    {
      number: '24/7',
      title: 'Support Available',
      description: 'Round-the-clock assistance when you need it most.'
    }
  ];

  const advantages = [
    {
      icon: 'ri-map-pin-line',
      title: 'Local Expertise',
      description: 'Deep understanding of Nigerian business landscape and regulatory requirements.'
    },
    {
      icon: 'ri-global-line',
      title: 'Global Standards',
      description: 'International best practices adapted for local market conditions.'
    },
    {
      icon: 'ri-user-settings-line',
      title: 'Personalized Approach',
      description: 'Customized solutions designed specifically for your unique business needs.'
    },
    {
      icon: 'ri-award-line',
      title: 'Proven Results',
      description: 'Track record of successful transformations and sustainable growth.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Oxilion Limited?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine local market knowledge with global expertise to deliver exceptional financial consulting services that drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">{reason.number}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Competitive Advantages</h3>
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className={`${advantage.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20Nigerian%20business%20consultants%20in%20modern%20boardroom%20presenting%20financial%20analysis%2C%20diverse%20team%20of%20experts%20with%20charts%20and%20graphs%2C%20contemporary%20office%20setting%2C%20business%20strategy%20discussion%2C%20professional%20atmosphere%20with%20Nigerian%20corporate%20environment&width=600&height=700&seq=why-choose-us&orientation=portrait"
              alt="Why Choose Oxilion Limited"
              className="rounded-2xl shadow-lg w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
