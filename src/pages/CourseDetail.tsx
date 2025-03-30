
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Trophy, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CourseDetail = () => {
  const { id } = useParams();
  
  // In a real application, this would fetch course data from an API
  // For now, we'll use mock data
  const courseData = {
    1: {
      title: "Artificial Intelligence Fundamentals",
      description: "Learn the core concepts and applications of artificial intelligence in modern technology. This comprehensive course covers machine learning algorithms, neural networks, and practical AI implementation.",
      fullDescription: "Artificial Intelligence is revolutionizing industries across the globe. In this course, you'll gain a solid foundation in AI principles and techniques that drive innovation. Through hands-on projects and expert-led sessions, you'll master the fundamentals of machine learning, neural networks, natural language processing, and computer vision.\n\nOur curriculum is designed by industry experts to ensure you acquire both theoretical knowledge and practical skills that are highly sought after in today's tech landscape. By the end of this course, you'll be able to develop AI solutions for real-world problems and position yourself at the forefront of this rapidly evolving field.",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      enrollmentFee: "$1,299",
      startDate: "January 15, 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      instructors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],
      students: 324,
      modules: [
        "Introduction to AI and Machine Learning",
        "Neural Networks and Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "AI Ethics and Responsible Implementation",
        "Capstone Project"
      ]
    },
    2: {
      title: "Full-Stack Web Development",
      description: "Master front-end and back-end technologies to build complete web applications.",
      fullDescription: "This intensive program will transform you into a proficient full-stack developer capable of building dynamic, responsive web applications from the ground up. The curriculum covers both front-end and back-end development, giving you a comprehensive understanding of the entire web development process.\n\nYou'll learn modern JavaScript frameworks, server-side programming, database management, and deployment strategies. Through collaborative projects that simulate real-world development environments, you'll build a portfolio that demonstrates your abilities to potential employers. Our instructors, all experienced developers from leading tech companies, will guide you through complex concepts and provide personalized feedback on your code.",
      duration: "16 weeks",
      level: "Intermediate",
      enrollmentFee: "$1,499",
      startDate: "February 1, 2024",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      instructors: ["Emma Wilson", "James Park"],
      students: 256,
      modules: [
        "HTML, CSS, and Responsive Design",
        "JavaScript Fundamentals and Advanced Concepts",
        "Front-end Frameworks (React)",
        "Back-end Development with Node.js",
        "Database Design and Management",
        "API Development",
        "Authentication and Security",
        "Deployment and DevOps Basics",
        "Final Project"
      ]
    },
    3: {
      title: "Machine Learning with Python",
      description: "Implement machine learning algorithms for data analysis and predictive modeling.",
      fullDescription: "Machine Learning is at the heart of modern data science and artificial intelligence. This course provides a deep dive into ML algorithms and their implementation using Python. You'll develop the skills to analyze complex datasets, extract meaningful insights, and build predictive models that solve real business problems.\n\nStarting with the fundamentals of Python programming for data science, the course progresses through supervised and unsupervised learning techniques, model evaluation, and deployment. You'll work with libraries such as NumPy, Pandas, Scikit-learn, and TensorFlow to implement various algorithms and understand their mathematical foundations. By completing this course, you'll be equipped to leverage machine learning for data-driven decision making across industries.",
      duration: "10 weeks",
      level: "Intermediate to Advanced",
      enrollmentFee: "$1,199",
      startDate: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      instructors: ["Dr. Alex Thompson", "Linda Garcia"],
      students: 198,
      modules: [
        "Python for Data Science",
        "Data Preprocessing and Visualization",
        "Supervised Learning Algorithms",
        "Unsupervised Learning",
        "Deep Learning Fundamentals",
        "Model Evaluation and Improvement",
        "Feature Engineering",
        "Machine Learning Project"
      ]
    }
  };
  
  const course = courseData[id];
  
  if (!course) {
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
                <Calendar className="mr-2 h-5 w-5" /> Starts {course.startDate}
              </span>
              <span className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Users className="mr-2 h-5 w-5" /> {course.students}+ students
              </span>
              <span className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Trophy className="mr-2 h-5 w-5" /> {course.level}
              </span>
            </div>
            <Button size="lg" className="bg-white text-primary-700 hover:bg-blue-50">
              Enroll Now - {course.enrollmentFee}
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
                  <p className="text-gray-700 mb-8 whitespace-pre-line">{course.fullDescription}</p>
                  
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
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Course Instructors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {course.instructors.map((instructor, index) => (
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
                </div>
              </div>
              
              {/* Right Column - Enrollment Card */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{course.enrollmentFee}</div>
                  <p className="text-gray-600 mb-6">Enroll today and start your journey</p>
                  <Button className="w-full mb-4">Enroll Now</Button>
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
