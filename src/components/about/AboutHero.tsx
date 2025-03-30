
import { CheckCircle } from 'lucide-react';

const AboutHero = () => {
  const stats = [
    { value: '5+', label: 'Years of Excellence' },
    { value: '50+', label: 'Expert Instructors' },
    { value: '10,000+', label: 'Graduates' },
    { value: '95%', label: 'Job Placement Rate' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About Software Dev Academy</h1>
            <p className="text-lg mb-8 text-blue-100">
              We are a premier institution dedicated to empowering the next generation of technology leaders through
              immersive, hands-on education in AI and software development.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-blue-300 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p>Comprehensive curriculum designed by industry leaders</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-300 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p>Project-based learning approach with real-world applications</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-300 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p>Small class sizes with personalized mentorship</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-300 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p>Career support and industry connections</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
