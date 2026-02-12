import { Link } from 'react-router-dom';

const LandingFooter = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Software Dev Academy. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
