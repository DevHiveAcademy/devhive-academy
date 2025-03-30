
import { Brain, Code, Database, Lightbulb, Users } from 'lucide-react';

const Mission = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary-600" />,
      title: 'AI & Machine Learning',
      description: 'Learn cutting-edge artificial intelligence and machine learning techniques from industry experts.'
    },
    {
      icon: <Code className="h-8 w-8 text-primary-600" />,
      title: 'Software Development',
      description: 'Master modern programming languages and development methodologies for real-world applications.'
    },
    {
      icon: <Database className="h-8 w-8 text-primary-600" />,
      title: 'Data Science',
      description: 'Analyze complex datasets and extract valuable insights using advanced analytical techniques.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Collaborative Learning',
      description: 'Work on team projects that simulate real-world development environments and challenges.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary-600" />,
      title: 'Innovation Focus',
      description: 'Develop creative problem-solving skills to address complex technological challenges.'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Mission & Vision</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Software Dev Academy is committed to bridging the gap between theoretical knowledge and practical application in the fields of AI and software development. 
            Our mission is to empower individuals with the skills, knowledge, and confidence needed to succeed in the rapidly evolving tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]"
            >
              <div className="bg-primary-50 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
