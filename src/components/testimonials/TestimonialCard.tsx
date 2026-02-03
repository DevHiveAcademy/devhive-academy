
import { Star } from 'lucide-react';

export interface TestimonialProps {
  id: string | number;
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating?: number;
  company?: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {testimonial.rating && (
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < testimonial.rating! ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      )}
      
      <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
      
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.author} 
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
          <p className="text-gray-600">
            {testimonial.role}
            {testimonial.company && ` at ${testimonial.company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
