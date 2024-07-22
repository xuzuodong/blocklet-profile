import { cn } from '@/lib/utils';
import React from 'react';

export function ButtonSubmit({ disabled }: { disabled: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer animate-shimmer ',
        'w-full h-10 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
      )}>
      Submit
    </button>
  );
}
