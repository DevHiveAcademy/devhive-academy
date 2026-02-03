import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  rating: number;
  is_featured: boolean;
  created_at: string;
}

export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Testimonial[];
    }
  });
};

export const useFeaturedTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials', 'featured'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(4);
      
      if (error) throw error;
      return data as Testimonial[];
    }
  });
};
