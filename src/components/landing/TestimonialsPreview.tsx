import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useFeaturedTestimonials } from '@/hooks/useTestimonials';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TestimonialsPreview = () => {
  const { data: testimonials, isLoading } = useFeaturedTestimonials();
  const ref = useScrollReveal();

  if (isLoading || !testimonials?.length) return null;

  return (
    <section className="bg-background">
      <div ref={ref} className="reveal-section max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Students Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from graduates who transformed their careers with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t) => (
            <Card key={t.id} className="relative">
              <CardContent className="p-8 space-y-4">
                <Quote className="h-8 w-8 text-primary/20" />

                {t.rating && (
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`}
                      />
                    ))}
                  </div>
                )}

                <p className="text-muted-foreground leading-relaxed line-clamp-4">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-3 pt-2">
                  {t.avatar && (
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">{t.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}
                      {t.company && ` at ${t.company}`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
