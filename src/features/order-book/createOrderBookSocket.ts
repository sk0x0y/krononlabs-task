import { BINANCE_WS_BASE } from '@shared/constant';

import { OrderBookSocketMessage } from './types';

export function createOrderBookSocket(
  symbol: string,
  onMessage: (data: OrderBookSocketMessage) => void,
  onError: (error: Event) => void,
) {
  const ws = new WebSocket(
    `${BINANCE_WS_BASE}/${symbol.toLowerCase()}@depth@100ms`,
  );

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };

  ws.onerror = onError;

  return ws;
}
