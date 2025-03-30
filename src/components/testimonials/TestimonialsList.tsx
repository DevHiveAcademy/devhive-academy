
import TestimonialCard, { TestimonialProps } from './TestimonialCard';

const testimonialData: TestimonialProps[] = [
  {
    id: 1,
    content: "The AI course at Software Dev Academy completely changed my career trajectory. The hands-on approach and expert instructors gave me the skills and confidence to transition into a machine learning engineer role.",
    author: "Sarah Johnson",
    role: "Machine Learning Engineer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    company: "TechCorp Inc."
  },
  {
    id: 2,
    content: "As someone with no prior coding experience, I was amazed at how quickly I was able to build real applications. The curriculum is well-structured and the mentorship was invaluable to my learning journey.",
    author: "Michael Chen",
    role: "Full-Stack Developer",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    company: "StartUp Innovations"
  },
  {
    id: 3,
    content: "The project-based learning approach prepared me for real-world challenges. Within three months of completing the course, I landed a job at a leading tech company and have been excelling ever since.",
    author: "Alex Rodriguez",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4,
    company: "Global Solutions"
  },
  {
    id: 4,
    content: "The instructors don't just teach you how to code, they teach you how to think like a developer. This mindset shift was the most valuable part of my education at Software Dev Academy.",
    author: "Emma Thompson",
    role: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
    company: "Data Insights"
  },
  {
    id: 5,
    content: "I was skeptical about online learning, but the interactive platform and collaborative projects made me feel like I was in a real classroom. The community support was exceptional.",
    author: "James Wilson",
    role: "Web Developer",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 4,
    company: "Creative Web Solutions"
  },
  {
    id: 6,
    content: "The AI specialization program was challenging but rewarding. The real-world projects helped me build a portfolio that impressed employers and gave me an edge in interviews.",
    author: "Linda Garcia",
    role: "AI Specialist",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
    company: "FutureTech AI"
  },
  {
    id: 7,
    content: "After trying several other coding bootcamps, Software Dev Academy was a breath of fresh air. The focus on both technical skills and professional development was exactly what I needed.",
    author: "David Kim",
    role: "Mobile Developer",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    rating: 5,
    company: "AppWorks Mobile"
  },
  {
    id: 8,
    content: "The career support team helped me negotiate a salary that was 40% higher than my previous role. The investment in this program paid for itself within my first few months on the new job.",
    author: "Sophia Martinez",
    role: "Backend Developer",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 4,
    company: "ServerSide Solutions"
  }
];

const TestimonialsList = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsList;
