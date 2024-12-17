export default function OrderBook() {
  return (
    <section style={{ gridArea: 'orderbook' }}>
      <div className="flex items-center h-[42px] px-4 border-b border-b-divider">
        <h3 className="font-medium text-sm">Order Book</h3>
      </div>

      <div className="px-4">
        <div className="flex justify-between py-2 text-xs text-secondary">
          <span className="flex-1">Price (USDT)</span>
          <span className="flex-1 text-right">Amount (BTC)</span>
          <span className="flex-1 text-right">Total</span>
        </div>

        {/* TODO: 각 포지션 17개씩 표시 */}

        {/* 숏 포지션 */}
        <div className="py-1 text-xs">
          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>
        </div>

        <div className="flex items-center h-[36px]">
          <span className="mr-[20px] text-xl text-negative">107,047.80</span>
          <span className="text-xs text-secondary">$107,047.80</span>
        </div>

        {/* 롱 포지션 */}
        <div className="py-1 text-xs">
          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">6.78K</span>
          </div>
        </div>
      </div>
    </section>
  );
}
