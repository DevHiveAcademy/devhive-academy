import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Button } from '@/components/ui/button';

const LandingNav = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-primary font-extrabold text-xl tracking-tight">
          Software Dev Academy
        </span>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/courses')}
            className="text-muted-foreground hover:text-foreground"
          >
            Explore Courses
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default LandingNav;
