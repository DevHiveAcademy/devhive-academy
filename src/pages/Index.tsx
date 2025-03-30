
import Hero from '@/components/home/Hero';
import Mission from '@/components/home/Mission';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Testimonials from '@/components/home/Testimonials';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <FeaturedCourses />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
