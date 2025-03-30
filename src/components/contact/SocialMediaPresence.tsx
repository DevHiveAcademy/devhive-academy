
import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

type SocialPlatform = {
  name: string;
  icon: React.ReactNode;
  url: string;
  username: string;
  color: string;
  description: string;
};

const SocialMediaPresence = () => {
  const socialPlatforms: SocialPlatform[] = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/company/softwaredevacademy',
      username: '@softwaredevacademy',
      color: 'bg-[#0077B5]',
      description: 'Industry insights, job opportunities, and professional development resources'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://twitter.com/softwaredevacad',
      username: '@softwaredevacad',
      color: 'bg-[#1DA1F2]',
      description: 'Tech news, coding tips, and conversations with our community'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      url: 'https://facebook.com/softwaredevacademy',
      username: 'Software Dev Academy',
      color: 'bg-[#1877F2]',
      description: 'Events, student success stories, and community updates'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://instagram.com/softwaredevacademy',
      username: '@softwaredevacademy',
      color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]',
      description: 'Behind-the-scenes looks at our academy, student projects, and tech culture'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Connect With Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Follow Software Dev Academy on social media for the latest updates, tech insights, and learning resources.
          </p>
        </div>

        <div className="mt-8">
          <p className="text-center text-lg font-medium text-gray-700 mb-6">
            "Empowering the next generation of AI & software developers. Learn, code, and innovate with us! 🚀 #TechEducation #AI #SoftwareDevAcademy"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {socialPlatforms.map((platform) => (
              <div key={platform.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${platform.color} h-3`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 ${platform.color} rounded-full text-white mr-3`}>
                      {platform.icon}
                    </div>
                    <h3 className="font-bold text-lg">{platform.name}</h3>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">{platform.username}</p>
                  <p className="text-gray-500 text-sm mb-4">{platform.description}</p>
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block mt-2 text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Follow us on {platform.name}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Content Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="font-bold text-lg text-primary-600 mb-2">Mondays</p>
                <p className="text-gray-700">Industry insights on AI and software development</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="font-bold text-lg text-primary-600 mb-2">Wednesdays</p>
                <p className="text-gray-700">Student testimonials and project showcases</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="font-bold text-lg text-primary-600 mb-2">Fridays</p>
                <p className="text-gray-700">Course highlights, tips, and learning resources</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Hashtags</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">#AI</span>
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">#SoftwareDevelopment</span>
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">#LearnToCode</span>
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">#TechEducation</span>
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">#SoftwareDevAcademy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPresence;
