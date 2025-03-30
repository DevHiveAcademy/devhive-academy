
import { useState } from 'react';
import CourseCard, { CourseProps } from './CourseCard';

const coursesData: CourseProps[] = [
  {
    id: 1,
    title: "Artificial Intelligence Fundamentals",
    description: "Learn the core concepts and applications of artificial intelligence in modern technology.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    level: "Beginner to Intermediate",
    students: 1245,
    price: "$1,499"
  },
  {
    id: 2,
    title: "Machine Learning with Python",
    description: "Implement machine learning algorithms for data analysis and predictive modeling.",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    level: "Intermediate to Advanced",
    students: 987,
    price: "$1,299"
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    description: "Master front-end and back-end technologies to build complete web applications.",
    duration: "16 weeks",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    level: "Intermediate",
    students: 1532,
    price: "$1,799"
  },
  {
    id: 4,
    title: "Python Programming Essentials",
    description: "Build a solid foundation in Python programming with practical exercises and projects.",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    level: "Beginner",
    students: 2156,
    price: "$899"
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Create cross-platform mobile applications using React Native and related technologies.",
    duration: "14 weeks",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    level: "Intermediate",
    students: 843,
    price: "$1,599"
  },
  {
    id: 6,
    title: "Data Science and Analytics",
    description: "Learn to extract insights from data using statistical analysis and visualization techniques.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    level: "Intermediate to Advanced",
    students: 765,
    price: "$1,399"
  }
];

const CoursesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('');

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel ? course.level.includes(filterLevel) : true;
    
    return matchesSearch && matchesLevel;
  });

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:w-2/3">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="w-full md:w-1/3">
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesList;
