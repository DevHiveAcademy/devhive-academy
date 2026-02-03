import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useFeaturedTestimonials } from '@/hooks/useTestimonials';
import { Skeleton } from '@/components/ui/skeleton';

const Testimonials = () => {
  const { data: testimonials, isLoading } = useFeaturedTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (!testimonials) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (!testimonials) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-xl md:p-10">
              <Skeleton className="h-8 w-8 mb-6" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-3/4 mb-8" />
              <div className="flex items-center">
                <Skeleton className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

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
            <p className="text-lg md:text-xl mb-8">{currentTestimonial.content}</p>
            <div className="flex items-center">
              <img 
                src={currentTestimonial.avatar || `https://randomuser.me/api/portraits/men/${currentIndex + 1}.jpg`} 
                alt={currentTestimonial.author} 
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-lg">{currentTestimonial.author}</h4>
                <p className="text-gray-600">{currentTestimonial.role}</p>
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
