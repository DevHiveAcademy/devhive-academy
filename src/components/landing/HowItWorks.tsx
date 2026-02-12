import { UserPlus, Compass, Play } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { icon: UserPlus, title: 'Sign Up', description: 'Create your free account in seconds with Google sign-in.' },
  { icon: Compass, title: 'Choose Your Path', description: 'Browse our catalog and pick courses that match your goals.' },
  { icon: Play, title: 'Start Learning', description: 'Dive into hands-on lessons, projects, and community support.' },
];

const HowItWorks = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-muted/30">
      <div ref={ref} className="reveal-section max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple — three steps to your new career.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center space-y-4">
              <div className="relative z-10 h-20 w-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-muted-foreground max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
