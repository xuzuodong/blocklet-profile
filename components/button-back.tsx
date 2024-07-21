import React from 'react';
import { useAnimate } from 'framer-motion';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa6';

export function ButtonBack() {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  return (
    <button
      type="button"
      className="flex items-center space-x-1 mb-4 text-sm bg-slate-100 py-2 px-3 rounded hover:bg-slate-200 transition-all"
      onPointerEnter={() => {
        animate(scope.current, {
          transform: 'translateX(-0.125rem)',
          transition: {
            duration: 1,
          },
        });
      }}
      onPointerLeave={() => {
        animate(scope.current, {
          transform: 'translateX(0rem)',
          transition: {
            duration: 1,
          },
        });
      }}
      onClick={() => router.back()}>
      <span ref={scope}>
        <FaArrowLeft />
      </span>
      <span>Go Back</span>
    </button>
  );
}
