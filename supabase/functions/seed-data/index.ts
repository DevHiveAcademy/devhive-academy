import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const coursesData = [
  {
    title: "Artificial Intelligence Fundamentals",
    description: "Learn the core concepts and applications of artificial intelligence in modern technology.",
    full_description: "Artificial Intelligence is revolutionizing industries across the globe. In this course, you'll gain a solid foundation in AI principles and techniques that drive innovation. Through hands-on projects and expert-led sessions, you'll master the fundamentals of machine learning, neural networks, natural language processing, and computer vision.\n\nOur curriculum is designed by industry experts to ensure you acquire both theoretical knowledge and practical skills that are highly sought after in today's tech landscape.",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    price: 1299.00,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    start_date: "2024-01-15",
    instructor_names: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],
    modules: ["Introduction to AI and Machine Learning", "Neural Networks and Deep Learning", "Natural Language Processing", "Computer Vision", "Reinforcement Learning", "AI Ethics and Responsible Implementation", "Capstone Project"],
    students_count: 324,
    is_featured: true
  },
  {
    title: "Full-Stack Web Development",
    description: "Master front-end and back-end technologies to build complete web applications.",
    full_description: "This intensive program will transform you into a proficient full-stack developer capable of building dynamic, responsive web applications from the ground up. The curriculum covers both front-end and back-end development, giving you a comprehensive understanding of the entire web development process.\n\nYou'll learn modern JavaScript frameworks, server-side programming, database management, and deployment strategies.",
    duration: "16 weeks",
    level: "Intermediate",
    price: 1499.00,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    start_date: "2024-02-01",
    instructor_names: ["Emma Wilson", "James Park"],
    modules: ["HTML, CSS, and Responsive Design", "JavaScript Fundamentals", "Front-end Frameworks (React)", "Back-end Development with Node.js", "Database Design and Management", "API Development", "Authentication and Security", "Deployment and DevOps Basics", "Final Project"],
    students_count: 256,
    is_featured: true
  },
  {
    title: "Machine Learning with Python",
    description: "Implement machine learning algorithms for data analysis and predictive modeling.",
    full_description: "Machine Learning is at the heart of modern data science and artificial intelligence. This course provides a deep dive into ML algorithms and their implementation using Python. You'll develop the skills to analyze complex datasets, extract meaningful insights, and build predictive models that solve real business problems.",
    duration: "10 weeks",
    level: "Intermediate to Advanced",
    price: 1199.00,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    start_date: "2024-03-05",
    instructor_names: ["Dr. Alex Thompson", "Linda Garcia"],
    modules: ["Python for Data Science", "Data Preprocessing and Visualization", "Supervised Learning Algorithms", "Unsupervised Learning", "Deep Learning Fundamentals", "Model Evaluation and Improvement", "Feature Engineering", "Machine Learning Project"],
    students_count: 198,
    is_featured: true
  },
  {
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications for iOS and Android using React Native.",
    duration: "14 weeks",
    level: "Intermediate",
    price: 1399.00,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    start_date: "2024-04-01",
    instructor_names: ["Emma Wilson"],
    modules: ["React Native Fundamentals", "Navigation and State Management", "APIs and Data Fetching", "Publishing to App Stores"],
    students_count: 215,
    is_featured: false
  },
  {
    title: "Data Science and Analytics",
    description: "Learn to extract insights from complex datasets using statistical methods and visualization tools.",
    duration: "12 weeks",
    level: "Intermediate to Advanced",
    price: 1299.00,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    start_date: "2024-05-01",
    instructor_names: ["Michael Rodriguez"],
    modules: ["Statistical Analysis", "Data Visualization", "Predictive Modeling", "Business Intelligence"],
    students_count: 176,
    is_featured: false
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Master the essentials of network security, threat detection, and security best practices.",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    price: 1199.00,
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    start_date: "2024-06-01",
    instructor_names: ["Linda Garcia"],
    modules: ["Network Security Basics", "Threat Detection", "Incident Response", "Security Best Practices"],
    students_count: 145,
    is_featured: false
  }
];

const blogPostsData = [
  {
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is reshaping the landscape of software development and what it means for developers.",
    content: "Artificial Intelligence is transforming how we write, test, and deploy code. From intelligent code completion to automated testing, AI tools are becoming essential in modern development workflows.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author_name: "Dr. Emily Chen",
    author_avatar: "https://randomuser.me/api/portraits/women/34.jpg",
    category: "Artificial Intelligence"
  },
  {
    title: "Getting Started with Python for Data Science",
    excerpt: "A beginner's guide to using Python for data analysis, visualization, and building machine learning models.",
    content: "Python has become the go-to language for data science. In this guide, we'll explore the essential libraries and techniques you need to get started.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author_name: "Michael Thompson",
    author_avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "Data Science"
  },
  {
    title: "5 Essential Web Development Frameworks in 2023",
    excerpt: "Discover the most popular and powerful frameworks that are driving modern web development forward.",
    content: "The web development landscape is constantly evolving. Here are the top frameworks you should know about for building modern web applications.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author_name: "David Rodriguez",
    author_avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    category: "Web Development"
  },
  {
    title: "Understanding Machine Learning Algorithms",
    excerpt: "A deep dive into the most common machine learning algorithms and how to apply them to real-world problems.",
    content: "Machine learning algorithms form the backbone of AI systems. Understanding how they work is crucial for any aspiring data scientist or ML engineer.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author_name: "Dr. Maya Williams",
    author_avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    category: "Machine Learning"
  },
  {
    title: "Building Cross-Platform Mobile Apps: A Comprehensive Guide",
    excerpt: "Learn how to create mobile applications that work seamlessly across iOS and Android platforms.",
    content: "Cross-platform development allows you to reach both iOS and Android users with a single codebase. React Native has emerged as a leader in this space.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author_name: "James Kim",
    author_avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    category: "Mobile Development"
  },
  {
    title: "The Role of Ethics in AI Development",
    excerpt: "Examining the ethical considerations and responsibilities in developing artificial intelligence systems.",
    content: "As AI becomes more powerful, the ethical implications of its development become increasingly important. Developers must consider the impact of their work on society.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author_name: "Sarah Johnson",
    author_avatar: "https://randomuser.me/api/portraits/women/54.jpg",
    category: "AI Ethics"
  }
];

const testimonialsData = [
  {
    content: "The AI course at Software Dev Academy completely changed my career trajectory. The hands-on approach and expert instructors gave me the skills and confidence to transition into a machine learning engineer role.",
    author: "Sarah Johnson",
    role: "Machine Learning Engineer",
    company: "TechCorp Inc.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    is_featured: true
  },
  {
    content: "As someone with no prior coding experience, I was amazed at how quickly I was able to build real applications. The curriculum is well-structured and the mentorship was invaluable to my learning journey.",
    author: "Michael Chen",
    role: "Full-Stack Developer",
    company: "StartUp Innovations",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    is_featured: true
  },
  {
    content: "The project-based learning approach prepared me for real-world challenges. Within three months of completing the course, I landed a job at a leading tech company and have been excelling ever since.",
    author: "Alex Rodriguez",
    role: "Software Engineer",
    company: "Global Solutions",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4,
    is_featured: true
  },
  {
    content: "The instructors don't just teach you how to code, they teach you how to think like a developer. This mindset shift was the most valuable part of my education at Software Dev Academy.",
    author: "Emma Thompson",
    role: "Data Scientist",
    company: "Data Insights",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
    is_featured: true
  },
  {
    content: "I was skeptical about online learning, but the interactive platform and collaborative projects made me feel like I was in a real classroom. The community support was exceptional.",
    author: "James Wilson",
    role: "Web Developer",
    company: "Creative Web Solutions",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 4,
    is_featured: false
  },
  {
    content: "The AI specialization program was challenging but rewarding. The real-world projects helped me build a portfolio that impressed employers and gave me an edge in interviews.",
    author: "Linda Garcia",
    role: "AI Specialist",
    company: "FutureTech AI",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
    is_featured: false
  },
  {
    content: "After trying several other coding bootcamps, Software Dev Academy was a breath of fresh air. The focus on both technical skills and professional development was exactly what I needed.",
    author: "David Kim",
    role: "Mobile Developer",
    company: "AppWorks Mobile",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    rating: 5,
    is_featured: false
  },
  {
    content: "The career support team helped me negotiate a salary that was 40% higher than my previous role. The investment in this program paid for itself within my first few months on the new job.",
    author: "Sophia Martinez",
    role: "Backend Developer",
    company: "ServerSide Solutions",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 4,
    is_featured: false
  }
];

Deno.serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    
    // Create client with anon key for auth verification
    const supabaseAuth = createClient(supabaseUrl, supabaseAnonKey);
    
    // Verify authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabaseAuth.auth.getUser(token);

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized - Invalid token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create service role client for admin check and data operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if user has admin role
    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (roleError || !roleData) {
      return new Response(
        JSON.stringify({ error: 'Forbidden - Admin access required' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const results = {
      courses: { inserted: 0, error: null as string | null },
      blog_posts: { inserted: 0, error: null as string | null },
      testimonials: { inserted: 0, error: null as string | null }
    };

    // Seed courses
    const { data: coursesResult, error: coursesError } = await supabase
      .from('courses')
      .upsert(coursesData, { onConflict: 'title', ignoreDuplicates: true })
      .select();
    
    if (coursesError) {
      results.courses.error = coursesError.message;
    } else {
      // If upsert doesn't return data on ignore, count manually
      const { count } = await supabase.from('courses').select('*', { count: 'exact', head: true });
      results.courses.inserted = count || 0;
    }

    // Seed blog posts
    const { data: blogResult, error: blogError } = await supabase
      .from('blog_posts')
      .upsert(blogPostsData, { onConflict: 'title', ignoreDuplicates: true })
      .select();
    
    if (blogError) {
      results.blog_posts.error = blogError.message;
    } else {
      const { count } = await supabase.from('blog_posts').select('*', { count: 'exact', head: true });
      results.blog_posts.inserted = count || 0;
    }

    // Seed testimonials
    const { error: testimonialsError } = await supabase
      .from('testimonials')
      .insert(testimonialsData);
    
    if (testimonialsError) {
      // Check if it's a duplicate error and just count existing
      if (testimonialsError.message.includes('duplicate')) {
        const { count } = await supabase.from('testimonials').select('*', { count: 'exact', head: true });
        results.testimonials.inserted = count || 0;
      } else {
        results.testimonials.error = testimonialsError.message;
      }
    } else {
      const { count } = await supabase.from('testimonials').select('*', { count: 'exact', head: true });
      results.testimonials.inserted = count || 0;
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Database seeded successfully',
      results
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });

  } catch (error) {
    console.error('Error seeding database:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500
    });
  }
});