import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';
import { useCourses } from '@/hooks/useCourses';
import { Skeleton } from '@/components/ui/skeleton';

const CoursesList = () => {
  const { data: courses, isLoading, error } = useCourses();

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-600">Failed to load courses. Please try again later.</p>
        </div>
      </section>
    );
  }

  if (!courses || courses.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">No courses available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link key={course.id} to={`/courses/${course.id}`} className="block hover:no-underline">
              <CourseCard course={{
                id: course.id,
                title: course.title,
                description: course.description,
                duration: course.duration,
                image: course.image || '',
                level: course.level,
                instructor: course.instructor_names?.[0] || 'TBD',
                price: `$${course.price.toLocaleString()}`,
                students: course.students_count
              }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
