import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { ButtonBack } from '@/components/button-back';
import { ButtonSubmit } from '@/components/button-submit';
import { useSwrProfile } from '@/hooks/use-swr-profile';
import { useRouter } from 'next/router';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const schema = z.object({
  name: z.string().min(1, { message: 'Please enter user name' }),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, { message: 'Please enter phone number' }),
});

export default function EditProfile() {
  const router = useRouter();

  const { isLoading, error, profile: initialProfile, mutate } = useSwrProfile();

  const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (initialProfile) {
      form.setValue('name', initialProfile.name);
      form.setValue('email', initialProfile.email);
      form.setValue('phone', initialProfile.phone);
    }
  }, [initialProfile]);

  if (error) return <h1>Error...</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    mutate();
    toast.success('Profile updated successfully');
    router.replace('/');
  };

  return (
    <div className="max-w-md w-full mx-4 rounded-2xl p-4 md:px-8 md:pt-6 shadow-input bg-white dark:bg-black">
      <ButtonBack></ButtonBack>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Edit Your Profile</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-8 mb-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input placeholder="Tyler" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="projectmayhem@fc.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Telephone</FormLabel>
                <FormControl>
                  <Input placeholder="+1 1234 5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ButtonSubmit disabled={form.formState.isSubmitting} />
        </form>
      </Form>
    </div>
  );
}
