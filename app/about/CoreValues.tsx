'use client';

export default function CoreValues() {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Integrity',
      description: 'We uphold the highest ethical standards, ensuring transparency and honesty in all interactions to foster trust with clients and stakeholders.'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking approaches to develop groundbreaking financial solutions that anticipate industry trends.'
    },
    {
      icon: 'ri-star-line',
      title: 'Excellence',
      description: 'We are committed to delivering superior service and consistently exceeding expectations to drive success and client satisfaction.'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaboration',
      description: 'We cultivate strong partnerships, leveraging collective expertise and diverse perspectives to achieve mutual goals.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Accountability',
      description: 'We take full ownership of our actions and commitments, maintaining HIGH performance standards.'
    }
  ];

  return (
    <section id="values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The fundamental principles that guide our decisions, shape our culture, and drive our commitment to excellence in everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors">
                <i className={`${value.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20Nigerian%20corporate%20office%20interior%20with%20professional%20staff%20working%20collaboratively%2C%20diverse%20team%20of%20business%20professionals%2C%20contemporary%20workspace%20design%2C%20natural%20lighting%2C%20teamwork%20and%20values%20representation%2C%20corporate%20culture%20atmosphere&width=1200&height=600&seq=core-values&orientation=landscape"
            alt="Our Core Values in Action"
            className="w-full h-96 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-600/60 flex items-center">
            <div className="max-w-2xl mx-auto px-6 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Values-Driven Excellence</h3>
              <p className="text-xl opacity-90">
                Our core values aren't just words on a page – they're the foundation of every decision we make and every relationship we build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
