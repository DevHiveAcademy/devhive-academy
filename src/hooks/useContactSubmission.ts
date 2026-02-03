import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const useContactSubmission = () => {
  return useMutation({
    mutationFn: async (submission: ContactSubmission) => {
      // Clean up the submission data - remove undefined values
      const cleanSubmission = {
        name: submission.name,
        email: submission.email,
        subject: submission.subject,
        message: submission.message,
        ...(submission.phone && { phone: submission.phone })
      };

      const { error } = await supabase
        .from('contact_submissions')
        .insert([cleanSubmission]);
      
      if (error) throw error;
      return { success: true };
    }
  });
};
