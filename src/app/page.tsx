import { AlcoholListItem } from '@/components/AlcoholListItem';
import { RecommendedModal } from '@/components/RecommendedModal';

export default function Home() {
  return (
    <div>
      <RecommendedModal />
      <AlcoholListItem />
    </div>
  );
}
