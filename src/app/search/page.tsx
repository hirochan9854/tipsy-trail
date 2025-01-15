'use client';

import { BackButton } from '@/components/BackButton';
import { SearchButton } from '@/components/SearchButton';
import Image from 'next/image';

export default function Home() {
  document.querySelectorAll('.sake').forEach((li) => {
    li.addEventListener('click', () => {
      li.classList.toggle('bg-[#D6D1BF]');
      li.classList.toggle('text-[#D9D9D9]');
    });
  });

  return (
    <div className="container  text-[#D6D1BF] mx-[10px] mt-[44px]">
      <BackButton href="/" />
      <div className="w-auto">
        <p className="mb-[20px]">ベース</p>
        <ul
          className="sake w-full grid grid-cols-3 mb-[35px] text-sm gap-3"
          style={{ gridTemplateColumns: 'repeat(3, 115px)' }}
        >
          <li className="w-full h-[30px]  leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            ビール
          </li>
          <li className="w-full h-[30px]  leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            ウイスキー
          </li>
          <li className="w-full h-[30px]  leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            リキュール
          </li>
          <li className="w-full h-[30px]  leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            ワイン
          </li>
          <li className="w-full h-[30px]  leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            テキーラ
          </li>
          <li className="w-full h-[30px]  leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            ジン
          </li>
          <li className="w-full h-[30px]  leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            ウォッカ
          </li>
          <li className="w-full h-[30px]  leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            ラム
          </li>
          <li className="w-full h-[30px]  leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            カクテル
          </li>
        </ul>
      </div>

      <hr className="mb-[35px]" />

      <div className="w-auto">
        <p className="mb-[20px]">テイスト</p>
        <ul
          className="w-full grid grid-cols-3 text-sm gap-3 mb-[35px]"
          style={{ gridTemplateColumns: 'repeat(3, 115px)' }}
        >
          <li className=" px-[20px] h-[30px] flex justify-between items-center gap-x-1 leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            <Image
              className="p-[3px] border rounded-[50px]"
              src="/icon-check.svg"
              width={16}
              height={10}
              alt="お酒の画像"
            />
            甘口
          </li>
          <li className=" px-[20px] h-[30px] flex justify-between items-center gap-x-1 leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            <Image
              className="p-[3px] border rounded-[50px]"
              src="/icon-check.svg"
              width={16}
              height={10}
              alt="お酒の画像"
            />
            中甘口
          </li>
          <li className=" px-[20px] h-[30px] flex justify-between items-center gap-x-1 leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            <Image
              className="p-[3px] border rounded-[50px]"
              src="/icon-check.svg"
              width={16}
              height={10}
              alt="お酒の画像"
            />
            中口
          </li>
          <li className=" px-[20px] h-[30px] flex justify-between items-center gap-x-1 leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            <Image
              className="p-[3px] border rounded-[50px]"
              src="/icon-check.svg"
              width={16}
              height={10}
              alt="お酒の画像"
            />
            中辛口
          </li>
          <li className=" px-[20px] h-[30px] flex justify-between items-center gap-x-1 leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            <Image
              className="p-[3px] border rounded-[50px]"
              src="/icon-check.svg"
              width={16}
              height={10}
              alt="お酒の画像"
            />
            辛口
          </li>
        </ul>
      </div>

      <hr className="mb-[35px]" />
      <div className="w-auto">
        <p className="mb-[20px]">アルコール度数</p>
        <ul
          className="w-full grid grid-cols-3 text-sm gap-3 mb-[35px]"
          style={{ gridTemplateColumns: 'repeat(3, 115px)' }}
        >
          <li className="tracking-[-0.25em]  px-[8px] h-[30px] flex justify-between items-center gap-x-1 leading-[14px]  text-center align-middle py-[5px] border rounded-[25px]">
            <Image
              className="p-[3px] border rounded-[50px]"
              src="/icon-check.svg"
              width={16}
              height={10}
              alt="お酒の画像"
            />
            ノンアルコール
          </li>
          <li className="tracking-[-0.05em]  px-[8px] h-[30px] flex justify-between items-center gap-x-1 leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            <Image
              className="p-[3px] border rounded-[50px]"
              src="/icon-check.svg"
              width={16}
              height={10}
              alt="お酒の画像"
            />
            0.1～1%未満
          </li>
          <li className="px-[8px] h-[30px] flex justify-between items-center gap-x-1 leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            <Image
              className="p-[3px] border rounded-[50px]"
              src="/icon-check.svg"
              width={16}
              height={10}
              alt="お酒の画像"
            />
            1～10%
          </li>
          <li className=" px-[8px] h-[30px] flex justify-between items-center gap-x-1 leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            <Image
              className="p-[3px] border rounded-[50px]"
              src="/icon-check.svg"
              width={16}
              height={10}
              alt="お酒の画像"
            />
            21～30%
          </li>
          <li className=" px-[8px] h-[30px] flex justify-between items-center gap-x-1 leading-[14px] text-center align-middle py-[5px] border rounded-[25px]">
            <Image
              className="p-[3px] border rounded-[50px]"
              src="/icon-check.svg"
              width={16}
              height={10}
              alt="お酒の画像"
            />
            31%～
          </li>
        </ul>
      </div>

      <hr className="mb-[35px]" />

      <button className="w-[242px] bg-[#D9D9D9] text-[#D6D1BF] border-[#D6D1BF] border rounded-[25px] py-[10px] px-[20px] text-center mx-auto block ">
        <Image className="mx-auto" src="/icon-blacksearch.svg" width={25} height={25} alt="検索ボタン" />
      </button>
    </div>
  );
}
