import Image from 'next/image';
import Link from 'next/link';

export type BackButtonProps = {
  href: string;
};
export const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link href={href} className="fixed top-[56px] left-4 z-50 ">
      <Image src="/icon-back.svg" alt="Back" width={24} height={24} />
    </Link>
  );
};
