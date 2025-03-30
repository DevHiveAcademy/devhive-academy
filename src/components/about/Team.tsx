
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Emily Chen",
      role: "Founder & AI Program Director",
      bio: "Former AI research lead at Google with over 15 years of experience in machine learning and artificial intelligence.",
      image: "https://randomuser.me/api/portraits/women/34.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Rodriguez",
      role: "Software Development Director",
      bio: "Tech industry veteran with experience at Microsoft and Amazon, specialized in full-stack development and architecture.",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Maya Williams",
      role: "Data Science Lead",
      bio: "PhD in Computer Science with a focus on big data analytics and 10+ years of industry experience in data-driven solutions.",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "James Kim",
      role: "Mobile Development Instructor",
      bio: "Mobile app entrepreneur who has built and sold multiple successful applications with millions of downloads.",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Career Services Director",
      bio: "Dedicated to connecting students with industry opportunities and helping them navigate their tech career journey.",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Thompson",
      role: "Web Development Instructor",
      bio: "Full-stack developer with expertise in modern JavaScript frameworks and cloud architecture.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Expert Instructors</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our instructors bring real-world experience and deep expertise to the classroom, 
            ensuring you learn directly from industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.linkedin} className="text-gray-500 hover:text-primary-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.twitter} className="text-gray-500 hover:text-primary-600 transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
