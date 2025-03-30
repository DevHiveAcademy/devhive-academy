
import CoursesList from '@/components/courses/CoursesList';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Courses</h1>
            <p className="max-w-3xl mx-auto text-lg text-blue-100">
              Explore our comprehensive range of courses designed to equip you with the skills needed for success in the tech industry.
            </p>
          </div>
        </div>
        <CoursesList />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
