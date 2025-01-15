'use client';

import { useState, useEffect, useRef } from 'react';

export type GroupListProps = {
  initialCurrent: string;
};

export const DisplayGroupList = ({ initialCurrent }: GroupListProps) => {
  const [current, setCurrent] = useState(initialCurrent);
  const containerRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  useEffect(() => {
    const currentItem = itemRefs.current.get(current);

    if (containerRef.current && currentItem) {
      const containerWidth = containerRef.current.offsetWidth;
      const currentItemWidth = currentItem.offsetWidth;
      const currentItemOffset = currentItem.offsetLeft;

      const scrollPosition = currentItemOffset - containerWidth / 2 + currentItemWidth / 2;

      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [current]);

  const handleClick = (name: string) => {
    setCurrent(name);
  };

  const setItemRef = (element: HTMLLIElement | null, name: string) => {
    if (element) {
      itemRefs.current.set(name, element);
    }
  };

  return (
    <div className="absolute top-16 z-10">
      <ul
        className="hidden-scrollbar flex w-screen flex-nowrap items-center gap-5 overflow-scroll px-52"
        ref={containerRef}
      >
        {['ビール', 'ウィスキー', 'リキュール', 'ワイン', 'テキーラ', 'ジン', 'ウォッカ', 'ラム', 'カクテル'].map(
          (name) => (
            <li
              key={name}
              className={`text-nowrap font-semibold cursor-pointer ${
                current === name ? 'text-ll text-[#D6D1BF] underline underline-offset-4' : 'text-base text-[#333333]'
              }`}
              onClick={() => handleClick(name)}
              ref={(element) => setItemRef(element, name)}
            >
              {name}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
