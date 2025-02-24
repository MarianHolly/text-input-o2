export const AlertIcon = ({
    currentColor,
  }: {
    currentColor: string;
  }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill={currentColor}
      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
    />
  </svg>
);

export const AlertIconOutlines = ({
  currentColor,
}: {
  currentColor: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
  >
    <path
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      fill="none"
      stroke={currentColor}
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <path
      d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z"
      fill="none"
      stroke={currentColor}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" />
  </svg>
);
