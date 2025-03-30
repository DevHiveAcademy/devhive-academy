
import ContactForm from '@/components/contact/ContactForm';
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
                {/* Google Map Embed - Replace with actual location */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406234065!2d-122.08427708436976!3d37.42199993994622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc96de8dc419%3A0x35b8ee9bee1b1d0a!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1623184878740!5m2!1sen!2sca" 
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
