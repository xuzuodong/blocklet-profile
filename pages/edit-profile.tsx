'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ButtonBack } from '@/components/button-back';
import { ButtonSubmit } from '@/components/button-submit';

export default function EditProfile() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="max-w-md w-full mx-4 rounded-2xl p-4 md:px-8 md:pt-6 shadow-input bg-white dark:bg-black">
      <ButtonBack></ButtonBack>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Edit Your Profile</h2>

      <form className="mt-8 mb-3" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="firstname">User Name</Label>
          <Input id="firstname" placeholder="Tyler" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="password">Telephone</Label>
          <Input id="password" placeholder="+1 1234 5678" type="tel" />
        </LabelInputContainer>

        <ButtonSubmit />
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>;
};
