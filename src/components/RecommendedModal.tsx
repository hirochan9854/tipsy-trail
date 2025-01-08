import { mockAlcohols } from '@/mock/mockAlcohols';
import Image from 'next/image';

export const RecommendedModal: React.FC = () => {
  const recommendedAlcohols = mockAlcohols[0];
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-30">
        <div className="relative w-[300px] h-[500px] rounded-[10px] overflow-hidden">
          <div className="size-full opacity-60 bg-white px-[45px] py-[40px]">
            <h2>本日のおすすめ</h2>
            <Image width={210} height={8} alt="" src={'/deco-line.svg'} />
          </div>
          <button className="absolute top-6 right-6">
            <Image width={25} height={25} alt="close" src={'/icon-close.svg'} />
          </button>
        </div>
      </div>

      <div className="fixed w-screen h-screen bg-[#0C151B] opacity-60 z-20"></div>
    </div>
  );
};
