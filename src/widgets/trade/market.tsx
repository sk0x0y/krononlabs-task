export default function Market() {
  return (
    <section className="" style={{ gridArea: 'market' }}>
      <div className="px-4">
        <div className="flex items-center gap-2 w-full h-[30px] mt-[12px] pl-2 pr-3 border border-input-border rounded-lg">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 border-none outline-none bg-transparent font-medium appearance-none"
          />
        </div>
      </div>

      <div className="flex items-center h-[42px] px-4 border-b border-b-divider font-medium text-sm">
        <ul className="whitespace-nowrap overflow-x-auto scrollbar-hide flex gap-6 text-secondary [&>li]:cursor-pointer">
          <li className="hover:text-primary-text">USDT</li>
          <li className="hover:text-primary-text">FDUSD</li>
          <li className="hover:text-primary-text text-primary-text">USDC</li>
          <li className="hover:text-primary-text">TUSD</li>
          <li className="hover:text-primary-text">BNB</li>
          <li className="hover:text-primary-text">BTC</li>
          <li className="hover:text-primary-text">ALTS</li>
        </ul>
      </div>

      <div className="flex justify-between px-4 py-2 text-xs text-secondary">
        <span className="flex-1 min-w-[120px]">Pair</span>
        <span className="flex-1 text-right">Last Price / 24h Change</span>
      </div>

      {/* 리스트 */}
      <div className="h-[358px] px-4 py-1 text-xs overflow-y-auto scrollbar-hide">
        <div className="flex justify-between py-0.5">
          <span className="min-w-[120px]">1000SATS/USDC</span>

          <div className="flex gap-2">
            <span className="flex-1 text-right">0.0002298</span>
            <span className="flex-1 min-w-[60px] text-positive text-right">
              +2.54%
            </span>
          </div>
        </div>

        <div className="flex justify-between py-0.5">
          <span className="min-w-[120px]">1MBABYDOGE/USDC</span>

          <div className="flex gap-2">
            <span className="flex-1 text-right">0.0024622</span>
            <span className="flex-1 min-w-[60px] text-positive text-right">
              +5.33%
            </span>
          </div>
        </div>

        <div className="flex justify-between py-0.5">
          <span className="min-w-[120px]">AAVE/USDC</span>

          <div className="flex gap-2">
            <span className="flex-1 text-right">370.46</span>
            <span className="flex-1 min-w-[60px] text-negative text-right">
              -3.26%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
