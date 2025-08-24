
'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20professional%20Nigerian%20business%20office%20with%20glass%20buildings%20and%20corporate%20atmosphere%2C%20elegant%20architecture%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20lighting%2C%20contemporary%20design%20elements%2C%20Lagos%20business%20district%20skyline%20in%20background&width=1920&height=1080&seq=about-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          About <span className="text-green-400">Oxilion Limited</span>
        </h1>
        <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Empowering Nigerian businesses with tailored financial solutions, integrity-driven consulting, and innovative strategies for sustainable growth and success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#mission" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
            Our Mission
          </a>
          <a href="#values" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
            Our Values
          </a>
        </div>
      </div>
    </section>
  );
}
