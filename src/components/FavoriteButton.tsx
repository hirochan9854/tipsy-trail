export type FavoriteButtonProps = {
  isFavorite: boolean;
  onClick: () => void;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onClick }) => {
  return (
    <button className={`${isFavorite ? 'bg-[#0C151B]' : 'bg-[#D9D9D9]'} h-6 w-full rounded-[10px]`} onClick={onClick}>
      <div className="mx-auto w-fit">
        <svg fill="none" height="12" viewBox="0 0 13 12" width="13" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.02447 0.463526C6.17415 0.00287055 6.82585 0.00286993 6.97553 0.463525L8.0716 3.83688C8.13854 4.04289 8.33051 4.18237 8.54713 4.18237H12.0941C12.5784 4.18237 12.7798 4.80218 12.388 5.08688L9.51843 7.17173C9.34318 7.29905 9.26985 7.52474 9.33679 7.73075L10.4329 11.1041C10.5825 11.5648 10.0553 11.9478 9.66344 11.6631L6.79389 9.57827C6.61865 9.45095 6.38135 9.45095 6.20611 9.57827L3.33656 11.6631C2.9447 11.9478 2.41746 11.5648 2.56714 11.1041L3.66321 7.73075C3.73015 7.52474 3.65682 7.29905 3.48157 7.17173L0.612025 5.08688C0.220169 4.80218 0.421556 4.18237 0.905918 4.18237H4.45287C4.66949 4.18237 4.86146 4.04289 4.9284 3.83688L6.02447 0.463526Z"
            fill={`${isFavorite ? '#CDA61A' : '#666666'}`}
          />
        </svg>
      </div>
    </button>
  );
};
