import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ButtonBack } from '@/components/button-back';
import { ButtonSubmit } from '@/components/button-submit';
import { useSwrProfile } from '@/hooks/use-swr-profile';
import { useRouter } from 'next/router';

export default function EditProfile() {
  const router = useRouter();

  const { isLoading, error, profile: initialProfile } = useSwrProfile();
  const [profile, setProfile] = useState(initialProfile);

  useEffect(() => {
    if (initialProfile) setProfile(initialProfile);
  }, [initialProfile]);

  if (error) return <h1>Error...</h1>;
  if (isLoading || !profile) return <h1>Loading...</h1>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    });
    toast.success('Profile updated successfully');
    router.replace('/');
  };

  return (
    <div className="max-w-md w-full mx-4 rounded-2xl p-4 md:px-8 md:pt-6 shadow-input bg-white dark:bg-black">
      <ButtonBack></ButtonBack>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Edit Your Profile</h2>

      <form className="mt-8 mb-3" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="firstname">User Name</Label>
          <Input
            id="firstname"
            placeholder="Tyler"
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="password">Telephone</Label>
          <Input
            id="password"
            placeholder="+1 1234 5678"
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </LabelInputContainer>

        <ButtonSubmit />
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>;
};
