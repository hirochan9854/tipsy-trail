'use client';

import { usePathname } from 'next/navigation';

import { IconFavorite } from './svg/IconFavorite';
import { IconHome } from './svg/IconHome';
import { IconList } from './svg/IconList';

export const Footer: React.FC = () => {
  const path = usePathname();

  const isCurrent = {
    home: path === '/',
    list: path === '/list',
    favorite: path === '/favorite',
  };

  return (
    <footer className="z-60 fixed inset-x-0 bottom-0 ">
      <nav className="mb-[10px] flex items-center justify-around bg-[#0C151B] text-[10px] text-[#BDB9AA]">
        <a className="flex flex-col items-center" href="/">
          <IconHome isCurrent={isCurrent.home} />
          <span className="mt-1">top</span>
        </a>
        <a className="flex flex-col items-center" href="/list">
          <IconList isCurrent={isCurrent.list} />
          <span className="mt-1">list</span>
        </a>
        <a className="flex flex-col items-center" href="/favorite">
          <IconFavorite isCurrent={isCurrent.favorite} />
          <span className="mt-1">my favorite</span>
        </a>
      </nav>
    </footer>
  );
};
