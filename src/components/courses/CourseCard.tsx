
import { Clock, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export interface CourseProps {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  students?: number; // Make students optional
  price?: string;
  instructor?: string;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {course.price && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
            {course.price}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-x-4 gap-y-2">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <BarChart className="h-4 w-4 mr-1" />
            <span>{course.level}</span>
          </div>
          {course.students !== undefined && (
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
          )}
        </div>
        
        <div className="flex space-x-3">
          <Button className="flex-1" asChild>
            <Link to={`/courses/${course.id}`}>Enroll Now</Link>
          </Button>
          <Button variant="outline" className="flex-1" asChild>
            <Link to={`/courses/${course.id}`}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
