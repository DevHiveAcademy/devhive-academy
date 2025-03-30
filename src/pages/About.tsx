
import AboutHero from '@/components/about/AboutHero';
import Team from '@/components/about/Team';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default About;
