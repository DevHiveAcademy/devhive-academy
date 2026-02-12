import { useScrollReveal } from '@/hooks/useScrollReveal';

const techs = [
  'React', 'Python', 'TypeScript', 'TensorFlow', 'Node.js', 'PostgreSQL', 'Docker', 'AWS',
];

const TechStrip = () => {
  const ref = useScrollReveal();

  return (
    <section className="border-y border-border bg-muted/50">
      <div ref={ref} className="reveal-section max-w-7xl mx-auto px-6 py-10 text-center space-y-6">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Learn industry-standard tools
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {techs.map((tech) => (
            <span
              key={tech}
              className="text-lg font-semibold text-muted-foreground/60 hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStrip;
