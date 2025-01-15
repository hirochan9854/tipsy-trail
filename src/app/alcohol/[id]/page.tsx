'use client';
import { mockAlcohols } from '@/mock/mockAlcohols';
import Image from 'next/image';
import { FavoriteButton } from '@/components/FavoriteButton';
import { useState } from 'react';
import { SearchButton } from '@/components/SearchButton';
import { BackButton } from '@/components/BackButton';

export default function Home() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const alcohol = mockAlcohols.find((a) => a.id === 1); // idが1のお酒を取得
  return (
    <div className="container text-[#D6D1BF] mx-auto ">
      <div className="flex justify-between align-middle mx-[15px] fixed top-[50px] left-0 right-0 z-10">
        <BackButton href="/" />
        <SearchButton />
      </div>

      <div className="mt-[50px] ml-[50px] mb-[150px]">
        <p className="text-[10px]">{alcohol?.ename}</p>
        <h2 className="text-lg font-normal">{alcohol?.name}</h2> {/* お酒のベースを表示 */}
      </div>

      <div className="rounded-s-[30px] rounded-e-[30px] relative text-[#FFFFFF] bg-gradient-to-b from-[#D6D1BF] to-[#0C151B] p-[20px] mb-[100px]">
        <Image
          className="absolute top-[-150px] right-[44px]"
          src="/img-sample-sake.png"
          width={177}
          height={198}
          alt="お酒の画像"
        />
        <p className="mx-[5%] mt-[70px]">{alcohol?.description} </p>

        <ul className="w-[280px] mx-auto mt-[30px] flex flex-col gap-[10px]">
          <li className="flex flex-row justify-between px-3 border-b-[1px] border-[#FFFFFF] pb-[10px]">
            <span>ベース</span>
            <span>{alcohol?.base}</span>
          </li>
          <li className="flex flex-row justify-between px-3 border-b-[1px] border-[#FFFFFF] pb-[10px]">
            <span>度数</span>
            <span>{alcohol?.alcoholContent}</span>
          </li>
          <li className="flex flex-row justify-between px-3 border-b-[1px] border-[#FFFFFF] pb-[10px]">
            <span>特徴</span>
            <span>{alcohol?.feature}</span>
          </li>
          <li className="flex flex-row justify-between px-3 border-b-[1px] border-[#FFFFFF] pb-[10px]">
            <span>材料</span>
            <span>{alcohol?.material}</span>
          </li>
        </ul>

        <div className="w-[280px] mx-auto mt-[20px]">
          <FavoriteButton isFavorite={isFavorite} onClick={handleFavorite} />
        </div>
      </div>
    </div>
  );
}
