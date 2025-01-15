import Image from 'next/image';
import Link from 'next/link';
export const SearchButton: React.FC = () => {
  return (
    <Link className="fixed right-4 top-[56px] z-50 " href={'/search'}>
      <Image alt="Back" height={24} src="/icon-search.svg" width={24} />
    </Link>
  );
};
