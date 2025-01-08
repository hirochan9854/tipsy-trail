'use client';

import { mockAlcohols } from '@/mock/mockAlcohols';
import Image from 'next/image';
import { useState } from 'react';
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
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="relative w-[300px] h-[500px] rounded-[10px] overflow-hidden">
            <div className="size-full opacity-60 bg-white px-[45px] py-[40px]">
              <h2>本日のおすすめ</h2>
              <Image width={210} height={8} alt="" src={'/deco-line.svg'} />
              <Image src={'/img-sample-sake.png'} width={108} height={121} alt="" className="mx-auto my-[10px]" />
              <h3 className="font-bold text-lg mb-[10px]">{recommendedAlcohols?.name}</h3>
              <p className="text-sm mb-6">{recommendedAlcohols?.description}</p>
              <ul>
                <li className="font-semibold text-xs flex items-center justify-between  border-b border-[#D6D1BF] pb-1 mb-[10px]">
                  <span>ベース：</span>
                  <p>{recommendedAlcohols?.base}</p>
                </li>{' '}
                <li className="font-semibold text-xs flex items-center justify-between  border-b border-[#D6D1BF] pb-1 mb-[10px]">
                  <span>特徴：</span>
                  <p>{recommendedAlcohols?.feature}</p>
                </li>{' '}
                <li className="font-semibold text-xs flex items-center justify-between  border-b border-[#D6D1BF] pb-1 mb-[10px]">
                  <span>材料：</span>
                  <p>{recommendedAlcohols?.material.map((material, index) => <span key={index}>{material}、</span>)}</p>
                </li>
              </ul>
              <FavoriteButton isFavorite={isFavorite} onClick={handleFavorite} />
            </div>
            <button className="absolute top-6 right-6" onClick={handleClose}>
              <Image width={25} height={25} alt="close" src={'/icon-close.svg'} />
            </button>
          </div>
        </div>

        <div className="fixed w-screen h-screen bg-[#0C151B] opacity-60 z-20"></div>
      </div>
    );
  }
};
