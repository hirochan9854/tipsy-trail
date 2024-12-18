export type IconHomeProps = {
  isCurrent: boolean;
};

export const IconHome: React.FC<IconHomeProps> = ({ isCurrent }) => {
  return (
    <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.9916 13.9699C31.9916 14.9541 31.1581 15.7251 30.2134 15.7251H28.4351L28.474 24.4843C28.474 24.6319 28.4629 24.7795 28.4462 24.9272V25.8129C28.4462 27.0213 27.4515 28 26.2234 28H25.3343C25.2732 28 25.2121 28 25.1509 27.9945C25.0732 28 24.9954 28 24.9176 28L23.1115 27.9945H21.7779C20.5498 27.9945 19.5551 27.0158 19.5551 25.8075V24.4952V20.9959C19.5551 20.0281 18.7604 19.2462 17.7768 19.2462H14.2203C13.2368 19.2462 12.4421 20.0281 12.4421 20.9959V24.4952V25.8075C12.4421 27.0158 11.4474 27.9945 10.2193 27.9945H8.88563H7.11295C7.0296 27.9945 6.94624 27.9891 6.86289 27.9836C6.7962 27.9891 6.72952 27.9945 6.66283 27.9945H5.77372C4.54562 27.9945 3.55092 27.0158 3.55092 25.8075V19.6837C3.55092 19.6344 3.55092 19.5798 3.55648 19.5306V15.7196H1.77824C0.777979 15.7196 0 14.9541 0 13.9645C0 13.4724 0.16671 13.035 0.555699 12.6522L14.7983 0.437415C15.1873 0.0546768 15.6318 0 16.0208 0C16.4098 0 16.8544 0.109354 17.1878 0.382738L31.3803 12.6577C31.8249 13.0404 32.0472 13.4778 31.9916 13.9699Z"
        fill={isCurrent ? '#FFFFFF' : '#BDB9AA'}
      />
    </svg>
  );
};
