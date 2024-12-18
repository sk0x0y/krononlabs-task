import { BINANCE_API_BASE } from '@shared/constant';
import { OrderBookSnapshot } from '@/src/features/order-book/types';

export async function getOrderBookSnapshot(
  symbol: string,
): Promise<OrderBookSnapshot> {
  const response = await fetch(
    `${BINANCE_API_BASE}/depth?symbol=${symbol}&limit=19`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
