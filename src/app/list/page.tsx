import { AlcoholListItem } from '@/components/AlcoholListItem';
import { DisplayGroupList } from '@/components/DisplayTypeList';

export default function Home() {
  return (
    <div>
      <DisplayGroupList initialCurrent="ビール" />
      <div className="grid grid-cols-3  gap-6 mt-24 ">
        {[...Array(9)].map((_, i) => (
          <AlcoholListItem key={i} />
        ))}
      </div>
    </div>
  );
}
