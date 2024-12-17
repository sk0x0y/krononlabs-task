export default function Trades() {
  return (
    <section
      className=""
      style={{
        gridArea: 'trades',
      }}
    >
      <div className="flex items-center h-[42px] px-4 border-b border-b-divider font-medium text-sm">
        <ul className="flex gap-6 text-secondary [&>li]:cursor-pointer">
          <li className="hover:text-primary-text text-primary-text">
            Market Trades
          </li>
          <li className="hover:text-primary-text">My Trades</li>
        </ul>
      </div>

      <div className="px-4">
        <div className="flex justify-between py-2 text-xs text-secondary">
          <span className="flex-1">Price (USDT)</span>
          <span className="flex-1 text-right">Amount (BTC)</span>
          <span className="flex-1 text-right">Time</span>
        </div>

        {/* TODO:  17(16.5)개 표시 + Overflow Scroll */}

        <div className="h-[358px] py-1 text-xs overflow-y-auto scrollbar-hide">
          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          {/* Overflow */}
          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-positive">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>

          <div className="flex justify-between py-0.5">
            <span className="flex-1 text-negative">107212.00</span>
            <span className="flex-1 text-right">0.06320</span>
            <span className="flex-1 text-right">18:50:14</span>
          </div>
        </div>
      </div>
    </section>
  );
}
