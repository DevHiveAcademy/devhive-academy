import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleSignInButton from '@/components/auth/GoogleSignInButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FinalCTA = () => {
  const navigate = useNavigate();
  const ref = useScrollReveal();

  return (
    <section className="bg-primary/5 border-y border-border">
      <div ref={ref} className="reveal-section max-w-2xl mx-auto px-6 py-20 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-muted-foreground">
          Join hundreds of students already building their future in tech.
        </p>
        <div className="max-w-xs mx-auto space-y-3">
          <GoogleSignInButton />
          <Button
            variant="ghost"
            className="text-muted-foreground gap-2"
            onClick={() => navigate('/courses')}
          >
            Or explore courses first <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
