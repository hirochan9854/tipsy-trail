'use client';

import Image from 'next/image';
import { useState } from 'react';

import { mockAlcohols } from '@/mock/mockAlcohols';

import { FavoriteButton } from './FavoriteButton';

export const RecommendedModal: React.FC = () => {
  const [isOpened, setIsOpened] = useState(true);

  const handleClose = () => {
    setIsOpened(false);
  };

  const recommendedAlcohols = mockAlcohols[0];

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (!isOpened) {
    return null;
  } else {
    return (
      <div>
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          <div className="relative w-[300px]  overflow-hidden rounded-[10px]">
            <div className="size-full  bg-[#9EA1A4] px-[45px] py-[40px]">
              <h2>本日のおすすめ</h2>
              <Image alt="" height={8} src={'/deco-line.svg'} width={210} />
              <Image alt="" className="mx-auto my-[10px]" height={121} src={'/img-sample-sake.png'} width={108} />
              <h3 className="mb-[10px] text-lg font-bold">{recommendedAlcohols?.name}</h3>
              <p className="mb-6 text-sm">{recommendedAlcohols?.description}</p>
              <ul>
                <li className="mb-[10px] flex items-center justify-between border-b  border-[#D6D1BF] pb-1 text-xs font-semibold">
                  <span>ベース：</span>
                  <p>{recommendedAlcohols?.base}</p>
                </li>{' '}
                <li className="mb-[10px] flex items-center justify-between border-b  border-[#D6D1BF] pb-1 text-xs font-semibold">
                  <span>特徴：</span>
                  <p>{recommendedAlcohols?.feature}</p>
                </li>{' '}
                <li className="mb-[10px] flex items-center justify-between border-b  border-[#D6D1BF] pb-1 text-xs font-semibold">
                  <span>材料：</span>
                  <p>{recommendedAlcohols?.material.map((material, index) => <span key={index}>{material}、</span>)}</p>
                </li>
              </ul>
              <FavoriteButton isFavorite={isFavorite} onClick={handleFavorite} />
            </div>
            <button className="absolute right-6 top-6" onClick={handleClose}>
              <Image alt="close" height={25} src={'/icon-close.svg'} width={25} />
            </button>
          </div>
        </div>

        <div className="fixed z-20 h-screen w-screen bg-[#0C151B] opacity-60"></div>
      </div>
    );
  }
};
