import { BINANCE_API_BASE, BINANCE_WS_BASE } from '@shared/constant';

export async function getOrderBookSnapshot(symbol: string) {
  const response = await fetch(
    `${BINANCE_API_BASE}/depth?symbol=${symbol}&limit=17`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
