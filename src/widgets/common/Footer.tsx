export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 z-10 flex items-center gap-4 w-full h-[28px] px-4 border-t-4 border-t-base-bg bg-primary-bg"
      style={{
        gridArea: 'footer',
      }}
    >
      <div className="flex items-center gap-1 text-xs text-positive">
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 6.33331H0V9.66665H2V6.33331Z"
            className="fill-positive"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.33333 4.33331H3.33333V9.66665H5.33333V4.33331Z"
            className="fill-positive"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.66667 2.33331H8.66667V9.66665H6.66667V2.33331Z"
            className="fill-positive"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0.333313H10V9.66665H12V0.333313Z"
            className="fill-positive"
          ></path>
        </svg>

        <span>Stable connection</span>
      </div>

      <div className="flex items-center gap-4 justify-center overflow-x-auto">
        <div className="flex gap-1 text-xs">
          <span className="">BTC/USDT</span>
          <span className="text-positive">+2.04%</span>
          <span className="text-secondary-text">104,4567.84</span>
        </div>

        <div className="flex gap-1 text-xs">
          <span className="">BTC/USDT</span>
          <span className="text-positive">+2.04%</span>
          <span className="text-secondary-text">104,4567.84</span>
        </div>

        <div className="flex gap-1 text-xs">
          <span className="">BTC/USDT</span>
          <span className="text-positive">+2.04%</span>
          <span className="text-secondary-text">104,4567.84</span>
        </div>
      </div>
    </footer>
  );
}
