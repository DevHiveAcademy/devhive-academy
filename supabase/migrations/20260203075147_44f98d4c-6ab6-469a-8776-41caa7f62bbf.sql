-- Create a function to check rate limiting for contact submissions
-- Limits submissions to 3 per email per hour
CREATE OR REPLACE FUNCTION public.check_contact_submission_rate_limit()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  -- Count submissions from this email in the last hour
  SELECT COUNT(*) INTO recent_count
  FROM public.contact_submissions
  WHERE email = NEW.email
    AND created_at > NOW() - INTERVAL '1 hour';
  
  -- Allow up to 3 submissions per hour per email
  IF recent_count >= 3 THEN
    RAISE EXCEPTION 'Rate limit exceeded. Please wait before submitting again.'
      USING ERRCODE = 'P0001';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create the trigger to enforce rate limiting on INSERT
CREATE TRIGGER contact_submission_rate_limit
  BEFORE INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.check_contact_submission_rate_limit();