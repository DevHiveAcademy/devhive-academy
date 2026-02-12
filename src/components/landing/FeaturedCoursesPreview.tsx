import { useNavigate, Link } from 'react-router-dom';
import { Clock, BarChart, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useFeaturedCourses } from '@/hooks/useCourses';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FeaturedCoursesPreview = () => {
  const { data: courses, isLoading } = useFeaturedCourses();
  const navigate = useNavigate();
  const ref = useScrollReveal();

  if (isLoading || !courses?.length) return null;

  return (
    <section className="bg-muted/30">
      <div ref={ref} className="reveal-section max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Popular Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start with our most in-demand programs chosen by hundreds of students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <Card
              key={course.id}
              className="group overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border-border/50 bg-gradient-to-b from-card to-muted/30"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              {course.image && (
                <div className="h-44 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-card-foreground line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="secondary">{course.level}</Badge>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {course.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="ghost" asChild className="gap-2 text-primary">
            <Link to="/courses">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesPreview;
