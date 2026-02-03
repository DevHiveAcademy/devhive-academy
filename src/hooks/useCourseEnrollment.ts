import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface CourseEnrollment {
  id: string;
  course_id: string;
  user_id: string;
  enrolled_at: string;
  status: 'active' | 'completed' | 'cancelled';
}

export const useEnrollInCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (courseId: string) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('You must be logged in to enroll in a course');
      }

      const { data, error } = await supabase
        .from('course_enrollments')
        .insert([{ course_id: courseId, user_id: user.id }])
        .select()
        .single();
      
      if (error) {
        if (error.code === '23505') {
          throw new Error('You are already enrolled in this course');
        }
        throw error;
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-enrollments'] });
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    }
  });
};

export const useUserEnrollments = () => {
  return useQuery({
    queryKey: ['user-enrollments'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return [];

      const { data, error } = await supabase
        .from('course_enrollments')
        .select('*, courses(*)')
        .eq('user_id', user.id)
        .order('enrolled_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });
};

export const useIsEnrolled = (courseId: string) => {
  return useQuery({
    queryKey: ['enrollment-check', courseId],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return false;

      const { data, error } = await supabase
        .from('course_enrollments')
        .select('id')
        .eq('course_id', courseId)
        .eq('user_id', user.id)
        .maybeSingle();
      
      if (error) throw error;
      return !!data;
    },
    enabled: !!courseId
  });
};
