import Image from 'next/image';
import Link from 'next/link';

export const AlcoholListItem: React.FC = () => {
  return (
    <Link className="flex min-w-20 flex-col items-center text-white " href={'/alcohol/1'}>
      <Image alt="" height={85} src={'/img-sample-sake.png'} width={76} />
      <h3 className="text-[13px] font-normal">かぼすハイ</h3>
      <p className="text-[10px] ">度数:50%</p>
    </Link>
  );
};
