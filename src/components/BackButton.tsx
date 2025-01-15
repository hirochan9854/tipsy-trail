import Image from 'next/image';
import Link from 'next/link';

export type BackButtonProps = {
  href: string;
};
export const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link className="fixed left-4 top-[56px] z-50 " href={href}>
      <Image alt="Back" height={24} src="/icon-back.svg" width={24} />
    </Link>
  );
};
