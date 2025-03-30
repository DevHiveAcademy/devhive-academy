
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CoursesList = () => {
  const courses = [
    {
      id: 1,
      title: "Artificial Intelligence Fundamentals",
      description: "Learn the core concepts and applications of artificial intelligence in modern technology.",
      duration: "12 weeks",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      level: "Beginner to Intermediate",
      instructor: "Dr. Sarah Chen",
      price: "$1,299",
      students: 324
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      description: "Master front-end and back-end technologies to build complete web applications.",
      duration: "16 weeks",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      level: "Intermediate",
      instructor: "James Park",
      price: "$1,499",
      students: 256
    },
    {
      id: 3,
      title: "Machine Learning with Python",
      description: "Implement machine learning algorithms for data analysis and predictive modeling.",
      duration: "10 weeks",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      level: "Intermediate to Advanced",
      instructor: "Dr. Alex Thompson",
      price: "$1,199",
      students: 198
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build cross-platform mobile applications for iOS and Android using React Native.",
      duration: "14 weeks",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      level: "Intermediate",
      instructor: "Emma Wilson",
      price: "$1,399",
      students: 215
    },
    {
      id: 5,
      title: "Data Science and Analytics",
      description: "Learn to extract insights from complex datasets using statistical methods and visualization tools.",
      duration: "12 weeks",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      level: "Intermediate to Advanced",
      instructor: "Michael Rodriguez",
      price: "$1,299",
      students: 176
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      description: "Master the essentials of network security, threat detection, and security best practices.",
      duration: "10 weeks",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      level: "Beginner to Intermediate",
      instructor: "Linda Garcia",
      price: "$1,199",
      students: 145
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link key={course.id} to={`/courses/${course.id}`} className="block hover:no-underline">
              <CourseCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
