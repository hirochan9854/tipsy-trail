import { alcohols } from '@/types';

export const mockAlcohols: alcohols[] = [
  {
    id: 1,
    name: 'かぼすハイボール',
    description: 'かぼすの爽やかな香りが楽しめるハイボール',
    base: 'ハイボール',
    alcoholContent: '50%',
    feature: 'さっぱり',
    material: ['かぼす', 'ウイスキー', '炭酸水'],
  },
  {
    id: 2,
    name: '梅酒',
    description: '梅の甘酸っぱさが楽しめる梅酒',
    base: '梅酒',
    alcoholContent: '15%',
    feature: '甘い',
    material: ['梅', '氷砂糖', '焼酎'],
  },
  {
    id: 3,
    name: 'ライチサワー',
    description: 'ライチの香りが楽しめるサワー',
    base: 'サワー',
    alcoholContent: '5%',
    feature: '甘い',
    material: ['ライチ', '焼酎', '炭酸水'],
  },
  {
    id: 4,
    name: 'ミントモヒート',
    description: 'ミントの香りが楽めるモヒート',
    base: 'モヒート',
    alcoholContent: '10%',
    feature: 'さっぱり',
    material: ['ミント', 'ラム', '炭酸水'],
  },
  {
    id: 5,
    name: 'カシスオレンジ',
    description: 'カシスの香りが楽しめるカシスオレンジ',
    base: 'カシスオレンジ',
    alcoholContent: '5%',
    feature: '甘い',
    material: ['カシス', 'オレンジジュース', 'ウォッカ'],
  },
];
