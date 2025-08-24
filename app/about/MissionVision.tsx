'use client';

export default function MissionVision() {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Purpose & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving excellence in financial consulting with clear purpose and unwavering commitment to our clients' success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-target-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mission Statement</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide tailored, high-quality financial solutions guided by integrity, innovation, and excellence, empowering clients to achieve their goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-eye-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision Statement</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the premier leader in financial services, delivering innovative solutions and unwavering commitment to client success, shaping a prosperous future for all.
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20Nigerian%20business%20team%20in%20modern%20office%20environment%20discussing%20financial%20strategies%2C%20diverse%20professionals%20in%20suits%20around%20conference%20table%2C%20charts%20and%20documents%20visible%2C%20natural%20lighting%2C%20corporate%20atmosphere%2C%20teamwork%20and%20collaboration%20focus&width=600&height=800&seq=mission-vision&orientation=portrait"
              alt="Our Mission and Vision"
              className="rounded-2xl shadow-lg w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-green-600/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}