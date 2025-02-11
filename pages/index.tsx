import { GlareCard } from '@/components/ui/glare-card';
import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import { useSwrProfile } from '@/hooks/use-swr-profile';

export default function Home() {
  const { isLoading, error, profile } = useSwrProfile();
  return <>{isLoading ? <h1>Loading...</h1> : error ? <h1>Error...</h1> : <ContactCard {...profile} />}</>;
}

export const ContactCard: FC<{
  name: string;
  email: string;
  phone: string;
}> = (props) => {
  const router = useRouter();

  return (
    <GlareCard className="text-white p-6 flex flex-col" onClick={() => router.push('/edit-profile')}>
      <p className="text-2xl font-semibold mb-2">👋 , {props.name}</p>
      <p className="text-gray-400 ">{props.phone}</p>
      <p className="text-gray-400 ">{props.email}</p>
      <div className="flex-1"></div>
      <button type="button" className="text-gray-400 text-sm flex justify-end items-center space-x-2">
        <span>Click to Edit</span>
        <FaArrowRight />
      </button>
    </GlareCard>
  );
};
