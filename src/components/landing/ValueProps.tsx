import { Code2, Users, Rocket } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const props = [
  {
    icon: Code2,
    title: 'Launch a new career',
    description: 'Build real-world applications from day one. Every course includes portfolio-worthy projects that employers value.',
    gradient: 'from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
    iconColor: 'text-primary',
  },
  {
    icon: Users,
    title: 'Gain in-demand skills',
    description: 'Learn from industry professionals with years of experience at top tech companies and startups.',
    gradient: 'from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/40',
    iconBg: 'bg-purple-100 dark:bg-purple-900/50',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: Rocket,
    title: 'Earn a certificate',
    description: 'Get resume reviews, mock interviews, and direct connections to hiring partners in the tech industry.',
    gradient: 'from-violet-50 to-blue-50 dark:from-violet-950/40 dark:to-blue-950/40',
    iconBg: 'bg-violet-100 dark:bg-violet-900/50',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
];

const ValueProps = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background">
      <div ref={ref} className="reveal-section max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine practical skills training with career development to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map(({ icon: Icon, title, description, gradient, iconBg, iconColor }) => (
            <div
              key={title}
              className={`group relative rounded-2xl bg-gradient-to-br ${gradient} border border-border/50 p-8 flex items-center justify-between gap-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
              <div className={`shrink-0 h-16 w-16 rounded-xl ${iconBg} flex items-center justify-center`}>
                <Icon className={`h-8 w-8 ${iconColor}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
