'use client';

import { usePathname } from 'next/navigation';

import { IconHome } from './svg/IconHome';
import { IconList } from './svg/IconList';
import { IconFavorite } from './svg/IconFavorite';

export const Footer: React.FC = () => {
  const path = usePathname();

  const isCurrent = {
    home: path === '/',
    list: path === '/list',
    favorite: path === '/favorite',
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 ">
      <nav className="flex justify-around items-center bg-[#0C151B] text-[#BDB9AA]">
        <a href="/" className="flex flex-col items-center">
          <IconHome isCurrent={isCurrent.home} />
          <span>top</span>
        </a>
        <a href="/list" className="flex flex-col items-center">
          <IconList isCurrent={isCurrent.list} />
          <span>list</span>
        </a>
        <a href="/favorite" className="flex flex-col items-center">
          <IconFavorite isCurrent={isCurrent.favorite} />
          <span>my favorite</span>
        </a>
      </nav>
    </footer>
  );
};
