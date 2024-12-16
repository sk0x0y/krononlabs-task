import Link from 'next/link';

export default function SubHeader() {
  return (
    <section
      className="flex items-center px-4 py-1"
      style={{ gridArea: 'subHeader' }}
    >
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <h2 className="font-medium text-xl">BTC/USDT</h2>
          <Link
            href="https://www.binance.com/en/price/bitcoin"
            target="_blank"
            className="inline-flex items-center text-xs text-secondary"
          >
            Bitcoin Price
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[1em] h-[1em] mb-1"
              style={{ fontSize: 8, verticalAlign: 2, marginLeft: 2 }}
            >
              <path
                d="M18.363 5h-10v2.5h5.734l-9.346 9.346 1.768 1.767 9.345-9.344V15h2.5V5z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold text-xl text-positive">
            106,990.47
          </span>
          <span className="text-xs">$106,990.47</span>
        </div>
      </div>

      <div className="flex gap-4 px-4">
        <div className="flex flex-col text-xs">
          <span className="mb-0.5 text-secondary">24h Change</span>
          <span className="text-positive">3966.82 &nbsp; +3.85%</span>
        </div>

        <div className="flex flex-col text-xs">
          <span className="mb-0.5 text-secondary">24h High</span>
          <span className="">107,306.29</span>
        </div>

        <div className="flex flex-col text-xs">
          <span className="mb-0.5 text-secondary">24h Low</span>
          <span className="">102,621.50</span>
        </div>

        <div className="flex flex-col text-xs">
          <span className="mb-0.5 text-secondary">24h Volume(BTC)</span>
          <span className="">39,132.37</span>
        </div>

        <div className="flex flex-col text-xs">
          <span className="mb-0.5 text-secondary">24h Volume(USDT)</span>
          <span className="">4,114,846,319.98</span>
        </div>
      </div>
    </section>
  );
}
