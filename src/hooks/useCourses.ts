import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Course {
  id: string;
  title: string;
  description: string;
  full_description?: string;
  duration: string;
  level: string;
  price: number;
  image?: string;
  start_date?: string;
  instructor_names: string[];
  modules: string[];
  students_count: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export const useCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Course[];
    }
  });
};

export const useFeaturedCourses = () => {
  return useQuery({
    queryKey: ['courses', 'featured'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data as Course[];
    }
  });
};

export const useCourse = (id: string) => {
  return useQuery({
    queryKey: ['courses', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .maybeSingle();
      
      if (error) throw error;
      return data as Course | null;
    },
    enabled: !!id
  });
};
