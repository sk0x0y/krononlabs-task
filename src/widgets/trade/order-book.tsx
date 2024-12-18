import { getOrderBookSnapshot } from '@features/order-book';

import OrderBookClient from './order-book-client';

interface OrderBookProps {
  symbol: string;
}
export default async function OrderBook({ symbol }: OrderBookProps) {
  const orderBookSnapshot = await getOrderBookSnapshot(symbol);

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

        <OrderBookClient symbol={symbol} snapshot={orderBookSnapshot} />
      </div>
    </section>
  );
}
