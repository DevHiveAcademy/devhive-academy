
import ContactForm from '@/components/contact/ContactForm';
import SocialMediaPresence from '@/components/contact/SocialMediaPresence';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="max-w-3xl mx-auto text-lg text-blue-100">
              We're here to answer your questions and help you begin your journey in tech.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Find Us</h2>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
                {/* Updated Google Map Embed for Mbarara, Uganda */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.149126242526!2d30.648220626025157!3d-0.6167799681721185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d971c8ce9e5c11%3A0xee6d56e43a75e32e!2sMbarara%2C%20Uganda!5e0!3m2!1sen!2sus!4v1701789012345!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Software Dev Academy Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        
        <SocialMediaPresence />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
