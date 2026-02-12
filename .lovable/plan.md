
# Landing Page Redesign Plan

## Current State
The landing page is a single centered section with a headline, feature pills, a sign-in card, and a footer -- all vertically stacked. It's functional but flat, lacking visual depth, social proof, and persuasive structure that converts visitors into sign-ups.

## Proposed Sections (Top to Bottom)

### 1. Navbar (Minimal, Transparent)
- Logo on the left, "Explore Courses" link + Theme Toggle on the right
- No full navigation (that's for post-login); keeps the landing focused
- Sticky with a subtle backdrop blur on scroll

### 2. Hero Section
- **Left column**: Bold transformation headline ("Launch Your Career in AI & Software Development"), a short subheading focused on outcomes, two CTA buttons ("Get Started Free" as primary with Google sign-in, "Browse Courses" as secondary outline)
- **Right column**: A decorative gradient/abstract illustration or a curated image of students collaborating
- Stats bar directly below the hero content: "500+ Students | 20+ Courses | 95% Satisfaction" -- pulling real counts from the database where possible
- Animated gradient background using CSS (no extra libraries needed)

### 3. Trusted Technologies Strip
- A subtle row of technology/framework logos (React, Python, TensorFlow, etc.) as muted SVG icons
- Label: "Learn industry-standard tools"
- Provides immediate credibility

### 4. Value Propositions (Why Choose Us)
- 3-column card grid with icons
- Cards: "Hands-on Projects", "Expert-Led Instruction", "Career Support"
- Each card has an icon, title, and 1-2 sentence description
- Uses `bg-card` and `border` tokens for proper dark mode support

### 5. Featured Courses Preview
- Heading: "Popular Courses"
- Show up to 3 featured courses pulled from the database (reusing `useFeaturedCourses` hook)
- Compact card format: image, title, level badge, duration
- "View All Courses" link at the bottom
- Accessible without signing in

### 6. Social Proof / Testimonials
- Heading: "What Our Students Say"
- Show 2-3 featured testimonials in a horizontal card layout (reusing `useFeaturedTestimonials` hook)
- Each card: quote, author name, role, star rating
- Clean card design with quote icon accent

### 7. How It Works
- 3-step horizontal flow: "Sign Up" -> "Choose Your Path" -> "Start Learning"
- Simple numbered circles with connecting lines
- Brief description under each step

### 8. Final CTA Section
- Full-width accent background section
- Headline: "Ready to Start Your Journey?"
- Google Sign-In button (large, centered)
- "Or explore courses first" ghost link below

### 9. Minimal Footer
- Single row: Copyright, links to About/Contact/Privacy
- Social media icons
- Compact, not the full 4-column footer (that stays on the inner pages)

---

## Technical Approach

### Files to Create
- `src/components/landing/HeroSection.tsx` -- Hero with stats bar
- `src/components/landing/TechStrip.tsx` -- Technology logos
- `src/components/landing/ValueProps.tsx` -- 3-column value cards
- `src/components/landing/FeaturedCoursesPreview.tsx` -- Course cards (uses existing hook)
- `src/components/landing/TestimonialsPreview.tsx` -- Testimonial cards (uses existing hook)
- `src/components/landing/HowItWorks.tsx` -- 3-step flow
- `src/components/landing/FinalCTA.tsx` -- Bottom call-to-action
- `src/components/landing/LandingFooter.tsx` -- Minimal footer
- `src/components/landing/LandingNav.tsx` -- Minimal sticky navbar

### Files to Modify
- `src/pages/Landing.tsx` -- Replace current content with the new section components
- `src/index.css` -- Add a few custom CSS keyframes for scroll-triggered fade-in animations

### Design Tokens and Dark Mode
- All new components will use Tailwind semantic tokens (`bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`) to ensure automatic dark mode compatibility
- No hardcoded `bg-white` or `text-gray-900`

### Animations
- CSS-only scroll animations using `IntersectionObserver` in a small custom hook (`useScrollReveal`) -- no extra dependencies
- Fade-in-up effect on each section as it enters the viewport
- Subtle hover scale on course and value prop cards

### Data
- Featured courses and testimonials are fetched from the existing database via the already-built hooks
- Stats numbers can start as static and later be wired to real counts

### No New Dependencies Required
- Everything built with existing Tailwind, Lucide icons, and Radix UI primitives
