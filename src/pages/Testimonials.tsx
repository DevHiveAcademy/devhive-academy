
import TestimonialsList from '@/components/testimonials/TestimonialsList';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h1>
            <p className="max-w-3xl mx-auto text-lg text-blue-100">
              Read what our graduates have to say about their experience with Software Dev Academy and how it transformed their careers.
            </p>
          </div>
        </div>
        <TestimonialsList />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
