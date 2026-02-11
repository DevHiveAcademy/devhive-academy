
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, Brain, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleSignInButton from '@/components/auth/GoogleSignInButton';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { supabase } from '@/integrations/supabase/client';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        navigate('/home');
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate('/home');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal top bar */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <span className="text-primary font-bold text-xl tracking-tight">Software Dev Academy</span>
        <ThemeToggle />
      </header>

      {/* Hero */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Master AI &<br />
              <span className="text-primary">Software Development</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto">
              Join a community of innovators learning cutting-edge skills from industry experts.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Code2, label: 'Hands-on Projects' },
              { icon: Brain, label: 'AI & ML Courses' },
              { icon: Users, label: 'Expert Mentors' },
              { icon: Rocket, label: 'Career Growth' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </div>

          {/* Sign in card */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg max-w-sm mx-auto space-y-4">
            <h2 className="text-lg font-semibold text-card-foreground">Get Started</h2>
            <p className="text-sm text-muted-foreground">Sign in to access courses, track your progress, and more.</p>
            <GoogleSignInButton />
          </div>

          {/* Explore link */}
          <Button variant="ghost" className="text-muted-foreground" onClick={() => navigate('/courses')}>
            Explore courses without signing in
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Software Dev Academy. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;
