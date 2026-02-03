import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useFeaturedCourses } from '@/hooks/useCourses';
import { Skeleton } from '@/components/ui/skeleton';

const FeaturedCourses = () => {
  const { data: courses, isLoading, error } = useFeaturedCourses();

  if (isLoading) {
    return (
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Courses</h2>
            <div className="h-1 w-20 bg-primary-600 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !courses || courses.length === 0) {
    // Fallback to static data if no courses in DB
    const fallbackCourses = [
      {
        id: '1',
        title: "Artificial Intelligence Fundamentals",
        description: "Learn the core concepts and applications of artificial intelligence in modern technology.",
        duration: "12 weeks",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        level: "Beginner to Intermediate"
      },
      {
        id: '2',
        title: "Full-Stack Web Development",
        description: "Master front-end and back-end technologies to build complete web applications.",
        duration: "16 weeks",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        level: "Intermediate"
      },
      {
        id: '3',
        title: "Machine Learning with Python",
        description: "Implement machine learning algorithms for data analysis and predictive modeling.",
        duration: "10 weeks",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        level: "Intermediate to Advanced"
      }
    ];

    return (
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Courses</h2>
            <div className="h-1 w-20 bg-primary-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Explore our most popular programs designed to help you master in-demand skills in AI and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {fallbackCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/courses/${course.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Courses</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore our most popular programs designed to help you master in-demand skills in AI and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image || '/placeholder.svg'} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/courses/${course.id}`}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
