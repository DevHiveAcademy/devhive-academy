-- Add unique constraint on courses title
ALTER TABLE public.courses ADD CONSTRAINT courses_title_unique UNIQUE (title);

-- Add unique constraint on blog_posts title
ALTER TABLE public.blog_posts ADD CONSTRAINT blog_posts_title_unique UNIQUE (title);