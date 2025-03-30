
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  tags?: string[];
}

const BlogCard = ({ post }: { post: BlogPostProps }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-white bg-primary-600 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
          <Link 
            to={`/blog/${post.id}`} 
            className="text-primary-600 font-medium hover:text-primary-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
