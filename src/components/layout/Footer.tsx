
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Software Dev Academy</h3>
            <p className="text-gray-300 mb-4">
              Empowering the next generation of innovators in AI & Software Development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">Courses</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">Artificial Intelligence</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">Machine Learning</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">Python Programming</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">Full-Stack Development</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">Mobile App Development</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">123 Tech Street, Innovation City, IC 10101</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+256 789231327</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@softwaredevacademy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-300">
            &copy; {currentYear} Software Dev Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
