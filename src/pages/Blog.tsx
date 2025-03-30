
import BlogsList from '@/components/blog/BlogsList';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Software Dev Academy Blog</h1>
            <p className="max-w-3xl mx-auto text-lg text-blue-100">
              Insights, tutorials, and news from the world of AI, software development, and tech education.
            </p>
          </div>
        </div>
        <BlogsList />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
