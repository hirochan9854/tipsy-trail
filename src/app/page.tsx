import Image from 'next/image';

import { AlcoholListItem } from '@/components/AlcoholListItem';
import { RecommendedModal } from '@/components/RecommendedModal';

export default function Home() {
  const arrayOfTen: number[] = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="px-[15px] pt-[52px] ">
      <RecommendedModal />
      <div className="mb-12">
        <div className="mb-3">
          <h3 className="mb-1 ml-5 text-[#D6D1BF]">あなたへのおすすめ</h3>
          <Image alt="" height={7} src="/deco-white-line.svg" width={300} />
        </div>
        <div className="flex w-screen flex-nowrap gap-6 overflow-scroll">
          {arrayOfTen.map((i) => (
            <AlcoholListItem key={i} />
          ))}
        </div>
      </div>
      <div className="mb-12">
        <div className="mb-3">
          <h3 className="mb-1 ml-5 text-[#D6D1BF]">しっぽり</h3>
          <Image alt="" height={7} src="/deco-white-line.svg" width={300} />
        </div>
        <div className="flex w-screen flex-nowrap gap-6 overflow-scroll">
          {arrayOfTen.map((i) => (
            <AlcoholListItem key={i} />
          ))}
        </div>
      </div>
      <div className="mb-12">
        <div className="mb-3">
          <h3 className="mb-1 ml-5 text-[#D6D1BF]">楽しむ</h3>
          <Image alt="" height={7} src="/deco-white-line.svg" width={300} />
        </div>
        <div className="flex w-screen flex-nowrap gap-6 overflow-scroll">
          {arrayOfTen.map((i) => (
            <AlcoholListItem key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
