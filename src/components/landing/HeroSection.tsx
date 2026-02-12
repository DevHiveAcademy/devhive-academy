import { useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleSignInButton from '@/components/auth/GoogleSignInButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { icon: GraduationCap, value: '500+', label: 'Students' },
  { icon: BookOpen, value: '20+', label: 'Courses' },
  { icon: Award, value: '95%', label: 'Satisfaction' },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 hero-gradient" />

      <div ref={ref} className="reveal-section max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Launch Your Career in{' '}
                <span className="text-primary">AI & Software Development</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Go from beginner to job-ready with hands-on projects, expert mentors, and a supportive community of innovators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <GoogleSignInButton />
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/courses')}
                className="gap-2"
              >
                Browse Courses
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right column — decorative */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
              <div className="absolute inset-6 rounded-full bg-primary/15" />
              <div className="absolute inset-12 rounded-full bg-primary/20 flex items-center justify-center">
                <GraduationCap className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
