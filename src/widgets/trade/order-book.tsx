import { getOrderBookSnapshot } from '@shared/api';

export default async function OrderBook() {
  const orderBookSnapshot = await getOrderBookSnapshot('BTCUSDT');
  console.log('orderBookSnapshot', orderBookSnapshot);

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
          {orderBookSnapshot.bids.map((bid, index) => (
            <div key={index} className="flex justify-between py-0.5">
              <span className="flex-1 text-negative">
                {Number(bid[0]).toFixed(2)}
              </span>
              <span className="flex-1 text-right">
                {Number(bid[1]).toFixed(5)}
              </span>
              <span className="flex-1 text-right">
                {(bid[0] * bid[1]).toFixed(5)}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center h-[36px]">
          <span className="mr-[20px] text-xl text-negative">
            {Number(orderBookSnapshot.bids[0][0]).toFixed(2) || '0.00'}
          </span>
          <span className="text-xs text-secondary">
            ${Number(orderBookSnapshot.bids[0][0]).toFixed(2) || '0.00'}
          </span>
        </div>

        {/* 롱 포지션 */}
        <div className="py-1 text-xs">
          {orderBookSnapshot.asks.map((ask, index) => (
            <div key={index} className="flex justify-between py-0.5">
              <span className="flex-1 text-positive">
                {Number(ask[0]).toFixed(2)}
              </span>
              <span className="flex-1 text-right">
                {Number(ask[1]).toFixed(5)}
              </span>
              <span className="flex-1 text-right">
                {(ask[0] * ask[1]).toFixed(5)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
