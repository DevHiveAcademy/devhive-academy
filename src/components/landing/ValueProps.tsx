import { Code2, Users, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const props = [
  {
    icon: Code2,
    title: 'Hands-on Projects',
    description: 'Build real-world applications from day one. Every course includes portfolio-worthy projects that employers value.',
  },
  {
    icon: Users,
    title: 'Expert-Led Instruction',
    description: 'Learn from industry professionals with years of experience at top tech companies and startups.',
  },
  {
    icon: Rocket,
    title: 'Career Support',
    description: 'Get resume reviews, mock interviews, and direct connections to hiring partners in the tech industry.',
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
          {props.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
