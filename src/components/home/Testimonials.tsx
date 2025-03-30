
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "The AI course at Software Dev Academy completely changed my career trajectory. The hands-on approach and expert instructors gave me the skills and confidence to transition into a machine learning engineer role.",
      author: "Sarah Johnson",
      role: "Machine Learning Engineer",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      content: "As someone with no prior coding experience, I was amazed at how quickly I was able to build real applications. The curriculum is well-structured and the mentorship was invaluable to my learning journey.",
      author: "Michael Chen",
      role: "Full-Stack Developer",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      content: "The project-based learning approach prepared me for real-world challenges. Within three months of completing the course, I landed a job at a leading tech company and have been excelling ever since.",
      author: "Alex Rodriguez",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      content: "The instructors don't just teach you how to code, they teach you how to think like a developer. This mindset shift was the most valuable part of my education at Software Dev Academy.",
      author: "Emma Thompson",
      role: "Data Scientist",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Hear from our students who transformed their careers through our innovative programs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white text-gray-800 rounded-xl p-8 shadow-xl md:p-10">
            <div className="text-primary-600 mb-6">
              <Quote size={40} />
            </div>
            <p className="text-lg md:text-xl mb-8">{testimonials[currentIndex].content}</p>
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].author} 
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={goToPrevious}
              className="bg-primary-800 hover:bg-primary-900 rounded-full p-2 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`block h-2 w-2 rounded-full ${
                    currentIndex === index ? 'bg-white' : 'bg-primary-400'
                  }`}
                ></span>
              ))}
            </div>
            <button 
              onClick={goToNext}
              className="bg-primary-800 hover:bg-primary-900 rounded-full p-2 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
