'use client';
import Image from 'next/image';
import { useState } from 'react';

import { BackButton } from '@/components/BackButton';
import { FavoriteButton } from '@/components/FavoriteButton';
import { SearchButton } from '@/components/SearchButton';
import { mockAlcohols } from '@/mock/mockAlcohols';

export default function Home() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const alcohol = mockAlcohols.find((a) => a.id === 1); // idが1のお酒を取得
  return (
    <div className="container mx-auto text-[#D6D1BF] ">
      <div className="fixed inset-x-0 top-[50px] z-10 mx-[15px] flex justify-between align-middle">
        <BackButton href="/" />
        <SearchButton />
      </div>

      <div className="mb-[150px] ml-[50px] mt-[50px]">
        <p className="text-[10px]">{alcohol?.ename}</p>
        <h2 className="text-lg font-normal">{alcohol?.name}</h2> {/* お酒のベースを表示 */}
      </div>

      <div className="relative mb-[100px] rounded-e-[30px] rounded-s-[30px] bg-gradient-to-b from-[#D6D1BF] to-[#0C151B] p-[20px] text-[#FFFFFF]">
        <Image
          alt="お酒の画像"
          className="absolute right-[44px] top-[-150px]"
          height={198}
          src="/img-sample-sake.png"
          width={177}
        />
        <p className="mx-[5%] mt-[70px]">{alcohol?.description} </p>

        <ul className="mx-auto mt-[30px] flex w-[280px] flex-col gap-[10px]">
          <li className="flex flex-row justify-between border-b border-[#FFFFFF] px-3 pb-[10px]">
            <span>ベース</span>
            <span>{alcohol?.base}</span>
          </li>
          <li className="flex flex-row justify-between border-b border-[#FFFFFF] px-3 pb-[10px]">
            <span>度数</span>
            <span>{alcohol?.alcoholContent}</span>
          </li>
          <li className="flex flex-row justify-between border-b border-[#FFFFFF] px-3 pb-[10px]">
            <span>特徴</span>
            <span>{alcohol?.feature}</span>
          </li>
          <li className="flex flex-row justify-between border-b border-[#FFFFFF] px-3 pb-[10px]">
            <span>材料</span>
            <span>{alcohol?.material}</span>
          </li>
        </ul>

        <div className="mx-auto mt-[20px] w-[280px]">
          <FavoriteButton isFavorite={isFavorite} onClick={handleFavorite} />
        </div>
      </div>
    </div>
  );
}
