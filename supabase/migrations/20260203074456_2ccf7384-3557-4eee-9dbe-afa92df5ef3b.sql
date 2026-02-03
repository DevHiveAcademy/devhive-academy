-- Add admin write policies for courses table
CREATE POLICY "Admins can insert courses"
ON public.courses FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update courses"
ON public.courses FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete courses"
ON public.courses FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add admin write policies for blog_posts table
CREATE POLICY "Admins can insert blog posts"
ON public.blog_posts FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update blog posts"
ON public.blog_posts FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete blog posts"
ON public.blog_posts FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add admin write policies for testimonials table
CREATE POLICY "Admins can insert testimonials"
ON public.testimonials FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update testimonials"
ON public.testimonials FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete testimonials"
ON public.testimonials FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add database constraints for contact form validation
ALTER TABLE public.contact_submissions
ADD CONSTRAINT name_length CHECK (length(name) <= 100),
ADD CONSTRAINT email_length CHECK (length(email) <= 255),
ADD CONSTRAINT subject_length CHECK (length(subject) <= 200),
ADD CONSTRAINT message_length CHECK (length(message) <= 5000),
ADD CONSTRAINT phone_length CHECK (phone IS NULL OR length(phone) <= 20);

-- Add email format validation using regex
ALTER TABLE public.contact_submissions
ADD CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');