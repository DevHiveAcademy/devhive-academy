import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Trophy, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCourse } from '@/hooks/useCourses';
import { useEnrollInCourse, useIsEnrolled } from '@/hooks/useCourseEnrollment';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';

const CourseDetail = () => {
  const { id } = useParams();
  const { data: course, isLoading, error } = useCourse(id || '');
  const { mutate: enroll, isPending: isEnrolling } = useEnrollInCourse();
  const { data: isEnrolled } = useIsEnrolled(id || '');
  const { toast } = useToast();

  const handleEnroll = () => {
    if (!id) return;
    
    enroll(id, {
      onSuccess: () => {
        toast({
          title: "Enrollment Successful!",
          description: `You have been enrolled in ${course?.title}`,
        });
      },
      onError: (error: Error) => {
        toast({
          title: "Enrollment Failed",
          description: error.message,
          variant: "destructive"
        });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Skeleton className="h-8 w-48 mb-6 bg-white/20" />
              <Skeleton className="h-10 w-2/3 mb-4 bg-white/20" />
              <Skeleton className="h-6 w-full max-w-3xl mb-8 bg-white/20" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course not found</h1>
            <Button asChild>
              <Link to="/courses">Back to Courses</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedStartDate = course.start_date 
    ? new Date(course.start_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'TBD';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-primary-800" asChild>
                <Link to="/courses">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Courses
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-blue-100 mb-8">{course.description}</p>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <span className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Clock className="mr-2 h-5 w-5" /> {course.duration}
              </span>
              <span className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Calendar className="mr-2 h-5 w-5" /> Starts {formattedStartDate}
              </span>
              <span className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Users className="mr-2 h-5 w-5" /> {course.students_count}+ students
              </span>
              <span className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Trophy className="mr-2 h-5 w-5" /> {course.level}
              </span>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-primary-700 hover:bg-blue-50"
              onClick={handleEnroll}
              disabled={isEnrolling || isEnrolled}
            >
              {isEnrolled 
                ? 'Already Enrolled' 
                : isEnrolling 
                  ? 'Enrolling...' 
                  : `Enroll Now - $${course.price.toLocaleString()}`}
            </Button>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Course Details */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Course Overview</h2>
                  <p className="text-gray-700 mb-8 whitespace-pre-line">{course.full_description || course.description}</p>
                  
                  {course.modules && course.modules.length > 0 && (
                    <>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">What You'll Learn</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {course.modules.map((module, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-primary-50 p-1 rounded-full mr-3 mt-1">
                              <div className="bg-primary-600 rounded-full w-4 h-4"></div>
                            </div>
                            <span className="text-gray-700">{module}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {course.instructor_names && course.instructor_names.length > 0 && (
                    <>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Course Instructors</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {course.instructor_names.map((instructor, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                              <img 
                                src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index + 1}.jpg`} 
                                alt={instructor} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{instructor}</h4>
                              <p className="text-gray-600 text-sm">Senior Instructor</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Right Column - Enrollment Card */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={course.image || '/placeholder.svg'} 
                      alt={course.title} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">${course.price.toLocaleString()}</div>
                  <p className="text-gray-600 mb-6">Enroll today and start your journey</p>
                  <Button 
                    className="w-full mb-4"
                    onClick={handleEnroll}
                    disabled={isEnrolling || isEnrolled}
                  >
                    {isEnrolled 
                      ? 'Already Enrolled' 
                      : isEnrolling 
                        ? 'Enrolling...' 
                        : 'Enroll Now'}
                  </Button>
                  <Button variant="outline" className="w-full mb-6">Download Syllabus</Button>
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">This course includes:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <div className="bg-green-500 rounded-full w-2 h-2"></div>
                        </div>
                        <span>Live online lectures</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <div className="bg-green-500 rounded-full w-2 h-2"></div>
                        </div>
                        <span>Hands-on projects</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <div className="bg-green-500 rounded-full w-2 h-2"></div>
                        </div>
                        <span>24/7 support</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <div className="bg-green-500 rounded-full w-2 h-2"></div>
                        </div>
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <div className="bg-green-500 rounded-full w-2 h-2"></div>
                        </div>
                        <span>Job placement assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
