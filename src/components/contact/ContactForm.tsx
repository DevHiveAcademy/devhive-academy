
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting Software Dev Academy. We'll respond to your inquiry shortly.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Contact Information */}
        <div className="bg-primary-700 text-white p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <p className="mb-8 text-blue-100">
            Have questions about our programs? Ready to start your tech journey? 
            Reach out to us through any of the channels below.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Our Location</h4>
                <p className="text-blue-100">123 Tech Street, Innovation City, IC 10101</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Call Us</h4>
                <p className="text-blue-100">+256 789231327</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-blue-100">info@softwaredevacademy.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h4 className="font-semibold mb-3">Hours of Operation</h4>
            <p className="text-blue-100 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-blue-100">Saturday: 10:00 AM - 2:00 PM</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="(XXX) XXX-XXXX"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                <option value="">Select a subject</option>
                <option value="Course Inquiry">Course Inquiry</option>
                <option value="Admission Process">Admission Process</option>
                <option value="Financial Aid">Financial Aid</option>
                <option value="Career Services">Career Services</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
