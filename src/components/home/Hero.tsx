
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Empowering the Next Generation of Innovators in AI & Software Development
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Gain cutting-edge skills in artificial intelligence, machine learning, and software development from industry experts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-blue-50" asChild>
                <Link to="/contact">
                  Join Software Dev Academy Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-primary-800" asChild>
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Students collaborating on software development" 
              className="rounded-lg shadow-2xl animate-fade-in-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
