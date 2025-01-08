import { mockAlcohols } from '@/mock/mockAlcohols';
import Image from 'next/image';

export default function Home() {
  const alcohol = mockAlcohols.find((a) => a.id === 1); // idが1のお酒を取得
  return (
    <div className="container text-[#D6D1BF]">
      <div className="flex justify-between align-middle mx-[15px] mt-[50px]">
        <a href="/">
          <Image src="/icon-arrow.svg" width={24} height={24} alt="矢印" />
        </a>
        <h1>TipsyTrail</h1>
        <a href="/">
          <Image src="/icon-serach.svg" width={24} height={24} alt="検索" />
        </a>
      </div>

      <div>
        <h2>{alcohol?.base}</h2> {/* お酒のベースを表示 */}
      </div>

      <div>
        <Image src="/img-sample-sake.png" width={177} height={198} alt="お酒の画像" />
        <p>{alcohol?.description} </p>

        <ul>
          <li>
            <span>ベース</span>
            <span>{alcohol?.base}</span>
          </li>
          <li>
            <span>度数</span>
            <span>{alcohol?.alcoholContent}</span>
          </li>
          <li>
            <span>特徴</span>
            <span>{alcohol?.feature}</span>
          </li>
          <li>
            <span>材料</span>
            <span>{alcohol?.material}</span>
          </li>
        </ul>
        {/* お気に入りのボタンをいれる */}
      </div>
    </div>
  );
}
