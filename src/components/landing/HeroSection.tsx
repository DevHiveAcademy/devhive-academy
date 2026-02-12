import { useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleSignInButton from '@/components/auth/GoogleSignInButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroStudent from '@/assets/hero-student.png';

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
      <div className="absolute inset-0 -z-10 hero-gradient" />

      <div ref={ref} className="reveal-section max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Launch Your Career in{' '}
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  AI & Software Development
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Go from beginner to job-ready with hands-on projects, expert mentors, and a supportive community of innovators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <GoogleSignInButton />
              <Button
                size="lg"
                onClick={() => navigate('/courses')}
                className="gap-2 bg-gradient-to-r from-primary via-primary to-blue-500 hover:opacity-90 text-primary-foreground border-0 shadow-lg shadow-primary/25"
              >
                Browse Courses
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right column — Coursera-style colorful blobs behind student */}
          <div className="hidden md:flex items-center justify-center relative h-[420px]">
            {/* Large blue circle */}
            <div className="absolute top-0 right-4 w-[340px] h-[340px] rounded-full bg-primary/80 animate-spring-ring-outer" />
            {/* Pink blob */}
            <div className="absolute top-6 right-[180px] w-[200px] h-[260px] rounded-[60%_40%_50%_50%] bg-pink-300/60 dark:bg-pink-400/30 animate-spring-ring-mid" />
            {/* Warm peach accent */}
            <div className="absolute bottom-4 right-[60px] w-[180px] h-[160px] rounded-[40%_60%_50%_50%] bg-orange-200/50 dark:bg-orange-400/20 animate-spring-ring-inner" />
            {/* Student image in circle frame */}
            <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl animate-spring-icon">
              <img
                src={heroStudent}
                alt="Student ready to launch their tech career"
                className="w-full h-full object-cover"
              />
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
