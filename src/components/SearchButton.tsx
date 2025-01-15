import Link from 'next/link';
import Image from 'next/image';
export const SearchButton: React.FC = () => {
  return (
    <Link href={'/search'} className="fixed top-[56px] right-4 z-50 ">
      <Image src="/icon-search.svg" alt="Back" width={24} height={24} />
    </Link>
  );
};
