
import { useState } from 'react';
import BlogCard, { BlogPostProps } from './BlogCard';
import { Search } from 'lucide-react';

const blogPostsData: BlogPostProps[] = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is reshaping the landscape of software development and what it means for developers.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Dr. Emily Chen",
      avatar: "https://randomuser.me/api/portraits/women/34.jpg"
    },
    date: "April 15, 2023",
    category: "Artificial Intelligence"
  },
  {
    id: 2,
    title: "Getting Started with Python for Data Science",
    excerpt: "A beginner's guide to using Python for data analysis, visualization, and building machine learning models.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Michael Thompson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    date: "March 28, 2023",
    category: "Data Science"
  },
  {
    id: 3,
    title: "5 Essential Web Development Frameworks in 2023",
    excerpt: "Discover the most popular and powerful frameworks that are driving modern web development forward.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "David Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    date: "February 12, 2023",
    category: "Web Development"
  },
  {
    id: 4,
    title: "Understanding Machine Learning Algorithms",
    excerpt: "A deep dive into the most common machine learning algorithms and how to apply them to real-world problems.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Dr. Maya Williams",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    date: "January 30, 2023",
    category: "Machine Learning"
  },
  {
    id: 5,
    title: "Building Cross-Platform Mobile Apps: A Comprehensive Guide",
    excerpt: "Learn how to create mobile applications that work seamlessly across iOS and Android platforms.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "James Kim",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    date: "December 15, 2022",
    category: "Mobile Development"
  },
  {
    id: 6,
    title: "The Role of Ethics in AI Development",
    excerpt: "Examining the ethical considerations and responsibilities in developing artificial intelligence systems.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/54.jpg"
    },
    date: "November 5, 2022",
    category: "AI Ethics"
  }
];

const BlogsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(blogPostsData.map(post => post.category))];

  const filteredPosts = blogPostsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="w-full md:w-1/3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or category selection</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsList;
