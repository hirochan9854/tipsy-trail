import Image from 'next/image';
import Link from 'next/link';

export const AlcoholListItem: React.FC = () => {
  return (
    <Link href={'/alcohol/1'} className="text-white flex flex-col items-center w-20">
      <Image src={'/img-sample-sake.png'} width={76} height={85} alt="" />
      <h3 className="text-[13px] font-normal">かぼすハイ</h3>
      <p className="text-[10px] ">度数:50%</p>
    </Link>
  );
};
