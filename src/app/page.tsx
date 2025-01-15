import { AlcoholListItem } from '@/components/AlcoholListItem';
import { RecommendedModal } from '@/components/RecommendedModal';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="px-[15px] pt-[52px] ">
      <RecommendedModal />
      <div className="mb-12">
        <div className="mb-3">
          <h3 className="text-[#D6D1BF] mb-1 ml-5">あなたへのおすすめ</h3>
          <Image src={'/deco-white-line.svg'} width={300} height={7} alt="" />
        </div>
        <div className="flex overflow-scroll gap-6 flex-nowrap w-screen">
          {[...Array(10)].map((_, i) => (
            <AlcoholListItem key={i} />
          ))}
        </div>
      </div>
      <div className="mb-12">
        <div className="mb-3">
          <h3 className="text-[#D6D1BF] mb-1 ml-5">しっぽり</h3>
          <Image src={'/deco-white-line.svg'} width={300} height={7} alt="" />
        </div>
        <div className="flex overflow-scroll gap-6 flex-nowrap w-screen">
          {[...Array(10)].map((_, i) => (
            <AlcoholListItem key={i} />
          ))}
        </div>
      </div>
      <div className="mb-12">
        <div className="mb-3">
          <h3 className="text-[#D6D1BF] mb-1 ml-5">楽しむ</h3>
          <Image src={'/deco-white-line.svg'} width={300} height={7} alt="" />
        </div>
        <div className="flex overflow-scroll gap-6 flex-nowrap w-screen">
          {[...Array(10)].map((_, i) => (
            <AlcoholListItem key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
