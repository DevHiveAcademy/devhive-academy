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
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([submission])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    }
  });
};
